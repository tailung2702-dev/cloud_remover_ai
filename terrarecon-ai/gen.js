const fs = require('fs');
const css = fs.readFileSync('app/globals.css', 'utf-8');

let regex = /@theme inline \{([\s\S]*?)\n\n/m;
let match = regex.exec(css);
if(!match) {
  console.log('No match');
  process.exit(1);
}

let colorsBlock = match[1];
let rootLight = ':root, :root[data-theme="light"] {\n  color-scheme: light;\n';
let rootDark = ':root.dark, :root[data-theme="dark"] {\n  color-scheme: dark;\n';
let newTheme = '@theme inline {\n';

let lines = colorsBlock.split('\n');
for(let line of lines) {
  if(line.includes('--color-')) {
    let m = line.match(/(--color-[\w-]+):\s*([^;]+);/);
    if(m) {
      let name = m[1];
      let val = m[2];
      let appName = name.replace('--color-', '--app-');
      rootLight += `  ${appName}: ${val};\n`;
      newTheme += `  ${name}: var(${appName});\n`;
      
      let darkVal = val;
      if(name.includes('surface-container-lowest')) darkVal = '#0d0f0e';
      else if(name.includes('surface-container-low')) darkVal = '#1b1c1a';
      else if(name.includes('surface-container-highest')) darkVal = '#343534';
      else if(name.includes('surface-container-high')) darkVal = '#292a29';
      else if(name.includes('surface-container')) darkVal = '#1f201e';
      else if(name.includes('surface-variant')) darkVal = '#434654';
      else if(name === '--color-surface' || name === '--color-background') darkVal = '#121312';
      else if(name === '--color-on-surface' || name === '--color-on-background') darkVal = '#e3e2df';
      else if(name === '--color-on-surface-variant') darkVal = '#c3c6d6';
      else if(name === '--color-outline') darkVal = '#8c90a1';
      else if(name === '--color-outline-variant') darkVal = '#434654';
      else if(name === '--color-primary') darkVal = '#b3c5ff';
      else if(name === '--color-on-primary') darkVal = '#002a78';
      else if(name === '--color-primary-container') darkVal = '#0043ae';
      else if(name === '--color-on-primary-container') darkVal = '#dbe1ff';
      else if(name === '--color-secondary') darkVal = '#76d6d5';
      else if(name === '--color-on-secondary') darkVal = '#003737';
      else if(name === '--color-secondary-container') darkVal = '#004f4f';
      else if(name === '--color-on-secondary-container') darkVal = '#90efef';
      else if(name === '--color-error') darkVal = '#ffb4ab';
      else if(name === '--color-on-error') darkVal = '#690005';
      else if(name === '--color-error-container') darkVal = '#93000a';
      else if(name === '--color-on-error-container') darkVal = '#ffdad6';
      
      rootDark += `  ${appName}: ${darkVal};\n`;
    }
  } else {
    // preserve other declarations inside the inline theme block before the double newline
    if(line.trim()) {
      newTheme += line + '\n';
    }
  }
}

rootLight += '}\n';
rootDark += '}\n';

let newCss = css.replace(regex, rootLight + '\n' + rootDark + '\n' + newTheme + '\n\n');

// Also explicitly set body background to use the css variable to prevent overrides
newCss = newCss.replace(/body\s*\{[\s\S]*?\}/, `body {\n  background-color: var(--app-background, #faf9f5);\n  color: var(--app-on-background, #1b1c1a);\n  font-family: var(--font-sans);\n}`);

fs.writeFileSync('app/globals.css', newCss);
