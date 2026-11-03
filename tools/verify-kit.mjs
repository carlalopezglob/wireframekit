#!/usr/bin/env node
// Comprueba que el kit está completo y coherente: todo módulo tiene spec,
// todo enlace de notas resuelve, todo módulo está en su índice y en el catálogo visual.
// Uso: node tools/verify-kit.mjs

import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const modulesDir = join(ROOT, 'modules');
const registryDir = join(ROOT, 'registry');
const catalogoPath = join(ROOT, 'catalogo-visual.html');

let errors = [];
let warnings = [];

function categories() {
  return readdirSync(modulesDir).filter((f) => statSync(join(modulesDir, f)).isDirectory());
}

function htmlFiles(dir) {
  return existsSync(dir) ? readdirSync(dir).filter((f) => f.endsWith('.html')) : [];
}

function mdFiles(dir) {
  return existsSync(dir) ? readdirSync(dir).filter((f) => f.endsWith('.md')) : [];
}

const catalogoSrc = existsSync(catalogoPath) ? readFileSync(catalogoPath, 'utf8') : '';

for (const cat of categories()) {
  const modDir = join(modulesDir, cat);
  const specDir = join(registryDir, cat);
  const indexFile = join(registryDir, `${cat}.md`);

  if (!existsSync(indexFile)) {
    errors.push(`Falta el índice de categoría: registry/${cat}.md`);
  }

  const modules = htmlFiles(modDir);
  if (modules.length === 0) {
    warnings.push(`${cat}: no tiene ningún módulo .html`);
    continue;
  }

  for (const modFile of modules) {
    const modPath = join(modDir, modFile);
    const modName = basename(modFile, '.html');
    const html = readFileSync(modPath, 'utf8');

    // 1. Debe importar el sistema compartido
    if (!html.includes('shared/styles.css')) errors.push(`${cat}/${modFile}: no importa shared/styles.css`);
    if (!html.includes('shared/wireframe.js')) errors.push(`${cat}/${modFile}: no importa shared/wireframe.js`);

    // 2. Debe tener el panel de notas
    const specSrcMatch = html.match(/data-spec-src="([^"]+)"/);
    if (!specSrcMatch) {
      errors.push(`${cat}/${modFile}: no tiene panel <details class="kit-notes" data-spec-src="...">`);
    } else {
      const specRelPath = specSrcMatch[1];
      const resolvedSpecPath = join(modDir, specRelPath);
      if (!existsSync(resolvedSpecPath)) {
        errors.push(`${cat}/${modFile}: data-spec-src roto -> ${specRelPath}`);
      }
    }

    // 3. Debe existir una spec con el mismo nombre en registry/[CAT]/
    const expectedSpec = join(specDir, `${modName}.md`);
    if (!existsSync(expectedSpec)) {
      errors.push(`${cat}/${modFile}: no hay spec "${modName}.md" en registry/${cat}/`);
    }

    // 4. Debe estar en catalogo-visual.html
    const catalogPathForModule = `modules/${cat}/${modFile}`;
    if (!catalogoSrc.includes(catalogPathForModule)) {
      errors.push(`${cat}/${modFile}: no aparece en catalogo-visual.html`);
    }
  }

  // 5. Specs huérfanas (sin módulo HTML correspondiente)
  const specs = mdFiles(specDir);
  for (const specFile of specs) {
    const specName = basename(specFile, '.md');
    const expectedModule = join(modDir, `${specName}.html`);
    if (!existsSync(expectedModule)) {
      warnings.push(`registry/${cat}/${specFile}: spec sin módulo HTML correspondiente (¿debería archivarse en _eliminar/?)`);
    }
  }
}

// 6. catalogo-visual.html no debe apuntar a nada que no exista
const iframeSrcs = [...catalogoSrc.matchAll(/iframe src="([^"]+)"/g)].map((m) => m[1]);
for (const src of iframeSrcs) {
  if (!existsSync(join(ROOT, decodeURIComponent(src)))) {
    errors.push(`catalogo-visual.html: iframe apunta a un fichero que no existe -> ${src}`);
  }
}

console.log(`\nVerificación del kit — ${categories().length} categorías\n`);

if (warnings.length) {
  console.log(`⚠️  ${warnings.length} aviso(s):`);
  warnings.forEach((w) => console.log(`   - ${w}`));
  console.log('');
}

if (errors.length) {
  console.log(`❌ ${errors.length} error(es):`);
  errors.forEach((e) => console.log(`   - ${e}`));
  console.log('');
  process.exit(1);
} else {
  console.log('✅ Todo correcto: cada módulo tiene spec, enlace de notas válido, índice y entrada en el catálogo visual.\n');
}
