const Tarea = require( './tarea' );

class Tareas {
    _listado = {};

    get listadoArr() {
        const listado = [];

        Object.keys(this._listado).forEach( key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        })

        return listado;
    }

    constructor() {
        this._listado = {};
    }

    crearTarea(desc = '') {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    cargarTareasFromArray(tareas = []) {
        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea;
        });
    }

    listadoCompleto() {
        this.listadoArr.forEach( (tarea, i) => {
            const index = `${i + 1}`.green;
            const { desc, completadoEn } = tarea;
            const estado = completadoEn != null ? 'Completado'.green : 'Pendiente'.red;
            console.log(`${index}. ${desc} :: ${estado}`);
        })
    }

    listarPendientesCompletadas(completadas = true) {
        this.listadoArr.forEach( (tarea) => {
            let contador = 0;
            const { desc, completadoEn } = tarea;
            const estado = completadoEn != null ? 'Completado'.green : 'Pendiente'.red;

            if(completadas) {
                if (completadoEn) {
                    contador++;
                    console.log(`${contador}. ${desc} :: ${estado}`);
                }
            } else {
                if (!completadoEn) {
                    contador++;
                    console.log(`${contador}. ${desc} :: ${estado}`);
                }
            }

        })
    }
}

module.exports = Tareas;