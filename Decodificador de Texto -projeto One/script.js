const input = document.querySelector("#texto");
const mensagem = document.querySelector("#mensagem");

function criptografar() {
    const texto = input.value;
    
    if (/[\u00C0-\u00FF]/.test(texto)) {
        alert("Por favor, remova os acentos e tente novamente.");
        return; 
    }
    const textoEncriptado = encriptar(texto);
    if (mensagem) {
        mensagem.innerHTML = `<p>${textoEncriptado}</p>`;
    } else {
        console.error("Elemento com ID 'mensagem' não encontrado.");
    }
    input.value = "";  
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
    
    return stringEncriptada;
}

function descriptografar() {
    const textoDesencriptado = desencriptar(input.value);
    if (mensagem) {
        mensagem.innerHTML = `<p>${textoDesencriptado}</p>`;
    } else {
        console.error("Elemento com ID 'mensagem' não encontrado.");
    }
    input.value = "";
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }

    return stringDesencriptada;
}

function Copiar() {
    const textoCopiado = document.querySelector("#mensagem p").textContent;
    navigator.clipboard.writeText(textoCopiado);
    alert("Texto copiado para área de transferência.");
}
