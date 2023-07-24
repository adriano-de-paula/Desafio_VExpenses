const colaboradores = [
    { nome: "Renan Azevedo", dataNascimento: "1995-08-01" },
    { nome: "Yasmin Dias", dataNascimento: "1991-10-31" },
    { nome: "Guilherme Souza", dataNascimento: "1996-08-08" },
    { nome: "Vitoria Melo", dataNascimento: "1989-03-27" },
    { nome: "Miguel Gomes", dataNascimento: "1975-08-29" },
    { nome: "Bruna Gonçalves", dataNascimento: "1980-07-24" },
    { nome: "Alex Carvalho", dataNascimento: "1993-05-27" },
    { nome: "Rebeca Ferreira", dataNascimento: "1982-07-18" },
    { nome: "Marcos Pereira", dataNascimento: "1989-06-20" },
    { nome: "Amanda Castro", dataNascimento: "2001-04-21" },
];

function calcularValorPlano(idade) {

    if (idade >= 0 && idade <= 18) {
        return 249.34;
    } else if (idade >= 19 && idade <= 23) {
        return 294.22;
    } else if (idade >= 24 && idade <= 28) {
        return 356.00;
    } else if (idade >= 29 && idade <= 33) {
        return 427.21;
    } else if (idade >= 34 && idade <= 38) {
        return 487.02;
    } else if (idade >= 39 && idade <= 43) {
        return 501.63;
    } else if (idade >= 44 && idade <= 48) {
        return 610.76;
    }
}

function gerarRelatorio() {
    const relatorioElement = document.getElementById('relatorio');
    relatorioElement.innerHTML = "";

    const hoje = new Date();

    colaboradores.forEach(colaborador => {
        const dataNascimento = new Date(colaborador.dataNascimento);
        const idade = hoje.getFullYear() - dataNascimento.getFullYear();
        const mesAniversario = dataNascimento.getMonth();
        const diaAniversario = dataNascimento.getDate();
        const valorTotalPlano = calcularValorPlano(idade);

        const descontoEmpresa = valorTotalPlano * 0.9;
        const descontoColaborador = valorTotalPlano * 0.1;

        relatorioElement.innerHTML += `
        <div class="relatorio-colaborador">
          <p><strong>Colaborador:</strong> ${colaborador.nome}</p>
          <p><strong>Idade:</strong> ${idade} anos</p>
          <p><strong>Data de Aniversário:</strong> ${diaAniversario}/${mesAniversario + 1}</p>
          <p><strong>Valor Total do Plano:</strong> R$ ${valorTotalPlano.toFixed(2)}</p>
          <p><strong>Desconto da Empresa:</strong> R$ ${descontoEmpresa.toFixed(2)}</p>
          <p><strong>Desconto do Colaborador:</strong> R$ ${descontoColaborador.toFixed(2)}</p>
        </div>
      `;
    });
}

function adicionarColaborador() {
    const nome = document.getElementById("nome").value;
    const dataNascimento = document.getElementById("dataNascimento").value;
  
    if (nome.trim() !== "" && dataNascimento.trim() !== "") {
      colaboradores.push({ nome, dataNascimento });
      document.getElementById("nome").value = "";
      document.getElementById("dataNascimento").value = "";
      alert("Colaborador adicionado com sucesso!");
    } else {
      alert("Por favor, preencha todos os campos do formulário.");
    }
}

let relatorioAberto = false;

function alternarRelatorio() {
  const relatorioElement = document.getElementById('relatorio');
  const botaoRelatorio = document.querySelector('.botao-relatorio');

  if (!relatorioAberto) {
    gerarRelatorio(); 
    botaoRelatorio.textContent = "Fechar Relatório";
  } else {
    relatorioElement.innerHTML = ""; 
    botaoRelatorio.textContent = "Abrir Relatório";
  }

  relatorioAberto = !relatorioAberto;
}
