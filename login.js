function verificar() {
    var nome1 = document.getElementById('name').value;
    var nome2 = document.getElementById('subname').value;

    if (nome1 == "" || nome2 == "") {
        alert("Preenche todos os Campos");
        return false;
    }
    else {
        alert("Bem-Vindo " + nome1 + " " + nome2 + " ao nosso site!");
        return true;
    }
}
