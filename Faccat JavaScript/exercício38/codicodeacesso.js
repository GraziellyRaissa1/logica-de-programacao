/*38) Faça um algoritmo para ler um número que é um código de usuário. Caso este código seja
diferente de um código armazenado internamente no algoritmo (igual a 1234) deve ser apresentada a
mensagem ‘Usuário inválido!’. Caso o Código seja correto, deve ser lido outro valor que é a senha. Se
esta senha estiver incorreta (a certa é 9999) deve ser mostrada a mensagem ‘senha incorreta’. Caso a
senha esteja correta, deve ser mostrada a mensagem ‘Acesso permitido’.*/

let codigo;
let senha;


codigo=parseInt(prompt("Digite o código de acesso:"));
if(codigo!=1234){
    alert("Código incorreto!")
}

else{
    senha=parseInt(prompt("Digite a sua senha:"));

    if(senha!=9987){
        alert("Senha incorreta!")
    }
    else{
        alert("Acesso Permitido!")
    }
}

