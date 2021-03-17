<h1 align="center">
    <br>GeoService<br/>
    Node.js | React Native
</h1>

<p align="center">
  <img alt="Made by Gustavo Gomes" src="https://img.shields.io/badge/Made%20by-Gustavo%20Gomes-blueviolet?style=flat-square"><br/>
  <img alt="GitHub" src="https://img.shields.io/badge/license-MIT-green?style=flat-square">
  <a href="https://insomnia.rest/run/?label=GeoService&uri=https%3A%2F%2Fgithub.com%2FGustavoGomesRibeiro%2FgeoServices%2Fblob%2Fmain%2FBackend%2Fgeoservice_api.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>
<p align="center">
  <a href="#books-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#bookmark-api">API</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-como-executar">Como Executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## :books: Sobre

![desing](https://user-images.githubusercontent.com/32501381/111509414-78811100-872b-11eb-94be-bde602190cec.png)

O **GeoService** é uma aplicação Mobile feita para auxiliar na conexão entre os clientes e os mecânicos. Esta aplicação oferece aos mecânicos a possibilidade de registrar o estabelecimento, adicionar serviços que prestam e aos clientes a possibilidade de buscar pelos serviços cadastradas ou pelo estabelecimento mais proximo da sua região.

## :computer: Tecnologias

### **Aplicação React Native**

- [Expo](https://expo.io/)
- [React Native](http://facebook.github.io/react-native/)
- [Axios](https://github.com/axios/axios)
- [Google Maps](https://console.cloud.google.com/apis/library?folder=&organizationId=&project=smart-paratext-305718)

### **Aplicação Back-End**

- [Postgresql](https://www.postgresql.org/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Knex](https://knexjs.org/)
- [Heroku](https://www.heroku.com/)

## :bookmark: Api

- ### **Api da aplicação**
  <a href="https://insomnia.rest/run/?label=GeoService&uri=https%3A%2F%2Fgithub.com%2FGustavoGomesRibeiro%2FgeoServices%2Fblob%2Fmain%2FBackend%2Fgeoservice_api.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>

## :rocket: Como Executar

- ### **Pré-requisitos aplicação React Native**

  - É **necessário** possuir o **[Node.js](https://nodejs.org/en/)** instalado no computador.
  - É **necessário** possuir o **[Git](https://git-scm.com/)** instalado e configurado no computador.
  - Também, é **preciso** ter um gerenciador de pacotes seja o **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**.
  - Por fim, é **essencial** ter o **[Expo](https://expo.io/)** instalado de forma global na máquina.
  - Sempre **importante** executar antes de iniciar o projeto o comando **`npm install`** para instalar as depêndicias do projeto.

1. Faça um clone do repositório:

```sh
  $ git clone https://github.com/GustavoGomesRibeiro/geoServices.git
```

2. Executando a Aplicação:

```sh
  # Aplicação mobile
  $ cd Mobile/geoservice

  # Instalando as dependências do projeto.
  $ yarn ou npm install

  # Inicie a aplicação mobile
  $ yarn start ou npm start

  #Definindo o seu IP local, conseguirá realizar testes localmente.
  $ Dentro da chamada API definir o IP que será exibido ao executar o expo:

  # Diretório /service
  const api = axios.create({
    baseURL: "http://192.168.0.169:3333",
  });
```

- ### **Pré-requisitos aplicação Backend**

  - É **necessário** possuir o **[Node.js](https://nodejs.org/en/)** instalado no computador.
  - É **necessário** possuir o **[Knex](https://knexjs.org/)** instalado no computador.
  - É **necessário** possuir o **[Postgresql](https://www.postgresql.org/)** configurado no computador caso queira visualizar suas tabelas.
  - Sempre **importante** executar antes de iniciar o projeto o comando **`npm install`** para instalar as depêndicias do projeto.

    2.1. Executando a Aplicação Backend:

```sh
  # API
  $ cd Backend

  # Instalando as dependências do projeto.
  $ yarn ou npm install

  # Gerando as migrations usando knex.
  $ npx knex migrate:latest

  # Inicie a API
  $ yarn start ou npm start

  # Inicie a API for DEV
  $ yarn dev ou npm dev
```

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

<sup>Projeto desenvolvido por [Gustavo Gomes](https://github.com/GustavoGomesRibeiro).</sup>
