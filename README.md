# GRAPHQL CLIENT
React GraphQL APP Desenvolvida com Node.Js

API: https://github.com/tiagolpires/graphql-api
## Inicie o projeto
Instale as dependências
```
npm install
```
Inicialize o Docker
```
docker-compose up
```
Acesse o projeto
http://localhost:3000/
## Docker
* `docker-compose up` - Inicializa o servidor
* `docker-compose down` - Desliga o servidor
* `docker-compose up --build` - Liga rescrevendo o container
* `docker exec -it graphql-client bash` - Acessa o shell do servidor
* `docker ps` - Lista todos os containers ativos
## Built With
- [React.Js](https://pt-br.reactjs.org/) - Aplicação
- [Apollo Client](https://www.apollographql.com/docs/react/) - Manage GraphQL data
