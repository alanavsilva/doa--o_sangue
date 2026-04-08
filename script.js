function validacao() {

    let nome = document.getElementById("nome").Value;
    let email = document.getElementById("email").Value;
    let idade = document.getElementById("idade").Value;
    let peso = document.getElementById("peso").Value;
    let tipo = document.getElementById("tipo").Value;
    let telefone = document.getElementById("telefone").Value;
    let cidade = document.getElementById("cidade").Value;
    let estado = document.getElementById("estado").Value;

    if (idade < 16) {
        alert("Deve ter no mínimo 16 anos para doar sangue")
    }

    if (peso < 50) {
        alert("Deve ter no mínimo 50kg para doar sangue")
    }

}