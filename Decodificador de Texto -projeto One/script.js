function criptografar() {
   let Texto = document.getElementById('texto').value;
   let criptografar = Texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById('result-text').value = criptografar;
    document.getElementById('result-container').style.display = 'block';
}

function descriptografar() {
    let Texto = document.getElementById('texto').value;
           let descriptografar= Texto
                .replace(/enter/g, "e")
                .replace(/imes/g, "i")
                .replace(/ai/g, "a")
                .replace(/ober/g, "o")
                .replace(/ufat/g, "u");
            document.getElementById('mostrarResultado').value = descriptografar;
            document.getElementById('mostrarResultado').style.display = 'block';
}

function copiar(id) {
    let copiar = document.getElementById(id);
            copiar.select();
            document.execCommand('copy');
            alert('Texto copiado para a área de transferência!');
}