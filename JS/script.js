const divElement = document.getElementById("div-box")

divElement.addEventListener("click",Soma );

function MostraElemento(){
    console.log(divElement)
}

function Soma (){
    var n1 = 10
    var n2 = 20

    console.log(n1 + n2)

}