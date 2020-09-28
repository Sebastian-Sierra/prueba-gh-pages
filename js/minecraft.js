function obtenerCoordenadas(){

    let coords = JSON.parse(localStorage.getItem("coords"));

    let codigo = `<table class="table table-bordered table-light table-hover">
    <thead class="thead-dark">
      <th>Lugar</th>
      <th>Pos. X</th>
      <th>Pos. Y</th>
      <th>Pos. Z</th>
      <th>Acciones</th>
    </thead>
    <tbody>`;

    for (let i = 0; i < coords.length; i++) {
        codigo += `<tr>
        <td>${coords[i].lugar}</td>
        <td>${coords[i].posX}</td>
        <td>${coords[i].posY}</td>
        <td>${coords[i].posZ}</td>
        <td><button onclick="eliminarCoord(${i})" class="btn btn-danger">Eliminar</button></td>
        </tr>`;
    }

    codigo += `</tbody>
    </table>`;

    document.getElementById("coordenadas").innerHTML = codigo;
    console.log(coords);
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