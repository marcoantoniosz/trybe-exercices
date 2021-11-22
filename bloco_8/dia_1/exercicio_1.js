const getNameEmail = (nomeCompleto) => {
    const nomeLower = nomeCompleto.toLowerCase();
    const nomeFormatado = nomeLower.replaceAll(' ', '_');
    const nomeEmail = {
        nome_completo: nomeCompleto,
        email: `${nomeFormatado}@betrybe.com.br`
    }
    return nomeEmail;
}

const newEmployees = (func) => {
    const employees = {
      id1: func('Pedro Guerrra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: func('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: func('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  console.log(newEmployees(getNameEmail));

