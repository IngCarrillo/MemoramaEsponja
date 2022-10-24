let elemento1; // Variable para guardar la primer carta volteada
let elemento2; // Variable para guardar la segunda carta volteada
let i = 0; // Variable para contar las cartas rotadas (máximo 2)
let puntos = 0; // Variable para contar los pares encontrados

/*
    Función "rotar":
        - Rota las cartas
        - Guarda los elementos en variables
        - Modifica el "onclick" si es necesario
*/
function rotar(item){
    if(i == 0){
        elemento1 = item;
        elemento1.style.transform = "rotateY(180deg)";
        elemento1.setAttribute("onclick", "");
        i = 1;
        console.log(i);
    } else if(i == 1){
        elemento2 = item;
        elemento2.style.transform = "rotateY(180deg)";
        i = 2;
        console.log(i);
        checar();
        console.log(i);
    }
}

/* 
    Función "checar":
        - Revisa si los elementos son iguales
        - Desactiva los "onclick" para que no se puedan volver a rotar
        - Revisa si se completó el memorama
*/
function checar(){
    if (elemento1.getAttribute("foto") == elemento2.getAttribute("foto")) {
        puntos+=1;
        elemento1.setAttribute("onclick", "");
        elemento2.setAttribute("onclick", "");
        console.log("Son iguales");
        document.getElementById("puntos").innerHTML = `Puntos: ${puntos}`;
        setTimeout(() => {
            i = 0;
        }, 1000);
    } else {
        console.log("Son diferentes");
        setTimeout(()=>{
            elemento1.style.transform = "rotateY(360deg)";
            elemento1.setAttribute("onclick", "rotar(this)");
            elemento2.style.transform = "rotateY(360deg)";
            i = 0;
        },1000);
    }

    if (puntos == 8) {
        $('#yaGano').modal('show');
        $('#reiniciar').click(function () {
            window.location.reload();
        });
    }   
}


