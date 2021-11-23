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

// 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

function authorBornIn1947(arr) {
    const bornIn1947 = arr.find((element) => element.author.birthYear === 1947);
    return bornIn1947.author.name;
  }

// 2 - Retorne o nome do livro de menor nome.

function smallerName(arr) {
    let nameBook = arr[0].name;
    arr.forEach((element) => {
        if(element.name.length < nameBook.length) {
            nameBook = element.name;
        }
    });

    return nameBook;
  }

// 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.

function getNamedBook(arr) {
    const car26Book = arr.find((element) => element.name.length === 26);
    return car26Book.name;
  }

// 4 - Ordene os livros por data de lançamento em ordem decrescente.

function booksOrderedByReleaseYearDesc(arr) {
    arr.sort((a, b) => b.releaseYear - a.releaseYear);
  }

// 5 - Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.

function everyoneWasBornOnSecXX(arr) {
    const theyWere = arr.every((element) => element.author.birthYear > 1901 && element.author.birthYear < 2000);
    return theyWere;
  }

// 6 - Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário.

function someBookWasReleaseOnThe80s(arr) {
    const Itwas = arr.some((element) => element.releaseYear > 1980 && element.releaseYear < 1989);
    return Itwas;
  }

// 7 - Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.

function authorUnique() {
    return books.every((book) =>
      !books.some((bookSome) =>
        (bookSome.author.birthYear === book.author.birthYear)
        && (bookSome.author.name !== book.author.name)));
  }