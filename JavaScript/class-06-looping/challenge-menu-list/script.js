// Faça um Menu com as seguintes opções:
/*
    Digite a opção desejada:
    1 - Cadastrar item
        - Poder cadastrar itens enquanto não cancelar
        - Alertar usuário para adicionar item caso não informe
        - Mostrar mensagem de sucesso junto do nome ao cadastrar
        - Fazer alerta de item cadastrado caso ele já esteja cadastrado
    2 - Ver itens cadastrados
        - Mostrar itens cadastrados
        - Alertar caso a lista esteja vazia
    3 - Remover item cadastrado
        - Alertar caso a lista esteja vazia
        - Poder remover itens pelo nome enquanto não cancelar
        - Remover item automaticamente caso só tenha um na lista
        - Mostrar mensagem de sucesso junto do nome ao remover
        - Alertar usuário caso o item informado não seja encontrado
    4 - Sair do programa
        - Sair do programa quando escolher a opção 4 ou cancelar
        - Se não escolher uma das opções do menu mostrar mensagem de alerta
*/

const listItens = [];
let menuOption;

while (true) {
  menuOption = prompt(`
    Digite a opção desejada:
    1 - Cadastrar item
    2 - Ver itens cadastrados
    3 - Remover item cadastrado
    4 - Sair do programa
    `);

  if (menuOption === "4" || menuOption === null) {
    break;
  }

  if (menuOption === "") {
    alert("Escolha uma opção!");
    continue;
  }

  switch (menuOption) {
    case "1":
      while (true) {
        let item = prompt("Digite o nome item: ");

        if (item === null) {
          break;
        }

        if (item === "") {
          alert("Insira um item para cadastrar!");
          continue;
        }

        if (listItens.includes(item)) {
          alert(`"${item}" já cadastrado`);
        } else {
          listItens.push(item);
          alert(`"${item}" Castrado com sucesso!`);
        }
      }

      break;
    case "2":
      if (listItens.length == 0) alert("Lista Vazia!");
      else alert(listItens);
      break;

    default:
      break;
  }
}
alert("Progama Encerrado!");

console.log(listItens);
