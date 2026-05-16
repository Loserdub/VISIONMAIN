import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, '../dist');

function traverseAndStrip(dir) {
    if (!fs.existsSync(dir)) return;
    
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            traverseAndStrip(fullPath);
        } else if (fullPath.endsWith('.html')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            
            // Remove <script type="module" src="..."></script>
            content = content.replace(/<script\s+type="module"[^>]*><\/script>/g, '');
            content = content.replace(/<script\s+type="module"[^>]*>[\s\S]*?<\/script>/g, '');
            
            // Remove <link rel="modulepreload" href="...">
            content = content.replace(/<link\s+rel="modulepreload"[^>]*>/g, '');
            
            // Remove inline Vite preamble or other inline scripts (except application/ld+json)
            content = content.replace(/<script>(?!\{\s*"@context")[\s\S]*?<\/script>/g, '');
            
            fs.writeFileSync(fullPath, content, 'utf8');
            console.log(`Stripped JS from ${fullPath}`);
        }
    }
}

console.log('Stripping React/Vite hydration scripts for pure static HTML...');
traverseAndStrip(distDir);
console.log('Done!');
