<h1>Back-end com NodeJS</h1> 

<p align="center">
  <img src="https://img.shields.io/static/v1?label=Linguagem&message=node.JS&color=green&style=for-the-badge&logo=NODEJS"/>
</p>

> Status do Projeto: :heavy_check_mark: (concluido)

### Tópicos 

:small_blue_diamond: [Descrição do projeto](#descrição-do-projeto)

:small_blue_diamond: [Tecnologias](#tecnologias)

:small_blue_diamond: [Instalações](#instalações)

:small_blue_diamond: [Dependências](#dependências)

:small_blue_diamond: [Vídeo do projeto](#vídeo-do-projeto)

## Descrição do projeto 

<p align="justify">
  Nesse primeiro módulo foi desenvolvido os primeiros conceitos do NodeJS e foi aplicado na construção do backend. Assim, podemos entender o que são o NodeJS, Npm e Yarn, para que eles servem, porque os utilizamos, suas vantagens e diversos conceitos por trás deles.

  Entende-se como conceito API REST como sendo uma das formas de lidar com o fluxo de requisição e resposta do backend. Assim, temos os métodos HTTP, recursos e rotas, tipos de parâmetros, benefícios da API em relação ao clássico padrão MVC, estrutura de dados JSON (JavaScript Object Notation) e HTTP Codes.

  Na criação do projeto NodeJS, é necessário instalar o ExpressJS, instanciar nosso primeiro servidor na porta 3333, realizar uma requisição GET e retornar nossa primeira resposta em JSON.

  Na configuração do Nodemon, vamos instalar e configurar o Nodemon para que ele aplique essas alterações automaticamente e assim ajude na produtividade no ambiente de desenvolvimento.

  Os métodos HTTP têm as suas peculiaridades, enquanto criamos as rotas com os 4 principais deles (GET: busca informações do back-end, POST: cria uma informação no back-end, PUT/PATCH: altera uma informação no back-end e DELETE: deleta uma informação no back-end).

  Na utilização do software Insomnia, temos a necessidade de criar sub environments, montar as requisições para testar as rotas com os 4 métodos HTTP e executá-las para visualizar o retorno em JSON de cada uma delas.

  Os três tipos de parâmetros (Query Params: filtros e paginação, Route Params: identificar recursos (Atualizar/Deletar) e Request Body: conteúdo na hora criar ou editar um recurso (JSON)), assim podemos utilizá-los no código e quais parâmetros devem ser utilizados em cada rota.

  Na aplicação funcional é possivel utilizar os 4 métodos HTTP (GET, POST, PUT e DELETE) e os 3 tipos de parâmetros (Query, Route e Body) e gerenciar os projetos diretamente na memória do servidor utilizando arrays, utilizando o uuid como identificador único de cada projeto e retornar manualmente um HTTP Status Code que melhor condiz com a resposta do servidor.

  Os Middlewares tendo sua importância nas aplicações, seus parâmetros, formas de aplicá-los no código e como utilizá-lo para alterar o fluxo das requisições.
</p>

## Tecnologias

:heavy_check_mark: Yarn

:heavy_check_mark: Express   

:heavy_check_mark: Nodemon  

:heavy_check_mark: Uuid

:heavy_check_mark: Cors

:heavy_check_mark: Insomnia

## Instalações

:boom: mkdir conceitos-dev/backend -> Criando as pastas

:boom: yarn init -y -> Inicializando o projeto dentro das pastas criadas

:boom: yarn install -> Criar a pasta do node_modules caso você faça o clone do projeto

:boom: yarn dev -> rodar o servidor

:boom: http://localhost:3333 -> Endereço do servidor

## Dependências

:boom: yarn add express -> Flexíbilidade que fornece um conjunto robusto de recursos

:boom: yarn add nodemon -D -> Instalação do nodemon

:boom: yarn add uuidv4 -> Pacote descontinuado

:boom: yarn add uuid -> Criar ids exclusivos

:boom: yarn add cors

## Vídeo do projeto

<p align="justify">
No terminal dentro da pasta do projeto, executa a linha de comando yarn dev.
</p>

![01-backend](https://user-images.githubusercontent.com/54650669/108403396-69c33f00-71fd-11eb-82df-c5c38601b861.gif)

## Desenvolvedores/Contribuintes :octocat:

Responsável pelo desenvolvimento do projeto

| [<img src="https://avatars0.githubusercontent.com/u/54650669?s=460&u=256c0c28b9d5560d21d734ceedb09439a7521cc2&v=4" width=115><br><sub>Itamar Santos da Silva</sub>](https://github.com/itamar1986) |
| :---: |

## Linkedin <a href="https://www.linkedin.com/in/itamar-santos-da-silva-463b0a176" target="_blank"> Itamar Santos da Silva</a>
