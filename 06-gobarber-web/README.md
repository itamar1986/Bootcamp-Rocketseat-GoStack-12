<h1>Iniciando front-end web</h1>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=Linguagem&message=react.JS&color=blue&style=for-the-badge&logo=REACTJS"/>
</p>

> Status do Projeto: :heavy_check_mark: (concluido)
### Tópicos

:small_blue_diamond: [Descrição do projeto](#descrição-do-projeto)

:small_blue_diamond: [Tecnologias](#tecnologias)

:small_blue_diamond: [Instalações e Dependências](#instalações-e-dependências)

:small_blue_diamond: [Vídeo do projeto](#vídeo-do-projeto)

:small_blue_diamond: [Documentação](#documentação)

## Descrição do projeto

<p align="justify">
Durante esse módulo criaremos a versão web da aplicação GoBarber que será utilizada pelos usuários que prestam serviços dentro da aplicação.
Começando pela estrutura das páginas, vamos usar a CLI do create-react-app e a mesma configuração do ESLint, Prettier e EditorConfig que foi utilizada no módulo anterior.

Será necessário configurar os estilos globais, logo depois começaremos com a estruturação e estilização da página de login do GoBarber, onde será necessário isolar alguns componentes que serão reutilizados em mais de uma parte da aplicação, a exemplo da página de cadastro. Iremos conhecer o Unform que é um pacote para lidar com formulários, acrescentando mais a usabilidade dos inputs. Temos outras necessidades para a nossa aplicação como a validação de cadastro, a exibição de erros no Input, a criação de tooltip de erros que é a exibição dos erros em tela para que o formulário tenha mais usabilidade e a validação de login.

Na autenticação vamos habilitar os CORS na API, trabalhar com API de Contexto, com Login pelo contexto que realizará as requisições do front-end à API, mantendo o usuário no storage, criando o hook useAuth e implementar o logout da aplicação.

Na estrutura de mensagens de toast temos sucesso, alerta e erro. Assim podemos criar hook de toast, adicionando e removendo os Toasts e aplicando efeitos de transição na adição e remoção de um toast.

Nas rotas da aplicação vamos configurar o pacote react-router-dom, autenticar as rotas e finalizar a aplicação de rotas para que o usuário, por exemplo, acesse o dashboard apenas se ele já estiver autenticado. Caso o contrário, ele deve ser redirecionado à página de login.
</p>

## Tecnologias

:heavy_check_mark: Yarn

:heavy_check_mark: React

:heavy_check_mark: Insomnia

## Instalações e Dependências

:boom: yarn create react-app 06-gobarber-web --template=typescript -> Criando as pastas

:boom: yarn install -> Criar a pasta do node_modules caso você faça o clone do projeto

:boom: insomnia → authenticate

:boom: yarn start -> rodar o servidor

:boom: http://localhost:3000 -> Endereço do servidor

:boom: yarn add styled-components

:boom: yarn add @types/styled-components -D

:boom: yarn add react-icons

:boom: yarn add polished

:boom: yarn add @unform/core @unform/web

:boom: yarn add yup

:boom: yarn add @types/yup -D

:boom: yarn add axios

:boom: yarn add uuid

:boom: yarn add @types/uuid -D

:boom: yarn add react-spring

:boom: yarn add react-router-dom

:boom: yarn add @types/react-router-dom -D

## Vídeo do projeto

<p align="justify">
Tentando fazer a requisição pelo Insomnia, porem o servidor back-end não está rodando.
</p>

![06-gobarber-web1](https://user-images.githubusercontent.com/54650669/110325510-3272d180-7ff6-11eb-8ff0-a0bc9f83e85c.gif)

<p align="justify">
No terminal dentro da pasta do projeto do servidor back-end, executa o docker e yarn dev:server.
</p>

![06-gobarber-web2](https://user-images.githubusercontent.com/54650669/110325668-60581600-7ff6-11eb-8a33-518a0d7b10b7.gif)

<p align="justify">
Requisição do Insomnia aceita.
</p>

![06-gobarber-web3](https://user-images.githubusercontent.com/54650669/110328620-53d5bc80-7ffa-11eb-929d-c7a04962c5f2.png)

<p align="justify">
No terminal dentro da pasta do projeto, executa a linha de comando yarn start.<br>
</p>

![06-gobarber-web4](https://user-images.githubusercontent.com/54650669/110325833-98f7ef80-7ff6-11eb-95d7-b1a2dc0a60b3.png)

<p align="justify">
Fazendo testes de logon de e-mail e senha errada, antes de colocar a requisição cadastrada no Insomnia.
</p>

![06-gobarber-web5](https://user-images.githubusercontent.com/54650669/110325901-b3ca6400-7ff6-11eb-8f5a-21e7d408c030.gif)

## Documentação

> <a href="https://www.notion.so/React-Hooks-e-Context-API-c2effc37567442adbfa36bbc4cd94d9c" target="_blank">React Hooks e Context API</a>

## Desenvolvedores/Contribuintes :octocat:

Responsável pelo desenvolvimento do projeto

| [<img src="https://avatars0.githubusercontent.com/u/54650669?s=460&u=256c0c28b9d5560d21d734ceedb09439a7521cc2&v=4" width=115><br><sub>Itamar Santos da Silva</sub>](https://github.com/itamar1986) |
| :---: |

## Linkedin <a href="https://www.linkedin.com/in/itamar-santos-da-silva-463b0a176" target="_blank"> Itamar Santos da Silva</a>
