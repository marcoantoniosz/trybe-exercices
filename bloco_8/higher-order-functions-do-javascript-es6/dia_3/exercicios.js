const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
// 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA

function formatedBookNames(arr) {
    const formatedArr = arr.map((bookInfos) => `${bookInfos.name} - ${bookInfos.genre} - ${bookInfos.author.name}`)
    return formatedArr;
  }
  
// 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author , com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.

function nameAndAge(arr) {
   const formatedArr = arr.map((book) => ({age: book.releaseYear - book.author.birthYear, author: book.author.name })).sort((a, b) => a.age - b.age);
   return formatedArr;
  }

// 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.

function fantasyOrScienceFiction(arr) {
    const formatedArr = arr.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia');
    return formatedArr;
  }

// 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.

function oldBooksOrdered(arr) {
    const formatedArr = arr.filter((book) => book.releaseYear < 1961).sort((a, b) => a.releaseYear - b.releaseYear);
    return formatedArr;
  }

  // 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

  function fantasyOrScienceFictionAuthors(arr) {
    const formatedArr = arr.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia').map((book) => `${book.author.name}`).sort();
    return formatedArr;
  }

// 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

function oldBooks(arr) {
    const formatedArr = arr.filter((book) => book.releaseYear < 1961).map((book) => `${book.name}`);
    return formatedArr;
  }

// 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.

function authorWith3DotsOnName(arr) {
    const formatedArr = arr.filter((book) => book.author.name[1] === '.' && book.author.name[4] === '.' && book.author.name[7] === '.').map((book) => `${book.name}`);
    return formatedArr;
  }

  console.log(authorWith3DotsOnName(books));