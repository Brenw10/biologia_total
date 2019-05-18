# Biologia Total Cursos

## Pre-requisitos
  - Docker ou Node.js e MongoDB instalados
  - Portas utilizadas para client e server: `3000` e `3001`

## Detalhes
 > Para rodar o projeto você poderar rodar manualmente ou utilizando container do docker. Abaixo terá os steps para as duas formas:

## Rodando com Docker
  - Vá para a pasta root.
  - Rode `docker-compose build`.
  - Rode `docker-compose up`.
  - Acesse `localhost:3000`.
  - O sistema vai estar funcionando.

## Rodando com Manualmente
 - Ligue seu MongoDB `mongod`.
 - Vá na pasta `client/src/core` copia e cole na mesma pasta o `parameters.dist.js` salvando o como `parameters.js`.
 - Volte para a pasta `client` e rode `npm install` depois `npm start`.
 - Seu servidor client vai ligar `localhost:3000` como default.
 - Com um novo terminal vá a pasta `server/src/parameters` copia e cole na mesma pasta o `parameters.dist.yml` salvando o como `parameters.yml`.
 - Configure o arquivo novo com os dados do seu MongoDB.
 - Volte para a pasta `server` rode `npm install` depois `npm start`.
 - O sistema vai estar funcionando.

## Executar testes Jest
 - Acesse pasta de server e rode `npm install`.
 - Depois rode `npm run test` para executar os testes.