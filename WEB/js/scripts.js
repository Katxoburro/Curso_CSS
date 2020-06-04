function comprobar(obj) {
    if (obj.checked)
        document.getElementById('enviar').disabled = false;

    else
        document.getElementById('enviar').disabled = true;
}