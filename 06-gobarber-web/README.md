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

:small_blue_diamond: [Vídeo do projeto 2ª parte](#vídeo-do-projeto-2ª-parte)

:small_blue_diamond: [Documentação](#documentação)

:small_blue_diamond: [Finalizando front-end web do app e Testes no ReactJS](#finalizando-front-end-web-do-app-e-testes-no-reactjs)

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

:boom: yarn add react-day-picker

:boom: yarn add date-fns

:boom: yarn test

:boom: yarn test --coverage --watchAll false

:boom: yarn test:coverage

:boom: yarn add @testing-library/react-hooks -D

:boom: yarn add react-test-renderer -D

:boom: yarn add axios-mock-adapter -D
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

## <h1>Finalizando front-end web do app e Testes no ReactJS</h1>

<p align="justify">
  Nessa etapa continuaremos o desenvolvimento do front-end web da aplicação GoBarber criando as telas e funções que os prestadores de serviço utilizarão para consultar sua agenda e disponibilidade. Será necessário ajustar a API, utilizar o Query Params, verificar os agendamentos no mesmo horário, verificar os dias indisponíveis no mês, trazer mais informações necessárias dos clientes dos agendamentos e implementar a serialização no cache.
  Em recuperação de senha, temos a criação da página de recuperação, o envio de formulário a API, criação e implementação da página de redefinição.
  No Dashboard temos a criação do Header, listagem do próximo agendamento, adicionar o componente de calendário e estilizações, fazendo novas chamadas à API para a disponibilidade do mês, tratar os agendamentos da API e a exibição dos agendamentos em tela.
  No perfil do usuário, temos a página de perfil, a troca de avatar e alteração dos dados.

  Referente aos Testes no ReactJS, será conhecida as principais ferramentas do ecossistema do React para testar nossas aplicações a fim de garantir que o usuário tenha a mesma experiência com a parte visual da aplicação independente de quantas funcionalidades sejam adicionadas. Em Ambiente de testes, temos a configuração ambiente do Jest, criação do primeiro teste e a geração do coverage report. Em testando autenticação, vamos criar o teste de login, o mock do hook de autenticação e o teste de componente de input. Em Testando hooks, iniciamos os testes dos hooks, a criação do mock da API,
</p>

## Vídeo do projeto 2ª parte

<p align="justify">
Vídeo com a tela de criar conta, cadastrando o Nome, E-mail e senha. Na tela abaixo tem o software DBeaver com a criação dos dados na tabela.
</p>

![06-gobarber-web6](https://user-images.githubusercontent.com/54650669/110554065-dd7bac00-8118-11eb-96ef-2b0670ac9aa2.gif)

<p align="justify">
Vídeo com a tela do logon, sendo direcionada para troca de avatar e logo após interagindo com o calendário disponível.
</p>

![06-gobarber-web7](https://user-images.githubusercontent.com/54650669/110554159-fdab6b00-8118-11eb-8c53-aa757175d7f7.gif)

## Desenvolvedores/Contribuintes :octocat:

Responsável pelo desenvolvimento do projeto

| [<img src="https://avatars0.githubusercontent.com/u/54650669?s=460&u=256c0c28b9d5560d21d734ceedb09439a7521cc2&v=4" width=115><br><sub>Itamar Santos da Silva</sub>](https://github.com/itamar1986) |
| :---: |

## Linkedin <a href="https://www.linkedin.com/in/itamar-santos-da-silva-463b0a176" target="_blank"> Itamar Santos da Silva</a>
