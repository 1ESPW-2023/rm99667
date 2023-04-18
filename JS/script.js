// const divElement = document.getElementById("div-box")

// divElement.addEventListener("click",Soma );

// function MostraElemento(){
//     console.log(divElement)
// }

// function Soma (){
//     var n1 = 10
//     var n2 = 20

//     console.log(n1 + n2)

// }

// // Recuperar um elemento com querySelector
// const LiElements = document.querySelector("li); 

// Convertendo Em um Array e simplificando 
// const LiElements = document.querySelectorAll("li"); 
// const ArrayElements = [...LiElements];

const ArrayElements = [...document.querySelectorAll("li")];

ArrayElements.map((El, key)=>{
    if (El.textContent == 'Item-25')(
        El.textContent = "O item 25 é esse"
    )


});