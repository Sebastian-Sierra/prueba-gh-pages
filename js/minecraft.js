function obtenerCoordenadas(){

    let coords = JSON.parse(localStorage.getItem("coords"));

    var table = document.getElementById("table-minecraft");
    var tr_form = document.getElementById("tr-form");
    
    document.getElementById("coordenadas").remove();
    
    var tbody = document.createElement("TBODY");
    tbody.appendChild(tr_form);
    tbody.id = "coordenadas";

    if(coords){
        for (let i = 0; i < coords.length; i++) {
            var tr = document.createElement("TR");
            var codigo = `
            <td>${coords[i].lugar}</td>
            <td>${coords[i].posX}</td>
            <td>${coords[i].posY}</td>
            <td>${coords[i].posZ}</td>
            <td><button onclick="eliminarCoord(${i})" class="btn btn-danger">X</button></td>`;
            tr.innerHTML = codigo;
            tbody.appendChild(tr);
        }
    }
    table.appendChild(tbody);
}

document.getElementById("form-coords").addEventListener("submit", agregarCoordenadas)

function agregarCoordenadas(e){

    let lugar = document.getElementById("lugar").value;
    let posX = document.getElementById("posX").value;
    let posY = document.getElementById("posY").value;
    let posZ = document.getElementById("posZ").value;

    let coord = {
        lugar,
        posX,
        posY,
        posZ
    }

    if(localStorage.getItem("coords") === null){
        let coords = [];
        coords.push(coord);
        localStorage.setItem("coords",JSON.stringify(coords));
    }else{
        let coords = JSON.parse(localStorage.getItem("coords"));
        coords.push(coord);
        localStorage.setItem("coords",JSON.stringify(coords));
    }
    
    document.getElementById("form-coords").reset();
    obtenerCoordenadas();
    e.preventDefault();
}

function eliminarCoord(i) {
    let coords = JSON.parse(localStorage.getItem("coords"));
    coords.splice(i, 1);
    localStorage.setItem("coords",JSON.stringify(coords));
    obtenerCoordenadas();
}

obtenerCoordenadas();