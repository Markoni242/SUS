function verificarSintoma() {
    var sintomaSelecionado = document.getElementById("sintomas").value;
    var erroMessage = document.getElementById("erro");

    if (sintomaSelecionado) {
        erroMessage.style.display = "block";
    } else {
        erroMessage.style.display = "none";
        alert("Por favor, selecione um sintoma.");
    }
}
