<h1>Iniciando back-end do app</h1>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=Linguagem&message=node.JS&color=green&style=for-the-badge&logo=NODEJS"/>
</p>

> Status do Projeto: :heavy_check_mark: (concluido)

### Tópicos

:small_blue_diamond: [Descrição do projeto](#descrição-do-projeto)

:small_blue_diamond: [Tecnologias](#tecnologias)

:small_blue_diamond: [Instalações e Dependências](#instalações-e-dependências)

:small_blue_diamond: [Regras da aplicação](#regras-da-aplicação)

:small_blue_diamond: [Imagens da arquitetura](#imagens-da-arquitetura)

:small_blue_diamond: [Vídeo do projeto](#vídeo-do-projeto)

:small_blue_diamond: [Documentação](#documentação)

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

## Desenvolvedores/Contribuintes :octocat:

Responsável pelo desenvolvimento do projeto

| [<img src="https://avatars0.githubusercontent.com/u/54650669?s=460&u=256c0c28b9d5560d21d734ceedb09439a7521cc2&v=4" width=115><br><sub>Itamar Santos da Silva</sub>](https://github.com/itamar1986) |
| :---: |

## Linkedin <a href="https://www.linkedin.com/in/itamar-santos-da-silva-463b0a176" target="_blank"> Itamar Santos da Silva</a>
