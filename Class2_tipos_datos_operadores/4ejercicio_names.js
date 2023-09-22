// process.stdout.write("Dime tu nombre: ")
// process.stdin.on('data', function(data){
//     nom = data.toString().trim();
//     process.stdout.write(`Hola ${nom}`);
//     process.exit()
// });

// con .trim() elimino espacios inecesarios

var preguntas = ['Nombre: ', 
    'Primer apellido: ',
    'Segundo apellido: '];

var respuestas = [];

function pregunta(i){
    process.stdout.write(preguntas[i]);
}

process.stdin.on('data', function(data){
    respuestas.push(data.toString().trim());

    if (respuestas.length < preguntas.length){
        pregunta(respuestas.length);
    }
    else{
        process.stdout.write(`Hola ${respuestas[0]} ${respuestas[1]}`)
        process.exit();
    }
})

pregunta(0)

