<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercicio 5 JavaScript</title>
    <script>
        //Leia o primeiro número
const N1=prompt("Digite o primeiro número");

//Leia o segundo número
const N2=prompt("Digite o segundo número");

//Dar valor ao número
NUMERO1=parseInt(N1);
NUMERO2=parseInt(N2);

//Se o numero for igual, mostrar na tela que são iguais, caso contrário mostrar o maior
if (NUMERO1==NUMERO2){
alert("NUMEROS IGUAIS");
}
else {
    alert("O número maior é "+Math.max(NUMERO1, NUMERO2));
}
    </script>
</head>
<body>
    
</body>
</html>
