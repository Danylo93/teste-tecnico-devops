import * as fs from 'fs';

async function main() {
  const requiredDirectoryPath = 'frontend/node_modules';

  console.log(`Verificando se o diretório ${requiredDirectoryPath} existe...`);

  try {
    await fs.promises.access(requiredDirectoryPath, fs.constants.F_OK);
    console.log(`Diretório ${requiredDirectoryPath} encontrado. Continuando com o build...`);
  } catch (error) {
    console.error(`Erro: Diretório ${requiredDirectoryPath} não encontrado. Abortando o build.`);
    process.exit(1);
  }
}

main();
