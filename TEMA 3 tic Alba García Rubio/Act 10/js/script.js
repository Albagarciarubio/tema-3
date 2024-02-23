function Calificar() {
    let alumnos = ["Julia", "Chloe", "Rosalin", "Alvaro"];
    let nota = [];
        nota[1]=parseInt(prompt("¿Cuál es la nota de " + alumnos[0] + "?"));

        nota[2]=parseInt(prompt("¿Cuál es la nota de " + alumnos[1] + "?"));

        nota[3]=parseInt(prompt("¿Cuál es la nota de " + alumnos[2] + "?"));

        nota[4]=parseInt(prompt("¿Cuál es la nota de " + alumnos[3] + "?"));
        
        document.getElementById("solucion").innerHTML = "Las notas son" + "<br>Julia: "  nota[1] + "<br>Chloe:" nota[2] + "<br>Rosalin:" + nota[3] + "<br>Alvaro" + nota[4];
}
