document.getElementById("validateBtn").addEventListener("click", function () {
  const input = document.getElementById("input");
  const result = document.getElementById("result");
  const value = input.value.replace(/[^\d]/g, ""); // Remove caracteres não numéricos

  if (value.length === 11) {
    // Cpf possui 11 digitos entao se for igual a 11 validar
    if (isValidCPF(value)) {
      result.textContent = "CPF válido";
    } else {
      result.textContent = "CPF inválido"; // se NAO for igual a 11 mostrar invalido
    }
  } else if (value.length === 14) {
    // Cpf possui 14 digitos entao se for igual a 14 validar
    if (isValidCNPJ(value)) {
      result.textContent = "CNPJ válido";
    } else {
      result.textContent = "CNPJ inválido"; // se NAO for igual a 14 mostrar invalido
    }
  } else {
    result.textContent = "CPF ou CNPJ inválido";
  }
});

function isValidCPF(cpf) {
  if (
    cpf === "00000000000" ||
    cpf === "11111111111" ||
    cpf === "22222222222" ||
    cpf === "33333333333" ||
    cpf === "44444444444" ||
    cpf === "55555555555" ||
    cpf === "66666666666" ||
    cpf === "77777777777" ||
    cpf === "88888888888" ||
    cpf === "99999999999" ||
    cpf.length !== 11
  ) {
    console.log("cpf inválido");
    return false;
  }

  // Calcula o primeiro dígito verificador
  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let primeiroDigito = (soma * 10) % 11;

  if (primeiroDigito === 10 || primeiroDigito === 11) {
    primeiroDigito = 0;
  }

  // Verifica se o primeiro dígito verificador é igual ao décimo dígito do CPF
  if (primeiroDigito !== parseInt(cpf.charAt(9))) {
    return false;
  }

  // Calcula o segundo dígito verificador
  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * (11 - i);
  }
  let segundoDigito = (soma * 10) % 11;

  if (segundoDigito === 10 || segundoDigito === 11) {
    segundoDigito = 0;
  }

  // Verifica se o segundo dígito verificador é igual ao décimo primeiro dígito do CPF
  if (segundoDigito !== parseInt(cpf.charAt(10))) {
    return false;
  }

  // Se todas as verificações passaram, o CPF é válido
  return true;
}

function isValidCNPJ(CNPJ) {
  // considera-se erro CNPJ's formados por uma sequência de números iguais
  if (
    CNPJ === "00000000000000" ||
    CNPJ === "11111111111111" ||
    CNPJ === "22222222222222" ||
    CNPJ === "33333333333333" ||
    CNPJ === "44444444444444" ||
    CNPJ === "55555555555555" ||
    CNPJ === "66666666666666" ||
    CNPJ === "77777777777777" ||
    CNPJ === "88888888888888" ||
    CNPJ === "99999999999999" ||
    CNPJ.length !== 14
  ) {
    console.log("CNPJ inválido");
    return false;
  }

  let dig13, dig14;
  let sm = 0;
  let peso = 2;

  for (let i = 11; i >= 0; i--) {
    const num = parseInt(CNPJ.charAt(i));
    sm += num * peso;
    peso++;
    if (peso === 10) {
      peso = 2;
    }
  }

  const r = sm % 11;
  if (r === 0 || r === 1) {
    dig13 = "0";
  } else {
    dig13 = (11 - r).toString();
  }

  sm = 0;
  peso = 2;

  for (let i = 12; i >= 0; i--) {
    const num = parseInt(CNPJ.charAt(i));
    sm += num * peso;
    peso++;
    if (peso === 10) {
      peso = 2;
    }
  }

  const r2 = sm % 11;
  if (r2 === 0 || r2 === 1) {
    dig14 = "0";
  } else {
    dig14 = (11 - r2).toString();
  }

  // Verifica se os dígitos calculados conferem com os dígitos informados.
  if (dig13 === CNPJ.charAt(12) && dig14 === CNPJ.charAt(13)) {
    console.log("CNPJ válido");
    return true;
  } else {
    console.log("CNPJ inválido");
    return false;
  }
}
