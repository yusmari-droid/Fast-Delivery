window.addEventListener("load", iniciarSeleccion); 

function iniciarSelección () {
    let seleccionar = document.getElementById("seleccionarOpciones");
    seleccionar.addEventListener("clip",  seleccionarOpciones);
}

function seleccionarOpciones () {
    let desayuno = document.getElementById("catg-desayuno");
    let desayuno_Almuerzo_Cena = document.getElementById("catg-desayuno_almuerzo_cena");
    let almuerzo = document.getElementById("catg-almuerzo");
    let almuerzo_Cena = document.getElementById ("catg-almuerzo_cena");
    let cena = document.getElementById ("catg-cena");

    //Muestra la categoría seleccionada, Aquí es donde quiero ocultar las opciones no seleccionadas
}
