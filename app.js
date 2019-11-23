const argv = require('./config/yargs').argv;
const task = require('./logica/task-to-do');
console.log(argv);

let comando = argv._[0];

switch (comando) {

    case 'create':
        console.log('metodo create');
        let newTask = task.create(argv.description);
        break;

    case 'update':
        let actualizado = task.Actualizar(argv.description, argv.completed)
        console.log(actualizado);
        break;

    case 'list':
        console.log('metodo list');
        let list = task.getDb();


        for (let tasks of list) {

            if (tasks.completed === true) {
                var tarea = 'tarea completada'
            } else {
                var tarea = 'tarea incompleta'
            }

            console.log(`================`);
            console.log(`LISTA DE TAREAS`);
            console.log(`Descripcion ${tasks.description}`);
            console.log(`Estado de la tarea`, tarea);
            console.log(`================`);
        }
        break;

    case 'delete':
        console.log(`objeto a enviar ${argv.description}`);
        let deletee = task.deletee(argv.description);
        console.log(`la tarea con la descripcion ${deletee} ha sido eliminada`);
        break;

    default:
        console.log('Comando no encontrado utiliza la opcion node app --help para tener mas informacion');
        break;
}