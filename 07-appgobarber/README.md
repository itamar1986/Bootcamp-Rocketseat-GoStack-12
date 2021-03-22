<h1>Iniciando aplicativo mobile</h1>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=Linguagem&message=REACT_NATIVE&color=purple&style=for-the-badge&logo=REACT_NATIVE"/>
</p>

> Status do Projeto: :heavy_check_mark: (concluido)

### Tópicos

:small_blue_diamond: [Descrição do projeto](#descrição-do-projeto)

:small_blue_diamond: [Tecnologias](#tecnologias)

:small_blue_diamond: [Instalações e Dependências](#instalações-e-dependências)

:small_blue_diamond: [Vídeo do projeto](#vídeo-do-projeto)

:small_blue_diamond: [Documentação](#documentação)

:small_blue_diamond: [Finalizando front-end mobile do app e Testes no React Native](#finalizando-front-end-mobile-do-app-e-testes-no-react-native)

## Descrição do projeto

<p align="justify">
Nesse módulo criamos a versão mobile do GoBarber que será utilizada pelos usuários para agendar serviços dentro da plataforma. Como já é de costume, temos alguns assuntos abordados nessa aplicação como a configuração da estrutura e padrões com EsLint, prettier e editorConfig, a configuração da StatusBar, a configuração da navegação, a
densidade de pixel e como importar as fontes externas.

Na autenticação e cadastro, temos o input e button, a tela de autenticação, a tela de cadastro, a integração do Unform, a usabilidade em formulários, o foco e preenchimento e a validação dos formulários.

Em conectando com a API, temos o cadastro na aplicação, a autenticação de usuários e as rotas privadas.
</p>

## Tecnologias

:heavy_check_mark: React Native

:heavy_check_mark: Insomnia

## Instalações e Dependências

:boom: sudo npm uninstall -g react-native-cli

:boom: npx react-native init appgobarber --template react-native-template-typescript -> Criando as pastas

:boom: yarn install -> Criar a pasta do node_modules caso você faça o clone do projeto

:boom: Abrir dois terminais:
- npm start
- npx react-native run-android --no-jetifier

:boom: yarn add styled-components

:boom: yarn add @types/styled-components -D

:boom: yarn add @react-navigation/native

:boom: yarn add @types/styled-components-react-native -D

:boom: yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

:boom: yarn add @react-navigation/stack

:boom: yarn react-native link

:boom: yarn add react-native-vector-icons

:boom: yarn add -D @types/react-native-vector-icons

:boom: yarn add react-native-iphone-x-helper

:boom: yarn add @unform/core @unform/mobile

:boom: yarn add react react-dom -> restruturando o unform

:boom: yarn add yup

:boom: yarn add @types/yup -D

:boom: yarn add axios

:boom: yarn add @react-native-community/async-storage

:boom: yarn dev:server -> rodar o servidor dentro da pasta /04-iniciando-back-end

:boom: ip addr → Android com físico: IP da máquina
- baseURL: 'http://IP da máquina:3333'

:boom: ip addr

:boom: yarn add @react-native-community/datetimepicker

:boom: yarn add date-fns

:boom: cd ~/Flipper-linux
- ./flipper

:boom: yarn add --dev react-native-testing-library

:boom: yarn add --dev @testing-library/jest-native

:boom: yarn test

:boom: yarn test --watchAll true

:boom: yarn test --coverage

## Documentação

> <a href="https://www.notion.so/Padr-es-de-projeto-com-ESLint-Prettier-e-EditorConfig-0b57b47a24724c859c0cf226aa0cc3a7" target="_blank">Padrões de projeto com ESLint, Prettier e EditorConfig</a>

> <a href="https://reactnavigation.org/docs/getting-started/" target="_blank">React Navigation</a>

> <a href="https://fonts.google.com/specimen/Roboto+Slab?preview.text_type=custom" target="_blank">Google Fonts</a>

> <a href="https://stackoverflow.com/questions/51026532/json-server-cannot-access-via-local-ip" target="_blank">Json-server cannot access via local IP</a>

> <a href="https://fbflipper.com/" target="_blank">Flipper</a>

> <a href="https://dev.to/birobirobiro/como-criar-um-atalho-com-icone-do-flipper-no-linux-53c7" target="_blank">Criando um atalho do Flipper </a>

> <a href="https://www.notion.so/Configurando-o-Image-Picker-para-o-Android-d1a4ec6ca7c34ad59e7a68ec0d2b2e19" target="_blank">Configurando o Image Picker para o Android</a>

## Vídeo do projeto

<p align="justify">

  - No terminal dentro da pasta do projeto do servidor back-end, executa o docker e yarn dev:server.

  - Faz a Requisição no Insomnia.

  - No terminal dentro da pasta do projeto, executa dois terminais, um com npm start e o outro com npx react-native run-android --no-jetifier.

  - Vídeo da tela mobile com a tela de login, agendamento de dia e horário, tela de confirmação e tela de perfil.
</p>

![07-appgobarber1](https://user-images.githubusercontent.com/54650669/110564125-1d4b8f00-812b-11eb-8d12-204dfa248c24.gif)

<p align="justify">

  - Vídeo da tela mobile com a tela de cadastro, tela de login e agendamento de dia e horário.
</p>

![07-appgobarber2](https://user-images.githubusercontent.com/54650669/110564743-2426d180-812c-11eb-9e44-d5014965f933.gif)

## <h1>Finalizando front-end mobile do app e Testes no React Native</h1>

<p align="justify">
  Finalizando o aplicativo mobile com React Native do GoBarber que será utilizado pelos clientes para agendar serviços com os prestadores. Vamos iniciar pelo ajustes na API, listando os providers com serialização, colocando endereço das imagens, criação das páginas e rotas. No Dashboard, temos o Header do Dashboard, a busca de providers da API e a listagem de prestadores. No agendamento, temos a criação da estrutura, a alternação entre providers, a criação do Picker de data, a busca da disponibilidade da API, a debugação do app com Flipper, a disponibilidade por período, mostrando horários em tela e criação do agendamento. Na página de sucesso, temos a criação da estrutura da tela e a formatação da data. No perfil, temos a criação da tela de perfil e a atualização dos dados.

  Referente aos Testes no React Native será necessário realizar a configuração de ambiente.
</p>

## Desenvolvedores/Contribuintes :octocat:

Responsável pelo desenvolvimento do projeto

| [<img src="https://avatars0.githubusercontent.com/u/54650669?s=460&u=256c0c28b9d5560d21d734ceedb09439a7521cc2&v=4" width=115><br><sub>Itamar Santos da Silva</sub>](https://github.com/itamar1986) |
| :---: |

## Linkedin <a href="https://www.linkedin.com/in/itamar-santos-da-silva-463b0a176" target="_blank"> Itamar Santos da Silva</a>
