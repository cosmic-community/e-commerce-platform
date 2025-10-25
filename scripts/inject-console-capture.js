const fs = require('fs');
const path = require('path');

const buildDir = path.join(process.cwd(), '.next', 'static');
const publicDir = path.join(process.cwd(), 'public');

const scriptContent = fs.readFileSync(
  path.join(publicDir, 'dashboard-console-capture.js'),
  'utf8'
);

function injectScript(htmlPath) {
  let html = fs.readFileSync(htmlPath, 'utf8');
  
  if (!html.includes('dashboard-console-capture.js')) {
    html = html.replace(
      '</head>',
      `<script>${scriptContent}</script></head>`
    );
    fs.writeFileSync(htmlPath, html);
    console.log(`Injected console capture into ${htmlPath}`);
  }
}

function processDirectory(dir) {
  if (!fs.existsSync(dir)) return;
  
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.html')) {
      injectScript(filePath);
    }
  });
}

if (fs.existsSync(buildDir)) {
  processDirectory(buildDir);
  console.log('Console capture script injection complete');
} else {
  console.log('Build directory not found, skipping injection');
}