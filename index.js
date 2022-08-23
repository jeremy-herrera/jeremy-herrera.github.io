let horas = 7;
let minutos = 0;
let segundos = 0;
cargarSegundos();

function cargarSegundos(){
    let txtSegundos;

    if(segundos < 0){
        segundos = 59;
    }

    if(segundos < 10){
        txtSegundos = 0&(segundos);
    }else{
        txtSegundos = segundos;
    }
    document.getElementById('segundos').innerHTML = txtSegundos;
    segundos --;

    cargarMinutos(segundos);
}

function cargarMinutos(segundos){
    let txtMinutos;

    if(segundos == -1 && minutos != 0){
        setTimeout(() => {
            minutos--;
        },500)
    }else if(segundos == -1 && minutos == 0){
        setTimeout(() => {
            minutos = 59;
        },500)
    }

    if(minutos < 10){
        txtMinutos = 0&(minutos);
    }else{
        txtMinutos = minutos;
    }
    document.getElementById('minutos').innerHTML = txtMinutos;
    cargarHoras(segundos,minutos);
}

function cargarHoras(segundos,minutos){
    let txtHoras;

    if(segundos == -1 && minutos == 0 && horas != 0){
        setTimeout(() => {
            horas--;
        },500)
    }else if(segundos == -1 && minutos == 0 && horas == 0){
        setTimeout(() => {
            horas = 59;
        },500)
    }

    if(horas < 10){
        txtHoras = 0&(horas);
    }else{
        txtHoras = horas;
    }
    document.getElementById('horas').innerHTML = txtHoras;
}

setInterval(cargarSegundos, 1000);
