# 📚 Entrelinhas API

> API para gerenciamento de livros e autores - Projeto final de desenvolvimento web

## 📋 Sobre o Projeto

A **Entrelinhas API** é uma aplicação back-end desenvolvida em Node.js com Express e Prisma ORM, que permite o gerenciamento completo de livros e autores. Este projeto faz parte do curso do SENAI e integra tecnologias modernas para criar uma API REST robusta e eficiente.

### 🛠️ Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web para Node.js
- **Prisma ORM** - ORM moderno para JavaScript/TypeScript
- **SQLite** - Banco de dados relacional
- **Nodemon** - Ferramenta para desenvolvimento
- **CORS** - Middleware para controle de acesso
- **dotenv** - Gerenciamento de variáveis de ambiente

## 🚀 Como Executar o Projeto

### Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [Git](https://git-scm.com/)
- [npm](https://www.npmjs.com/) (geralmente vem com o Node.js)

### 📦 Passo a Passo da Instalação

#### 1. Clone o repositório
```bash
git clone https://github.com/Mariaeduardar07/Entrelinhas-API.git
```

#### 2. Acesse o diretório do projeto
```bash
cd Entrelinhas-API
```

#### 3. Instale as dependências
```bash
npm install
```

#### 4. Configure as variáveis de ambiente
Crie um arquivo `.env` na raiz do projeto baseado no `.env.example`:

```bash
# Copie o arquivo de exemplo
cp .env.example .env
```

Edite o arquivo `.env` com suas configurações:
```env
PORT=5000
DATABASE_URL="file:./entrelinhas.db"
JWT_SECRET=seu_jwt_secret_aqui
```

#### 5. Execute as migrações do banco de dados
```bash
npx prisma migrate dev
```

#### 6. Inicie o servidor de desenvolvimento
```bash
npm run dev
```

🎉 **Pronto!** A API estará rodando em `http://localhost:5000`

## 📊 Estrutura do Banco de Dados

### Modelo Author (Autores)
- `id` - Identificador único
- `nome` - Nome do autor
- `imageUrl` - URL da imagem do autor
- `biography` - Biografia do autor
- `historical_period` - Período histórico
- `curiosities` - Curiosidades sobre o autor

### Modelo Book (Livros)
- `id` - Identificador único
- `title` - Título do livro
- `imageUrl` - URL da imagem da capa
- `year_publication` - Ano de publicação
- `summary` - Resumo do livro
- `historical_period` - Período histórico
- `curiosities` - Curiosidades sobre o livro
- `characters` - Personagens do livro
- `authorId` - ID do autor (chave estrangeira)

## 🛣️ Rotas da API

### 📖 Livros

| Método | Rota | Descrição |
|--------|------|-----------|
| `GET` | `/book` | Lista todos os livros |
| `GET` | `/book/:id` | Busca um livro por ID |
| `POST` | `/book` | Cria um novo livro |
| `PUT` | `/book/:id` | Atualiza um livro |
| `DELETE` | `/book/:id` | Remove um livro |

### 👤 Autores

| Método | Rota | Descrição |
|--------|------|-----------|
| `GET` | `/author` | Lista todos os autores |
| `GET` | `/author/:id` | Busca um autor por ID |
| `POST` | `/author` | Cria um novo autor |
| `PUT` | `/author/:id` | Atualiza um autor |
| `DELETE` | `/author/:id` | Remove um autor |

## 📝 Exemplos de Uso

### Criar um novo livro
```bash
POST /livros
Content-Type: application/json

{
  "title": "Dom Casmurro",
  "imageUrl": "https://exemplo.com/dom-casmurro.jpg",
  "year_publication": 1899,
  "summary": "Romance de Machado de Assis sobre ciúme e desconfiança",
  "historical_period": "Século XIX",
  "curiosities": "Considerado uma das maiores obras da literatura brasileira",
  "characters": "Bentinho, Capitu, Escobar",
  "authorId": 1
}
```

### Criar um novo autor
```bash
POST /autores
Content-Type: application/json

{
  "nome": "Machado de Assis",
  "imageUrl": "https://exemplo.com/machado.jpg",
  "biography": "Joaquim Maria Machado de Assis foi um escritor brasileiro...",
  "historical_period": "Século XIX",
  "curiosities": "Fundador da Academia Brasileira de Letras"
}
```

## 📁 Estrutura do Projeto

```
Entrelinhas-API/
├── prisma/
│   ├── migrations/          # Migrações do banco
│   ├── schema.prisma       # Schema do banco de dados
│   ├── prisma.js          # Configuração do Prisma Client
│   └── entrelinhas.db     # Banco de dados SQLite
├── src/
│   ├── controllers/       # Controladores da aplicação
│   │   ├── authorController.js
│   │   └── bookController.js
│   ├── models/           # Modelos de dados
│   │   ├── authorModel.js
│   │   └── bookModel.js
│   ├── routes/           # Definição das rotas
│   │   ├── authorRoutes.js
│   │   ├── bookRoutes.js
│   │   └── index.routes.js
│   └── server.js         # Arquivo principal do servidor
├── .env.example          # Exemplo de variáveis de ambiente
├── package.json          # Dependências e scripts
└── README.md            # Este arquivo
```

## 👩‍💻 Autora

**Maria Eduarda Reis**
- GitHub: [@Mariaeduardar07](https://github.com/Mariaeduardar07)

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!