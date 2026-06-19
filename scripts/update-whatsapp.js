import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.join(__dirname, '../src');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

console.log('Iniciando atualizacao de numero de WhatsApp...');

let count = 0;
walkDir(srcDir, (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    if (
      content.includes('5511999999999') || 
      content.includes('11999999999') || 
      content.includes('551199999-9999') || 
      content.includes('1199999-9999') ||
      content.includes('99999-9999')
    ) {
      let updated = content
        .replace(/5511999999999/g, '5511992876219')
        .replace(/11999999999/g, '11992876219')
        .replace(/551199999-9999/g, '5511992876219')
        .replace(/1199999-9999/g, '11992876219')
        .replace(/99999-9999/g, '99287-6219');
      
      fs.writeFileSync(filePath, updated, 'utf8');
      console.log(`Atualizado: ${filePath}`);
      count++;
    }
  }
});

console.log(`Concluido! ${count} arquivos foram atualizados.`);
