const empleados = [
    {
        id: 1,
        nombre: 'Cristhian'
    },
    {
        id: 2,
        nombre: 'Icíar'
    },
    {
        id: 3,
        nombre: 'Leo'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];

const getEmpleado = (id, mostrarErrorEmpleado) => {
    const empleado = empleados.find( (e) => e.id === id)?.nombre;
    if (empleado) {
        mostrarErrorEmpleado(null, empleado);
    } else {
        mostrarErrorEmpleado(`Empleado con id ${id} no existe.`);
    }
}

const getSalario = (id, mostrarErrorSalario) => {

    const salario = salarios.find((s) => s.id === id)?.salario;
    if (salario) {
        mostrarErrorSalario(null, salario);
    } else {
        mostrarErrorSalario(`Salario con id ${id} no existe.`);
    }

};


getEmpleado(1, (err, empleado) => {

    if (err) {
        console.log('ERROR!');
        return console.log(err);
    }

    getSalario(1, (err, salario) => {
        if (err) {
            console.log('ERROR SALARIO!');
            return console.log(err);
        }

        console.log('El empleado:', empleado, 'tiene un salario de: ', salario);
    });
})