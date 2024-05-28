
### Tarefa: Crie um pipeline de CI/CD usando o GitHub Actions para um projeto simples de aplicação web.

[x] - O pipeline deve ser ativado sempre que um novo commit for feito na branch main.

- O pipeline deve executar os seguintes passos:

[x] - Instalar as dependências do projeto.

[x] - Executar testes unitários.

[x] - Construir a aplicação.

[x] - Armazenar o artefato como release do github

[x] - Usar funcionalidade environment do github para restringir a aprovação do
deploy para um usuário ou grupo do github

[x] - Se todos os passos acima forem bem-sucedidos, o pipeline deve fazer o deploy da
aplicação em um ambiente de teste.

[x] - O pipeline deve notificar o desenvolvedor via e-mail se o processo de CI/CD falhar em
qualquer etapa.

## Criar um desenho simples de arquitetura na ferramenta draw.io (diagrams.net) que mostre como sera estruturado o pipeline.

[x] - No desenho deve estar descritos claramente a separação dos steps de
CI e de CD

[x] - Caso haja alguma interação manual isso deve estar declarado no
Desenho

## Criar uma action do tipo TypeScript que faça execução de algum linter

[x] - Validar se existe um arquivo no repositório necessário para o build,
caso negativo abortar a esteira indicando que e necessário esse
arquivo.

