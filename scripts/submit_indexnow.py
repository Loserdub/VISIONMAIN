#!/usr/bin/env python3
"""
IndexNow Submission Utility for Trust Node Logic (trustnodelogic.com)
Automatically reads the IndexNow API key file, extracts URLs from sitemap.xml
or command-line arguments, checks if the verification key is live, and submits
the URLs to IndexNow (Bing, Yandex, Naver, Seznam).
"""

import sys
import os
import glob
import json
import argparse
import urllib.request
import urllib.error
import xml.etree.ElementTree as ET

HOST = "trustnodelogic.com"
INDEXNOW_ENDPOINTS = [
    "https://api.indexnow.org/indexnow",
    "https://www.bing.com/indexnow"
]

def find_key_file():
    txt_files = glob.glob("*.txt")
    for f in txt_files:
        basename = os.path.basename(f)
        name, _ = os.path.splitext(basename)
        if len(name) == 32 and all(c in '0123456789abcdefABCDEF' for c in name):
            with open(f, 'r', encoding='utf-8') as fp:
                key_content = fp.read().strip()
            if key_content.lower() == name.lower():
                return f, key_content
    return None, None

def check_key_live(key):
    url = f"https://{HOST}/{key}.txt"
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'IndexNow-Preflight/1.0'})
        with urllib.request.urlopen(req, timeout=8) as res:
            if res.getcode() == 200:
                body = res.read().decode('utf-8', errors='ignore').strip()
                if body == key:
                    return True, "Key verified live and matching on server"
                return False, f"Key file returned unexpected body: '{body[:32]}'"
    except urllib.error.HTTPError as e:
        return False, f"HTTP {e.code} ({e.reason})"
    except Exception as e:
        return False, f"Network error: {str(e)}"
    return False, "Unknown verification error"

def load_sitemap_urls():
    if not os.path.exists("sitemap.xml"):
        return []
    tree = ET.parse("sitemap.xml")
    root = tree.getroot()
    urls = []
    for child in root:
        loc = child.find("{http://www.sitemaps.org/schemas/sitemap/0.9}loc")
        if loc is not None and loc.text:
            u = loc.text.strip()
            if u.startswith(f"https://{HOST}"):
                urls.append(u)
    return urls

def submit_urls(key, url_list, endpoints=None):
    if endpoints is None:
        endpoints = INDEXNOW_ENDPOINTS

    key_location = f"https://{HOST}/{key}.txt"
    payload = {
        "host": HOST,
        "key": key,
        "keyLocation": key_location,
        "urlList": url_list
    }
    
    data = json.dumps(payload).encode("utf-8")
    headers = {
        "Content-Type": "application/json; charset=utf-8",
        "User-Agent": "TrustNodeLogic-IndexNow/1.0"
    }

    results = {}
    for endpoint in endpoints:
        req = urllib.request.Request(endpoint, data=data, headers=headers, method="POST")
        try:
            with urllib.request.urlopen(req, timeout=12) as response:
                status = response.getcode()
                results[endpoint] = {
                    "success": True,
                    "code": status,
                    "message": "OK - URLs submitted successfully" if status == 200 else f"Accepted ({status})"
                }
        except urllib.error.HTTPError as e:
            error_body = ""
            try:
                error_body = e.read().decode("utf-8", errors="ignore")
            except Exception:
                pass
            results[endpoint] = {
                "success": False,
                "code": e.code,
                "message": f"HTTP {e.code} ({e.reason}): {error_body.strip()}"
            }
        except Exception as e:
            results[endpoint] = {
                "success": False,
                "code": 0,
                "message": f"Connection error: {str(e)}"
            }
    return results

def main():
    parser = argparse.ArgumentParser(description="Submit URLs to IndexNow / Bing Webmaster Tools")
    parser.add_argument("urls", nargs="*", help="Specific URLs to submit (defaults to all URLs in sitemap.xml)")
    parser.add_argument("--force", action="store_true", help="Submit even if key is not yet verified live on domain")
    args = parser.parse_args()

    print("=== INDEXNOW SUBMISSION AGENT ===")
    
    key_file, key = find_key_file()
    if not key:
        print("ERROR: Could not find a valid 32-character IndexNow key file (*.txt) in repository root.")
        sys.exit(1)
        
    print(f"[Key File Found]: {key_file} (Key: {key})")

    # Check if key is live on production
    print(f"Checking live key on https://{HOST}/{key}.txt ...")
    is_live, msg = check_key_live(key)
    if is_live:
        print(f"  [Status]: LIVE (200 OK) - {msg}")
    else:
        print(f"  [Status]: NOT LIVE YET ({msg})")
        if not args.force:
            print("\nWARNING: The IndexNow key file has not yet been pushed/deployed to the live domain.")
            print(f"IndexNow will reject verification if https://{HOST}/{key}.txt returns 404.")
            print("Please run:")
            print("  git add .")
            print("  git commit -m \"Add IndexNow verification key\"")
            print("  git push")
            print("\nOnce deployed, re-run this script, or use '--force' to submit anyway.")
            sys.exit(1)
        else:
            print("  [--force flag supplied: proceeding with submission attempt]")

    # Determine URL list
    if args.urls:
        urls_to_submit = args.urls
        print(f"\nSubmitting {len(urls_to_submit)} specific URL(s)...")
    else:
        urls_to_submit = load_sitemap_urls()
        print(f"\nLoaded {len(urls_to_submit)} URL(s) from sitemap.xml...")

    for i, u in enumerate(urls_to_submit, 1):
        print(f"  {i:2d}. {u}")

    print("\nSending payload to IndexNow endpoints...")
    results = submit_urls(key, urls_to_submit)

    all_passed = True
    for endpoint, res in results.items():
        prefix = "SUCCESS" if res["success"] else "FAILED"
        print(f"  [{prefix}] {endpoint}")
        print(f"            Code: {res['code']} | {res['message']}")
        if not res["success"]:
            all_passed = False

    if all_passed:
        print("\nAll endpoints accepted the submission successfully!")
    else:
        print("\nOne or more submissions returned an error.")

if __name__ == "__main__":
    main()
