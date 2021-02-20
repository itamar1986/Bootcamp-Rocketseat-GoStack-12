<h1>Front-end com ReactJS</h1> 

<p align="center">
  <img src="https://img.shields.io/static/v1?label=Linguagem&message=react.JS&color=blue&style=for-the-badge&logo=REACTJS"/>
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
Nesse projeto foram desenvolvidos os primeiros conceitos do ReactJS, assim, foi realizada a primeira aplicação web e conectada no backend que foi criada no projeto anterior (https://github.com/itamar1986/Bootcamp-Rocketseat-GoStack-12/tree/master/02-conceitos-dev/01-backend).

É de extrema importância conhecer os conceitos ReactJS, para que ele serve, porque utilizamos ele, suas vantagens e diversos conceitos por trás dele. Desenvolvemos conceitos sobre SPA (Single-page Applications), como funciona um componente e o conceito de componentização, divisão de responsabilidades entre front-end e back-end, programação imperativa versus programação declarativa, Babel e Webpack.

Na configuração do Babel é importante saber que ele é responsável em converter o código da nossa aplicação em um código que o Browser vai entender. O Webpack é responsável em pegar cada tipo de arquivo (.js, .css, .png), e converter o código de uma maneira diferente. Os Loaders são responsáveis em interagir, exemplo babel-loader, css-loader, image-loader.

Na configuração do Webpack podemos gerar o bundle da nossa aplicação configurando os loaders que são responsáveis por converter diversos tipos de arquivos como JS, CSS, JSON, arquivos de imagem e etc. Além disso, vamos habilitar o live reload da nossa aplicação.

Na Componentização é separada uma parte do nosso código para transformá-lo em algo que pode ser reaproveitado quantas vezes a gente quiser em qualquer parte da nossa aplicação. Assim, podemos usar o conceito de JSX: HTML dentro do JavaScript (Javascript XML) e o conceito de fregment dentro de React, exemplo <> ou < div >.
    
No Estado e Imutabilidade podemos armazenar e manipular valores dentro do nosso componente do React utilizando os React Hooks, criando uma pequena funcionalidade de listagem de projetos para entender o funcionamento do estado.

Podemos importar CSS e imagens quando configuramos alguns loaders do nosso Webpack para aceitar arquivos de CSS e imagens, e na prática a estilização da nossa página de listagem de projetos aplicando um pouquinho de css e adicionando algumas imagens.

Para finalizar vamos listar os projetos da API conectando a nossa aplicação front-end com o back-end que desenvolvemos no projeto anterior (https://github.com/itamar1986/Bootcamp-Rocketseat-GoStack-12/tree/master/02-conceitos-dev/01-backend), fazendo com que a nossa página de listagem de projetos passe a salvar os dados da nossa API já desenvolvida no estado da aplicação, e exibí-los em tela. Assim, temos o estado da aplicação cadastrando novos projetos no nosso banco de dados, mantendo-os salvos na nossa aplicação conforme cadastramos.
</p>

## Tecnologias

:heavy_check_mark: Yarn

:heavy_check_mark: React   

:heavy_check_mark: Babel  

:heavy_check_mark: Webpack

:heavy_check_mark: Insomnia

## Instalações

:boom: mkdir conceitos-dev/frontend -> Criando as pastas

:boom: yarn init -y -> Inicializando o projeto dentro das pastas criadas

:boom: yarn install -> Criar a pasta do node_modules caso você faça o clone do projeto

:boom: yarn add react react-dom -> Integração do react com a arvore de elementos

:boom: yarn dev -> rodar o servidor

:boom: http://localhost:8080 -> Endereço do servidor

## Dependências

:boom: yarn add @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli

:boom: yarn add @babel/cli

:boom: yarn babel src/index.js --out-file public/bundle.js

:boom: yarn add babel-loader

:boom: yarn webpack --mode development

:boom: yarn add webpack-dev-server -D -> Servidor de desenvolvimento do webpack

:boom: yarn webpack serve --mode development -> Rodar o servidor webpack

:boom: yarn add style-loader css-loader

:boom: yarn add file-loader

:boom: yarn add axios

:boom: yarn add @babel/plugin-transform-runtime -D

## Vídeo do projeto

<p align="justify">
No terminal dentro da pasta do projeto, executa a linha de comando yarn dev.<br>
Bootcamp-Rocketseat-GoStack-12/02-conceitos-dev/02-frontend
</p>

![02-frontend 1](https://user-images.githubusercontent.com/54650669/108576762-8c3c8180-72fd-11eb-9182-20f4ad823e9e.gif)

<p align="justify">
No terminal dentro da pasta do projeto, executa a linha de comando yarn dev.<br>
Bootcamp-Rocketseat-GoStack-12/02-conceitos-dev/01-backend
</p>

<p align="justify">
No endereço http://localhost:8080 faz uma requisição ao clicar no botão (Adicionar projeto.)
</p>

![02-frontend 2](https://user-images.githubusercontent.com/54650669/108576804-b2622180-72fd-11eb-9b05-4964a7f4147a.gif)
<p align="justify">
É necessário estar com os dois servidores rodando.
</p>

## Desenvolvedores/Contribuintes :octocat:

Responsável pelo desenvolvimento do projeto

| [<img src="https://avatars0.githubusercontent.com/u/54650669?s=460&u=256c0c28b9d5560d21d734ceedb09439a7521cc2&v=4" width=115><br><sub>Itamar Santos da Silva</sub>](https://github.com/itamar1986) |
| :---: |

## Linkedin <a href="https://www.linkedin.com/in/itamar-santos-da-silva-463b0a176" target="_blank"> Itamar Santos da Silva</a>
