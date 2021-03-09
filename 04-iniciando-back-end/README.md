<h1>Iniciando back-end do app</h1>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=Linguagem&message=node.JS&color=green&style=for-the-badge&logo=NODEJS"/>
</p>

> Status do Projeto: :heavy_check_mark: (concluido)

### Tópicos

:small_blue_diamond: [Descrição do projeto](#descrição-do-projeto)

:small_blue_diamond: [Arquitetura, testes e Finalização](#arquitetura-testes-e-finalização)

:small_blue_diamond: [Tecnologias](#tecnologias)

:small_blue_diamond: [Instalações e Dependências](#instalações-e-dependências)

:small_blue_diamond: [Instalações e Dependências 2ª parte](#instalações-e-dependências-2ª-parte)

:small_blue_diamond: [Regras da aplicação](#regras-da-aplicação)

:small_blue_diamond: [Imagens da arquitetura](#imagens-da-arquitetura)

:small_blue_diamond: [Vídeo do projeto](#vídeo-do-projeto)

:small_blue_diamond: [Vídeo do projeto 2ª parte](#vídeo-do-projeto-2ª-parte)

:small_blue_diamond: [Documentação](#documentação)

:small_blue_diamond: [Documentação 2ª parte](#documentação-2ª-parte)

## Descrição do projeto

<p align="justify">
  Na etapa de desenvolvimento do projeto, vamos trabalhar com alguns coiceitos de banco de dados com as estratégias de abstração, o Docker podendo criar o conteiner do banco, configurando o repositório TypeORM, podendo criar a tabela de agendamentos e o model de agendamento. Em cadastro de usuários vamos trabalhar no Model e migration de usuários, relacionamento nos models, criação de registros e criptografia de senha. Na autenticação vamos verificar o conceito de JWT, podendo validar as credenciais, gerando token JWT e com a configuraçao do insomnia criar rotas autenticadas. Apliando mais a nossa aplicação podemos fazer upload de arquivos ou imagens, atualizando o avatar e definindo os arquivos estáticos que possam ser requisitados pelo nosso front-end (web e mobile). Em tratamento das exceções vamos criando classe de erro, podendo lidar com erros de uma forma global em uma única parte do nosso código.
</p>

## Tecnologias

:heavy_check_mark: DBeaver

## Instalações e Dependências

:boom: mkdir 04-iniciando-back-end -> Criando as pastas

:warning: Copia a pasta do projeto anterior -> 03-primeiro-projeto-node

:boom: sudo docker run --name gostack_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres -> Comando para criar um container

:boom: lsof -i :5432 -> verifica se a porta esta disponível

:boom: sudo docker ps -> para listar

:boom: sudo docker ps -a -> lista todos

:boom: sudo docker start id -> pega o id da lista ou o nome

:boom: sudo docker start 6f6acd277b3c

:boom: yarn add typeorm pg

:boom: yarn typeorm

:boom: yarn dev:server -> rodar o servidor

:boom: Abrir o programa DBeaver e criar o gostack_gobarber

:boom: yarn typeorm migration:create -n CreateAppointments

:boom: yarn typeorm migration:run

:boom: yarn typeorm migration:create -n CreateUsers

:boom: yarn typeorm migration:run

:boom: yarn typeorm migration:create -n AlterProviderFieldToProviderId

:boom: yarn typeorm migration:run

:boom: yarn typeorm migration:create -n AddAvatarFieldToUsers

:boom: yarn typeorm migration:run

:boom: yarn typeorm migration:show -> Mostra as migrations executadas

:boom: yarn typeorm migration:revert -> Desfazer a migrations

:boom: yarn add reflect-metadata

:boom: yarn add bcryptjs

:boom: yarn add -D @types/bcryptjs

:boom: yarn add jsonwebtoken

:boom: yarn add -D @types/jsonwebtoken

:boom: yarn add multer

:boom: yarn add -D @types/multer

:boom: yarn add express-async-errors

:boom: yarn install -> Criar a pasta do node_modules caso você faça o clone do projeto

:boom: http://localhost:3333 -> Endereço do servidor

:boom: yarn add cors

:boom: yarn add @types/cors -D

## Regras da aplicação

> ### Recuperação de senha
**RF - Requisitos Funcionais**
- O usuário deve poder recumperar sua senha informando o seu e-mail;
- O Usuário deve receber um e-mail com instruções de recumperação de senha;
- O usuário deve poder resetar sua senha;

**RNF - Requisitos Não Funcionais**
- Utilizar Mailtrap para testar envios em ambiente de dev;
- Utilizar Amazan SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

**RN - Regras De Negocios**
- O link enviado por email para resetar senha, deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao resetar sua senha;

> ### Atualização do perfil
**RF - Requisitos Funcionais**
- O usuário deve poder atualizar seu nome, email e senha;

**RN - Regras De Negocios**
- O usuário não pode alterar seu email para um email já utilizado;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha;

> ### Painel do prestador
**RF - Requisitos Funcionais**
- O usuário deve poder listar seus agendamentos de um dia especifico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF - Requisitos Não Funcionais**
- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**RN - Regras De Negocios**
- A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar;

> ### Agendamento de serviços
**RF - Requisitos Funcionais**
- O usuário deve poder listar todos prestadores de serviço cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menis um horário disponivel de um prestador;
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNF - Requisitos Não Funcionais**
- A listagem de prestadores deve ser armazenada em cache;

**RN - Regras De Negocios**
- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponíveis entre 8h às 18h (primeiro às 8h, último às 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode serviço consigo mesmo;

## Imagens da arquitetura

<p align="justify">
Modelo da arquitetura usada no Docker.

![04-iniciando-back-end1](https://user-images.githubusercontent.com/54650669/110017288-d0b81c00-7d04-11eb-96af-63e5e85d3438.png)

Modelo da arquitetura usada na Autenticação JWT.

![04-iniciando-back-end2](https://user-images.githubusercontent.com/54650669/110017427-f6452580-7d04-11eb-873f-bcdf7395a48b.png)
</p>

## Vídeo do projeto

<p align="justify">
No terminal dentro da pasta do projeto, executa a linha de comando yarn dev:server.
</p>

![04-iniciando-back-end3](https://user-images.githubusercontent.com/54650669/110017594-2391d380-7d05-11eb-8555-fedf439f5b86.gif)

## Documentação

> <a href="https://node-postgres.com/" target="_blank">Node Postgres</a>

> <a href="http://knexjs.org/" target="_blank">KnexJS</a>

> <a href="https://sequelize.org/" target="_blank">Sequelize</a>

> <a href="https://typeorm.io/#/" target="_blank">Typeorm</a>

> <a href="https://www.notion.so/003-Instalando-Docker-eccbaa63fbb847798753bc92ef974322" target="_blank">Instalando Docker</a>

> <a href="http://www.md5.cz/" target="_blank">MD5</a>

> <a href="https://jwt.io/" target="_blank">JWT</a>

<h1>Arquitetura, testes no Node.js e Finalizando back-end do app</h1>

## Arquitetura, testes e Finalização

<p align="justify">
  Nessa etapa, continuaremos o projeto iniciado anteriormente adicionando pontos cruciais de arquitetura, design patterns e testes automatizados. Em arquitetura e DDD, temos os conceitos de DDD (Domain Driven Design) e TDD (Test-Driven Development), a separação em módulos, a camada de Infra, a configuração de Imports, reescrevendo Repositórios, refatorando módulo de usuários, a injeção de dependências, adicionando os controllers, a configuração do Jest, pensar em como devem ser implementados os testes, criando o primeiro teste, configurar o coverage report no Jest, testes de agendamento, testando a criação de usuário, testando a autenticação, configuração do provider de storage e atualização de Avatar.

  Para finalizar a aplicação, temos os conceitos mais complexos do back-end da aplicação como relacionamentos complexos, trabalhos em segundo plano, cache, bancos de dados não-relacionais e segurança. Nas estrutura e Ajustes, temos o mapeamento do features do sistema, o perfil do usuário, a recuperação de senha, o reset de senha, o salvamento dos tokens no banco, o template de email, o template engine, a refatoração dos testes, atualização do perfil, rota e controller de perfil.

  No agendamento, temos a listagem de prestadores, filtrando agendamentos por mês, listando dias disponíveis, listando horários disponíveis, excluindo horários antigos, criação do agendamento, regras do agendamento, rotas e controllers.

  Para finalizar o back-end incluindo as últimas funcionalidades do app e também conceitos como MongoDB, variáveis ambiente, validação, cache e segurança. Para o prestador de serviços, temos a agenda do prestador, a configuração MongoDB, as estruturas de notificações e enviando notificações. Em personalizando para produção, temos a validação dos dados, as variáveis de ambiente, a utilização da Class Transformer, a organização do container, a configuração do cache, o cache lista de providers, invalidando cache e o cache de agendamentos.
</p>

## Instalações e Dependências 2ª parte

:boom: yarn add tsconfig-paths -D

:boom: yarn add tsyringe

:boom: yarn add jest -D

:boom: yarn jest --init

:boom: yarn add ts-jest -D

:boom: yarn add @types/jest -D

:boom: yarn test

:boom: yarn test -> caminho do arquivo .spec.ts

:boom: yarn typeorm migration:create -n CreateUserTokens

:boom: yarn typeorm migration:create -n AddUserIdToAppointments

:boom: yarn typeorm migration:run

:boom: yarn add nodemailer

:boom: yarn add @types/nodemailer -D

:boom: yarn add handlebars

:boom: yarn jest --clearCache

:boom: sudo docker run --name mongodb -p 27017:27017 -d -t mongo

:boom: sudo docker start mongodb

:boom: http://localhost:27017 -> Endereço do servidor mongo

:boom: yarn add mongodb

:boom: yarn add @types/mongodb -D

:boom: yarn add celebrate

:boom: yarn add @types/hapi__joi

:boom: yarn add dotenv

:boom: git rm --cached ormconfig.json

:boom: yarn add class-transformer

:boom: yarn add aws-sdk

:boom: yarn add mime

:boom: sudo docker run --name redis -p 6379:6379 -d -t redis:alpine

:boom: sudo docker start redis

:boom: yarn add ioredis

:boom: yarn add @types/ioredis -D

:boom: yarn add rate-limiter-flexible

:boom: yarn add redis

:boom: yarn add @types/redis

## Vídeo do projeto 2ª parte

<p align="justify">
No terminal dentro da pasta do projeto, executa a linha de comando yarn test.
</p>

![04-iniciando-back-end4](https://user-images.githubusercontent.com/54650669/110403374-c2973200-805b-11eb-8cac-902973d0ca6e.gif)

## Documentação 2ª parte

> <a href="https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme" target="_blank">Material Icon Theme</a>

> <a href="https://www.mongodb.com/try/download/compass" target="_blank">MongoDB</a>

## Desenvolvedores/Contribuintes :octocat:

Responsável pelo desenvolvimento do projeto

| [<img src="https://avatars0.githubusercontent.com/u/54650669?s=460&u=256c0c28b9d5560d21d734ceedb09439a7521cc2&v=4" width=115><br><sub>Itamar Santos da Silva</sub>](https://github.com/itamar1986) |
| :---: |

## Linkedin <a href="https://www.linkedin.com/in/itamar-santos-da-silva-463b0a176" target="_blank"> Itamar Santos da Silva</a>
