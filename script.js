class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`;
    }

    trabalhar() {
        return `${this.nome} está trabalhando como ${this.cargo}.`;
    }
}
class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo);
        this.departamento = departamento;
    }

    gerenciar() {
        return `${this.nome} está gerenciando o departamento de ${this.departamento}.`;
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }

    programar() {
        return `${this.nome} está programando em ${this.linguagem}.`;
    }
}

function exibirErro(mensagem) {
    document.getElementById('erro').innerText = mensagem;
}

function criarFuncionario() {
    try {
        const nome = document.getElementById('nome').value;
        const idade = document.getElementById('idade').value;
        const cargo = document.getElementById('cargo').value;
        const departamento = document.getElementById('departamento').value;
        const linguagem = document.getElementById('linguagem').value;

        if (!nome || !idade || !cargo) {
            throw new Error("Por favor, preencha todos os campos obrigatórios.");
        }

        let funcionario;
        if (cargo === 'gerente') {
            if (!departamento) throw new Error("O departamento é obrigatório para Gerentes.");
            funcionario = new Gerente(nome, idade, cargo, departamento);
            mostrarResultado(funcionario.seApresentar(), funcionario.trabalhar(), funcionario.gerenciar());
        } else if (cargo === 'desenvolvedor') {
            if (!linguagem) throw new Error("A linguagem de programação é obrigatória para Desenvolvedores.");
            funcionario = new Desenvolvedor(nome, idade, cargo, linguagem);
            mostrarResultado(funcionario.seApresentar(), funcionario.trabalhar(), funcionario.programar());
        }

        document.getElementById('erro').innerText = "";
    } catch (erro) {
        exibirErro(erro.message);
    }
}

function mostrarResultado(...mensagens) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = mensagens.map(msg => `<p>${msg}</p>`).join('');
}
