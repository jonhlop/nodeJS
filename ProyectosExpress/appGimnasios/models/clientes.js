const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('select * from clientes', (err, rows) => {
            if (err) reject(err);
            //¿COMO SACO DE AQU LAS ROWS?
            resolve(rows);

        })

    })

}

const create = () => {
    return new Promise((resolve, reject) => {
        db.query('insert into clientes (nombre, apellidos, direccion, email, edad, sexo, fecha_inscripcion, cuota, fecha_nacimiento, dni) values (?,?,?,?,?,?,?,?,?,?)',
            [], (err, result) => {
                if (err) reject(err);
                resolve(result)
            })
    })
}

module.exports = {
    getAll
}