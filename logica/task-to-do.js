const fs = require('fs');


let listOfTask = [];
const saveDb = () => {
    //permite crear un arreglo en archivo con formato json
    let data = JSON.stringify(listOfTask);
    //guardamos la data dentro del archivo JSON

    fs.writeFile(`./db/data.json`, data, (err) => {
        if (err) {
            console.log(`error creando archivo ${err}`);
        } else {
            console.log(`Registro creado con exito`);
        }
    });
}

const listDb = () => {
    try {
        return listOfTask = require('../db/data.json')
            //esta linea se utiliza para evitar un error de cuando la base de datos esta vacia no se pueden crear nuevos archivos
    } catch (error) {
        return listOfTask = [];
    }
    // para leer el archivo json podemos hacer un require para el archivo json
    // al hacer la peticion el json se serializa a un objeto javascript

}

const create = (description) => {

    // para poder crear nuevos archivos tiene que llamarse primero la db antes del push
    listDb();
    let task = {
        description: description,
        completed: true
    };

    listOfTask.push(task);
    saveDb();
    return task;
}

let getDb = () => {
    listDb();
    return listOfTask;
}

// Actualizar estado de la tarea
const Actualizar = (description, completed = true) => {
    listDb();
    //find index hace un ciclo interno parecido a un foreach por una palabra clave que uno tome 
    //Si se cumple la busqueda retornara true (1) sino retornara un .1
    let index = listOfTask.findIndex(task => {
        console.log(`Valor del index: ${task.description}`);
        return task.description === description;
    });

    if (index => 0) {
        console.log(`valor de index despues del cliclo del indexx = ${index}`);
        console.log(`valor uno ${listOfTask[index].completed}`);
        console.log(`valor dos ${completed}`);
        listOfTask[index].completed === completed;
        console.log('valor de la comparacion', listOfTask[index].completed);
        saveDb();
        return true;
    } else {
        return false;
    }

}

const deletee = (description) => {
    listDb();
    let index = listOfTask.forEach(element => {
        console.log(`objeto en la base de datos ${element.description}`);
        console.log(`bojeto ingresado ${description}`);
        if (element.description === description) {
            console.log(`la descripcion coincide el elemento sera elminidado`);
            return true;
        } else {
            console.log(`la descripcion del elemento no coincide`);
            return false;
        }

    });


}




module.exports = {
    create,
    listDb,
    getDb,
    Actualizar,
    deletee
}