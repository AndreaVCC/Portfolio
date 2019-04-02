/*
document.getElementById("idBtnEnviar").addEventListener("click",function(){
    const strNombre = document.getElementById("nombre").value;
    const strEmail = document.getElementById("email").value;
    const strTexto = document.getElementById("texto").value;

    if(strNombre != "" && strEmail != "" && strTexto != ""){
        const datos ={
            n: strNombre,
            e: strEmail,
            t: strTexto
        }


        
    }else{
        alert("Rellena los campos");
    }
});
*/

var iconElement = document.getElementById('icon');
var options = {
    from: 'fa-bars',
    to: 'fa-arrow-right',
    animation: 'rubberBand'
};

iconate(iconElement, options);