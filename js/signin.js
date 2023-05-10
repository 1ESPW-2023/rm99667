"use strict";

// // Criando um objeto
// const usuario1 = {
//     nomeUsuario: "admin",
//     senhaUsuario: "admin"
// };

// const usuario2 = {
//     nomeUsuario: "admin2",
//     senhaUsuario: "admin2"
// };

// // Criando uma lista de objetos
// let listaUsuarios = [];
// listaUsuarios.push(usuario1);
// listaUsuarios.push(usuario2);

// // Adicionando lista de objetos no localStorage
// localStorage.setItem("listaUser", JSON.stringify(listaUsuarios));


addEventListener("click", (evt)=>{
    if (evt.target.id == "btnSubmit") {
        let usuarioInput = document.getElementById("usuario").value;
        let senhaInput = document.getElementById("senha").value;

        try {

            let listaUser = JSON.parse(localStorage.getItem("listaUser"));

            listaUser.forEach((usuario)=>{
                if (usuarioInput == usuario.nomeUsuario  && senhaInput == usuario.senhaUsuario) {
                    throw "Login efetuado com sucesso!";
                }
            });
            throw "Usuário ou senha inválidos!";

        } catch (err) {
            if(err == "Login efetuado com sucesso!"){
                
                msgError.setAttribute("style","color:#00ff00;display:block;")
                msgError.innerHTML = "<strong>Usuário validado!</strong>"

            }else{
                msgError.setAttribute("style","color:#ff0000;display:block;");
                msgError.innerHTML = "<strong>Senha ou nome de Usuário inválidos!</strong>";
            }
        }


    }
});