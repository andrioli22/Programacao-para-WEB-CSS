<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercicio 11 JavaScript</title>
    <script>
        // Inicialize a variável para armazenar a soma
let soma = 0;

// Inicialize uma string para armazenar a sequência
let sequencia="";

// Use um loop for para somar os números de 1 a 100
for (let i = 1; i <= 100; i++) {
  soma += i;

  // Adicione o número atual à sequência
  sequencia += i;

   // Adicione um "+" se não for o último número
   if (i < 100) {
    sequencia += "+";
   }
}


// Exiba o resultado
document.write("Sequência: " + sequencia);
document.write("A soma dos 100 primeiros números inteiros é:", soma);
    </script>
</head>
<body>
    
</body>
</html>
