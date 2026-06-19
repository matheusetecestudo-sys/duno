import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, '../public/images');

console.log('Iniciando otimização de imagens em:', imagesDir);

fs.readdir(imagesDir, async (err, files) => {
  if (err) {
    console.error('Erro ao ler diretório de imagens:', err);
    return;
  }

  // Filtramos apenas as imagens PNG que o usuário adicionou
  const pngFiles = files.filter(f => {
    const name = f.toLowerCase();
    return name.endsWith('.png') && (
      name.includes('clinica') ||
      name.includes('dedetizadora') ||
      name.includes('psicologo') ||
      name.includes('salao') ||
      name.includes('vidracaria')
    );
  });

  console.log(`Encontradas ${pngFiles.length} imagens PNG para otimizar.`);

  for (const file of pngFiles) {
    const inputPath = path.join(imagesDir, file);
    const outputName = file.substring(0, file.lastIndexOf('.')) + '.webp';
    const outputPath = path.join(imagesDir, outputName);

    console.log(`Otimizando: "${file}" -> "${outputName}"...`);
    try {
      const start = Date.now();
      const statsBefore = fs.statSync(inputPath);
      const sizeBeforeMb = (statsBefore.size / 1024 / 1024).toFixed(2);

      const info = await sharp(inputPath)
        .webp({ quality: 80, effort: 4 })
        .toFile(outputPath);

      const sizeAfterMb = (info.size / 1024 / 1024).toFixed(2);
      const duration = ((Date.now() - start) / 1000).toFixed(2);
      const reduction = (((statsBefore.size - info.size) / statsBefore.size) * 100).toFixed(1);

      console.log(`Sucesso: "${outputName}" | Tamanho: de ${sizeBeforeMb}MB para ${sizeAfterMb}MB (-${reduction}%) em ${duration}s`);
    } catch (e) {
      console.error(`Erro ao processar "${file}":`, e);
    }
  }

  console.log('Processo de otimização de imagens concluído com sucesso!');
});
