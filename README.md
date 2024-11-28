# Sistema de PetShop

Este projeto é um sistema simples de gerenciamento para um petshop, desenvolvido com Node.js e Sequelize, utilizando um banco de dados SQLite.

## 📋 Funcionalidades

O sistema permite o gerenciamento de **Gatos** e **Serviços** com as seguintes funcionalidades:

### Gatos
- **Cadastrar Gato**: Adicionar um novo gato ao sistema.
- **Listar Gatos**: Listar todos os gatos ou um gato específico por ID.
- **Atualizar Gato**: Atualizar os dados de um gato específico.
- **Excluir Gato**: Remover um gato do sistema.
- **Autenticação com JWT**: Proteção de rotas usando tokens JWT.

### Serviços
- **Cadastrar Serviço**: Adicionar um novo serviço ao sistema.
- **Listar Serviços**: Listar todos os serviços ou um serviço específico por ID.
- **Atualizar Serviço**: Atualizar os dados de um serviço específico.
- **Excluir Serviço**: Remover um serviço do sistema.

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no lado do servidor.
- **Express**: Framework para criar APIs.
- **Sequelize**: ORM para interação com o banco de dados.
- **SQLite**: Banco de dados local para persistência de dados.
- **JWT**: JSON Web Token para autenticação.

---

## 📂 Estrutura de Pastas

```plaintext
.
├── controller       # Controladores das funcionalidades
├── db               # Configuração do banco de dados
├── model            # Modelos das tabelas do banco
├── routes           # Rotas da API
├── petshop.sqlite   # Banco de dados SQLite
├── app.js           # Arquivo principal
└── README.md        # Documentação
```

---

## 🚀 Como Executar

### Pré-requisitos

- **Node.js** (versão mais recente)
- **npm** ou **yarn** para gerenciar pacotes.

### Passos

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/sistema-petshop.git
   ```

2. Acesse a pasta do projeto:
   ```bash
   cd sistema-petshop
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Crie o arquivo `.env` para configurar sua variável `SECRET` para autenticação JWT:
   ```env
   SECRET=SuaChaveSecreta
   ```

5. Execute o servidor:
   ```bash
   npm start
   ```

6. O servidor estará rodando em:  
   ```
   http://localhost:3306
   ```

---

## 🛤️ Rotas Disponíveis

### Rotas de Gatos
- **POST** `/add_gato`  
  Cadastrar um novo gato.  

- **GET** `/gatos/:id?`  
  Listar gatos (opcionalmente por ID, protegido por JWT).

- **PUT** `/gatos/:id`  
  Atualizar os dados de um gato.

- **DELETE** `/gatos/:id`  
  Excluir um gato.  

### Rotas de Serviços
- **POST** `/add_servico`  
  Cadastrar um novo serviço.  

- **GET** `/listar/:id?`  
  Listar serviços (opcionalmente por ID).

- **PUT** `/servicos/:id`  
  Atualizar os dados de um serviço.  

- **DELETE** `/servicos/:id`  
  Excluir um serviço.  

### Rotas de Login
- **POST** `/login`  
  Criar um token JWT para autenticação.

---

## ⚙️ Banco de Dados

- O banco utilizado é **SQLite**, que armazena os dados localmente no arquivo `petshop.sqlite`.
- As tabelas principais são:
  - `gatos`: Contém informações dos gatos.
  - `servicos`: Contém informações dos serviços.

---

## 🚩 Observações

- Certifique-se de que o arquivo `.env` esteja corretamente configurado com uma chave secreta (`SECRET`) para o JWT.
- Para proteger rotas com JWT, utilize o middleware `verificaJWT` presente no `gatoController`.

---

## 📜 Licença

Este projeto é livre para uso e modificação.

---

Feito por Keven Mendes.
