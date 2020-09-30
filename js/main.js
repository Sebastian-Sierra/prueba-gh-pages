const dias_semana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Vierne",
    "Sabado"
];

const meses = [
    "Enero", "Febrero", "Marzo",
    "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre",
    "Octubre", "Noviembre", "Diciembre"
];

function mostrarHora() {
    const d = new Date();

    const dia = `${d.getDate()} ${meses[d.getMonth()]} ${d.getFullYear()}`;
    
    var hora = (d.getHours() > 12) ? (d.getHours() - 12) : d.getHours();
    hora = (hora < 10) ? "0" + hora : hora;
    const minutos = (d.getMinutes() < 10) ? "0" + d.getMinutes() : d.getMinutes();
    const segundos = (d.getSeconds() < 10) ? "0" + d.getSeconds() : d.getSeconds();

    const hora_completa = `${hora}:${minutos}:${segundos}`;

    document.getElementById("dia-semana").innerHTML = dias_semana[d.getDay()];
    document.getElementById("dia").innerHTML = dia;
    document.getElementById("hora").innerHTML = hora_completa;

    let element = document.getElementById("principal");
    if (d.getMinutes() === 0 && d.getSeconds() % 2 === 0) {
        element.classList.add("en-punto");
    }else{
        element.classList.remove("en-punto");
    }
}

setInterval(mostrarHora, 100);

document.getElementById("btn-deshabilitar").addEventListener("click", (e)=>{
    if(document.getElementById("principal").style.display == ""){
        document.getElementById("principal").style = "display: none";
        e.target.innerHTML = "▼";
    }else{
        document.getElementById("principal").style = "";
        e.target.innerHTML = "▲";
    }
});
