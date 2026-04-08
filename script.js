function validacao() {

    let nome = document.getElementById("nome").Value;
    let email = document.getElementById("email").Value;
    let idade = document.getElementById("idade").Value;
    let peso = document.getElementById("peso").Value;
    let tipo = document.getElementById("tipo").Value;
    let telefone = document.getElementById("telefone").Value;
    let cidade = document.getElementById("cidade").Value;
    let estado = document.getElementById("estado").Value;

    if (nome.length === 0) {
        alert("Informe seu nome")
    }

    if (email.length === 0) {
        alert("Informe seu email")
    }

    if (idade.length === 0) {
        alert("Informe sua idade")
    } else if (idade < 16) {
        alert("Deve ter no mínimo 16 anos para doar sangue")
    }
    
    if (peso.length === 0) {
        alert("Informe seu peso")
    } else if (peso < 50) {
        alert("Deve ter no mínimo 50kg para doar sangue")
    }

    if (telefone.length === 0) {
        alert("Informe seu telefone")
    }

    if (cidade.length === 0) {
        alert("Informe sua cidade")
    }

    if (estado.length === 0) {
        alert("Informe seu estado")
    }
}