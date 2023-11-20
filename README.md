# Gestão bancária

### Stack Utilizada
* [Node.JS](https://nodejs.org/)
* [Docker](https://www.docker.com/)
* [Express](https://expressjs.com/)
* [Sequelize](https://sequelize.org/)
* [Postgres](https://www.postgresql.org/)
* [Jest](https://jestjs.io/)
### Como executar

#### Sem Docker
Para executar o projeto é necessário ter uma instância do Postgres rodando no sistema.

Preencha o arquivo *.env.sample* no diretório raiz do projeto com as informações do banco de dados.

Instale as dependências do NPM e execute o script NPM de dev.
```sh
$ npm install
$ npm run dev
```

#### Com Docker

Para executar é necessário ter o Docker instalado.

Inicie os serviços do *docker-compose.yaml* com o Docker Compose.

#### Docker Compose
```sh
$ docker-compose -f "docker-compose.yaml" up -d --build
```
