"""
Trust Node Logic (VISIONMAIN) - Component Synchronization Engine
Propagates and validates reusable layout partials (Header, Footer, Booking) across static pages.
"""

import os
import glob
import re
import json

def load_component(name):
    path = os.path.join('components', name)
    if not os.path.exists(path):
        raise FileNotFoundError(f"Component not found: {path}")
    with open(path, 'r', encoding='utf-8') as f:
        return f.read()

def get_nav_key(fpath):
    fpath = fpath.replace('\\', '/')
    name = os.path.splitext(os.path.basename(fpath))[0].lower()
    if name in ['index', 'home']:
        return 'home'
    if 'field-note' in name:
        return 'field-notes'
    if 'hybrid' in name:
        return 'what-is-hybrid'
    if 'project' in name:
        return 'projects'
    if 'music' in name:
        return 'music'
    if 'about' in name:
        return 'about'
    if 'service' in name:
        return 'services'
    if 'contact' in name:
        return 'contact'
    return None

def validate_components():
    print("Validating components in components/ directory...")
    components = ['header.html', 'footer.html', 'booking-banner.html', 'person-schema.json']
    for comp in components:
        content = load_component(comp)
        if comp.endswith('.json'):
            json.loads(content) # validate JSON
        print(f"  [PASS] {comp} ({len(content)} bytes)")
    print("All component partials valid.\n")

if __name__ == '__main__':
    validate_components()
