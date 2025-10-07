import prisma from "../../prisma/prisma.js";

class BookModel {
  // Obter todos os livros
  async findAll() {
    const livros = await prisma.book.findMany({
      include: {
        author: true,
      },
    });

    // console.log(livros);
    return livros;
  }

  // Obter um livro pelo ID
  async findById(id) {
    const livro = await prisma.book.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        author: true,
      },
    });

    return livro;
  }

  // Criar um novo livro
  async create(
    title,
    imageUrl,
    summary,
    year_publication,
    historical_period,
    curiosities,
    characters,
    authorId
  ) {
    const novoLivro = await prisma.book.create({
      data: {
        title,
        imageUrl,
        summary,
        historical_period,
        curiosities,
        characters,
        year_publication,
        authorId: Number(authorId),
      },
    });

    return novoLivro;
  }

  // Atualizar um livro
  async update(
    id,
    title,
    imageUrl,
    summary,
    historical_period,
    curiosities,
    characters,
    year_publication,
    authorId
  ) {
    const livro = await this.findById(id);

    if (!livro) {
      return null;
    }

    // Preparar os dados para atualização, removendo valores undefined
    const updateData = {};
    
    if (title !== undefined) updateData.title = title;
    if (imageUrl !== undefined) updateData.imageUrl = imageUrl;
    if (summary !== undefined) updateData.summary = summary;
    if (historical_period !== undefined) updateData.historical_period = historical_period;
    if (curiosities !== undefined) updateData.curiosities = curiosities;
    if (characters !== undefined) updateData.characters = characters;
    if (year_publication !== undefined) updateData.year_publication = Number(year_publication);
    if (authorId !== undefined && !isNaN(authorId)) updateData.authorId = Number(authorId);

    // Atualize o livro existente com os novos dados
    const livroAtualizado = await prisma.book.update({
      where: {
        id: Number(id),
      },
      data: updateData,
    });

    return livroAtualizado;
  }

  // Remover um livro
  async delete(id) {
    const livro = await this.findById(id);

    if (!livro) {
      return null;
    }

    await prisma.book.delete({
      where: {
        id: Number(id),
      },
    });

    return true;
  }
}

export default new BookModel();