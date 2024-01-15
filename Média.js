<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 4 JavaScript</title>
    <script>
        //Leia a primeira nota
        const n1 = prompt("Digite a primeira nota do aluno");

         //Leia a segunda nota
         const n2 = prompt("Digite a segunda nota do aluno");

          //Leia a terceira nota
        const n3 = prompt("Digite a terceira nota do aluno");

        //Passe os valores para int
        NOTA1=parseInt(n1, 10);
        NOTA2=parseInt(n2, 10);
        NOTA3=parseInt(n3, 10);
        //Faça a média Aritmética
        let Media = (NOTA1+NOTA2+NOTA3)/3;

        //Mostre na tela a média
        alert("a média aritmética do aluno é " + Media);
    </script>
</head>
<body>
    
    
</body>
</html>
