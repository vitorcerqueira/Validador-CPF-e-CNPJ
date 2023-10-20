document.getElementById('validateBtn').addEventListener('click', function () {
    const input = document.getElementById('input');
    const result = document.getElementById('result');
    const value = input.value.replace(/[^\d]/g, ''); // Remove caracteres não numéricos

    if (value.length === 11) { // Cpf possui 11 digitos entao se for igual a 11 validar
        if (isValidCPF(value)) {
            result.textContent = 'CPF válido';
        } else {
            result.textContent = 'CPF inválido'; // se NAO for igual a 11 mostrar invalido
        }
    } else if (value.length === 14) { // Cpf possui 14 digitos entao se for igual a 14 validar
        if (isValidCNPJ(value)) {
            result.textContent = 'CNPJ válido';
        } else {
            result.textContent = 'CNPJ inválido'; // se NAO for igual a 14 mostrar invalido
        }
    } else {
        result.textContent = 'CPF ou CNPJ inválido';
    }
});

function isValidCPF(cpf) {
    return true;
}

function isValidCNPJ(cnpj) {
    return true;
}
