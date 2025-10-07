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

### ✅ Verificar Instalações

Para verificar se as ferramentas estão instaladas corretamente, execute os comandos abaixo no seu terminal:

```bash
# Verificar versão do Node.js
node --version

# Verificar versão do npm
npm --version

# Verificar versão do Git
git --version
```

### 📦 Passo a Passo da Instalação

#### 1. Clone o repositório
```bash
git clone https://github.com/Mariaeduardar07/Entrelinhas-API.git
```

#### 2. Acesse o diretório do projeto
```bash
cd Entrelinhas-API
```

#### 3. **Entre na pasta do projeto**

```bash
code .
```

#### 4. Instale as dependências
```bash
npm install
```

#### 5. Configure as variáveis de ambiente
Crie um arquivo `.env` na raiz do projeto baseado no `.env.example`:

```bash
# Copie o arquivo de exemplo
cp .env.example
```

Edite o arquivo `.env` com suas configurações:
```env
PORT=
DATABASE_URL="file:./entrelinhas.db"
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

### Criar um novo autor
```bash
POST /autores

{
  "nome": "Rubem Fonseca",
  "imageUrl": "https://imgsapp2.correiobraziliense.com.br/app/noticia_127983242361/2020/04/16/845087/20200416103631864256e.jpg",
  "biography": "Rubem Fonseca (1925-2020) foi um dos principais renovadores da ficção brasileira contemporânea. Nasceu em Juiz de Fora, formou-se em Direito e trabalhou como executivo antes de se dedicar à literatura. Pioneiro do realismo urbano brutal no Brasil, retratou a violência das grandes cidades com linguagem crua e direta. Obras principais: 'Feliz Ano Novo', 'A Grande Arte', 'O Caso Morel', 'Agosto'. Criou um novo estilo narrativo influenciado pelo cinema noir americano.",
  "historical_period": "Literatura Contemporânea (1960-2020)",
  "curiosities": "Evitava aparições públicas e entrevistas, mantendo vida muito reservada. Suas obras foram censuradas durante a ditadura militar por retratarem violência urbana. Era fascinado por investigação criminal e boxe, temas recorrentes em sua obra. Influenciou toda uma geração de escritores brasileiros. Seus livros venderam milhões de exemplares e foram adaptados para cinema e TV."
}
```

### Criar um novo livro
```bash
POST /livros

{
  "title": "O Cobrador",
  "imageUrl": "https://example.com/o-cobrador.jpg](https://m.media-amazon.com/images/I/41wpjBTIxrL._SY445_SX342_ML2_.jpg",
  "year_publication": 1979,
  "summary": "Coletânea que inclui o famoso conto 'O Cobrador', sobre personagem que 'cobra' da sociedade através de assassinatos aleatórios. A obra aprofunda a exploração da violência urbana, mostrando personagens marginalizados que reagem brutalmente à exclusão social. Fonseca consolida seu estilo direto e sua visão pessimista da sociedade brasileira contemporânea.",
  "historical_period": "Literatura Contemporânea",
  "curiosities": "O conto 'O Cobrador' tornou-se clássico da literatura brasileira contemporânea. Inspirou filme de Paulo César Saraceni. O personagem-título tornou-se símbolo da violência urbana brasileira. Consolidou a reputação internacional de Rubem Fonseca.",
  "characters": "essa obra não possui personagens",
  "authorId": 13
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

⭐ Desenvolvido com dedicação por Maria Eduarda Reis | SENAI 2025
