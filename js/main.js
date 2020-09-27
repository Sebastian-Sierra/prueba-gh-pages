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

    const dia = d.getDate() + " de " + meses[d.getMonth()] + " de " + d.getFullYear();

    const hora = (d.getHours() < 10) ? "0" + d.getHours() : d.getHours();
    const minutos = (d.getMinutes() < 10) ? "0" + d.getMinutes() : d.getMinutes();
    const segundos = (d.getSeconds() < 10) ? "0" + d.getSeconds() : d.getSeconds();

    const hora_completa = `${hora}:${minutos}:${segundos}`;

    document.getElementById("dia-semana").innerHTML = dias_semana[d.getDay()];
    document.getElementById("dia").innerHTML = dia;
    document.getElementById("hora").innerHTML = hora_completa;

    const element = document.getElementById("principal");
    if (d.getMinutes() != 0 && d.getSeconds() % 2 === 0) {
        element.classList.add("en-punto");
    }else{
        element.classList.remove("en-punto");
    }
}

setInterval(mostrarHora);