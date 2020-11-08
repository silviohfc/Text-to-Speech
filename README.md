<div align="center">
<h1>Text to Speech</h1>
<p style="color:#888"> Text to audio conversion using IBM Watson Text to Speech API.</p>

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com) \
![GitHub repo size](https://img.shields.io/github/repo-size/silviohfc/launchbase-foodfy?style=for-the-badge) ![GitHub](https://img.shields.io/github/license/silviohfc/launchbase-foodfy?color=blue&style=for-the-badge)

[:brazil: Português](#brazil-instalação) | [:us: English](#us-getting-started)

![PrintScreen](https://i.ibb.co/Ky3RmvS/Screenshot-at-Nov-08-16-00-10.png)
</div>

## :us: Getting Started

##### Requirements
* [Node.js](https://nodejs.org/en/)
* [MySQL](https://www.mysql.com/)
* [Text to Speech API](https://www.ibm.com/cloud/watson-text-to-speech)

##### Cloning the Project
After install all requirements, clone the project in your workspace:
``` 
$ git clone https://github.com/silviohfc/Text-to-Speech.git
```
Inside the project folder, install all dependencies:
``` 
$ npm install
```
##### Database
Create MySQL database and comments table with the code inside file ```src/config/database.sql```

##### Database Connection
Replace database settings inside file ```src/config/database.js```, like the code below:
```
module.exports = createPool({
    host: 'your_host',
    database: 'database_name',
    user: 'your_user',
    password: 'your_pass'
})
```
##### API Configuration
Insert the **Text to Speech API** key and url created in your IBM Cloud account into file ```src/app/apis/textToSpeech.js```, like the code below:
```
const textToSpeech = new WatsonTextToSpeech({
    authenticator: new IamAuthenticator({
        apikey: 'your_api_key'
    }),
    serviceUrl: 'your_url'
})
```

Lastly, start the project:
``` 
$ npm start
```


## License
Distributed under the MIT License. See ```LICENSE``` for more information.

---

## :brazil: Instalação

##### Pré requisitos
* [Node.js](https://nodejs.org/en/)
* [MySQL](https://www.mysql.com/)
* [API Text to Speech](https://www.ibm.com/cloud/watson-text-to-speech)

##### Clonando o projeto
Após ter instalado/criado os pré requisitos em sua máquina, clone o repositório:
``` 
$ git clone https://github.com/silviohfc/Text-to-Speech.git
```
Dentro da pasta instale as dependências:
``` 
$ npm install
```
##### Banco de dados
Crie o banco de dados e a tabela MySQL  utilizando o código contido no arquivo ```src/config/database.sql```

##### Conexão com o banco
Configure a conexão ao banco de dados no arquivo ```src/config/database.js```, semelhante ao código abaixo:
```
module.exports = createPool({
    host: 'seu_host',
    database: 'nome_do_banco',
    user: 'seu_usuario',
    password: 'sua_senha'
})
```
##### Configuração da API
Insira a chave e url da **API Text to Speech** criada em sua conta da IBM Cloud no arquivo ```src/app/apis/textToSpeech.js```, semelhante ao código abaixo:
```
const textToSpeech = new WatsonTextToSpeech({
    authenticator: new IamAuthenticator({
        apikey: 'sua_chave'
    }),
    serviceUrl: 'sua_url'
})
```

Por fim, inicie o projeto:
``` 
$ npm start
```


## Licença
Distribuído sob a licença MIT. Veja ```LICENSE``` para mais informações.