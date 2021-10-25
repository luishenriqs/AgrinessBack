### AGRINESS ###

# SOBRE O PROJETO

Esta a api do projeto Agriness. O Agriness é uma aplicação mobile para administrar uma granja de animais. Com ela é possível ter o controle de todos os animais, sua localização, dados cadastrais, peso e estágio de desenvolvimeto. O usuário também pode cadastrar ou deletar animais conforme são negociados atualizando assim sua lista.
Ela foi desenvolvida durante um teste técnico.

# TECNOLOGIAS UTILIZADAS 

## BACKEND

Typescript, NodeJs, Express, JWT, Multer, Docker, Swagger.

## FRONTEND 

Typescrip, React-Native, Styled-Components, Expo.

# COMO EXECUTAR O PROJETO

## Clonar o repositório
https://github.com/luishenriqs/AgrinessBack

## Entrar na pasta do projeto
agriness-node

## Executar o projeto no terminal
yarn typeorm migration:run
docker-compose up

# CADASTRO DE USUÁRIOS

**REQUISITOS FUNCIONAIS**

Deve ser possível cadastrar um novo usuário.
Deve ser possível buscar um usuário por email ou id.

**REQUISITOS NÃO FUNCIONAIS**

A senha do usuário deve ser criptografada com a lib bcryptjs.
Salvar todos os dados da aplicação em uma database "Postgres".

**REGRAS DE NEGÓCIO**

O usuário não deve poder cadastrar um email repetido.
A senha do usuário deve ser criptografada.


# AUTENTICAÇÃO DE USUÁRIOS

**REQUISITOS FUNCIONAIS**

Deve ser possível autenticar um novo usuário.
Ao ser autenticado deve ser gerado um token de autenticação.

**REQUISITOS NÃO FUNCIONAIS**

O token deve ser gerado com a lib JWT.
Utilizar o Jest para realização de testes automatizados.

**REGRAS DE NEGÓCIO**

Não deve ser possível autenticar um usuário com email ou senha incorretos.
O token deve ter expiração máxima em 1 dia.


# CADASTRO DE ANIMAIS

**REQUISITOS FUNCIONAIS**

Deve ser possível autenticar um novo animal.
Deve ser possível deletar um animal.
Deve ser possível alterar a localização de um animal.
Deve ser possível buscar um animal por id, localização ou nome.
Deve ser possível cadastrar plantel de animais já existentes em documento externo.

**REQUISITOS NÃO FUNCIONAIS**

Utilizar o multer para upload de arquivos.
Utilizar o Jest para realização de testes automatizados.

**REGRAS DE NEGÓCIO**

Não deve ser possível cadastrar um novo animal com um nome já existente.


# AUTOR

Luís Henrique Pereira

https://www.linkedin.com/in/luis-h-pereira-nodejs-react-native/

lh.p@hotmail.com
