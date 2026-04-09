function validacao() {

    let valido = true;

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let idade = document.getElementById("idade").value;
    let peso = document.getElementById("peso").value;
    let tipo = document.getElementById("tipo").value;
    let telefone = document.getElementById("telefone").value;
    let cidade = document.getElementById("cidade").value;
    let estado = document.getElementById("estado").value;

    if (nome.length === 0) {
        alert("Informe seu nome")
        valido = false;
    } else if (!nome.includes(' ')) {
        alert("Deve conter nome e sobrenome")
        valido = false;
    }

    if (email.length === 0) {
        alert("Informe seu email")
        valido = false;
    } else if (!email.includes("@") || !email.includes(".")) {
        alert("Email deve possuir formato válido")
        valido = false;
    }

    if (idade.length === 0) {
        alert("Informe sua idade")
        valido = false;
    } else if (idade < 16) {
        alert("Deve ter no mínimo 16 anos para doar sangue")
        valido = false;
    }

    if (peso.length === 0) {
        alert("Informe seu peso")
        valido = false;
    } else if (peso < 50) {
        alert("Deve ter no mínimo 50kg para doar sangue")
        valido = false;
    }

    if (telefone.length === 0) {
        alert("Informe seu telefone")
        valido = false;
    } else if (isNaN(telefone)) {
        alert("Seu telefone deve conter apenas números")
        valido = false;
    }

    if (cidade.length === 0) {
        alert("Informe sua cidade")
        valido = false;
    }

    if (estado.length === 0) {
        alert("Informe seu estado")
        valido = false;
    }

    if (valido) {
        alert("Cadastro \n" +
            "Nome: " + nome + "\n" +
            "Email: " + email + "\n" +
            "Idade: " + idade + "\n" +
            "Peso: " + peso + "\n" +
            "Tipo sanguíneo: " + tipo + "\n" +
            "Telefone: " + telefone + "\n" +
            "Cidade: " + cidade + "\n" +
            "Estado: " + estado 
        )
    }
}