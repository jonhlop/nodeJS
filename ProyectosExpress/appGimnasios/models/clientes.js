const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('select * from clientes', (err, rows) => {
            if (err) reject(err);
            //¿COMO SACO DE AQU LAS ROWS?
            resolve(rows);

        })

    })

}

const create = ({
    nombre,
    apellidos,
    direccion,
    email,
    edad,
    sexo,
    cuota,
    fecha_nacimiento,
    dni
}) => {
    return new Promise((resolve, reject) => {
        db.query('insert into clientes (nombre, apellidos, direccion, email, edad, sexo, cuota, fecha_nacimiento, dni) values (?,?,?,?,?,?,?,?,?)',
            [nombre, apellidos, direccion, email, edad, sexo, cuota, fecha_nacimiento, dni],
            (err, result) => {
                if (err) reject(err);
                resolve(result)
            })
    })
}

const getById = (pClienteId) => {
    return new Promise((resolve, reject) => {
        db.query('select * from clientes where id = ?', [pClienteId], (err, rows) => {
            if (err) reject(err);
            if (rows.length !== 1) reject('El id no existe')
            resolve(rows[0])
        })

    })
}
/* Extructura con callback
const deleteByIdCb = (pClientId, callback) => {
    db.query('delete from clientes where id = ?', [pClientId], callback);
}

deleteByIdCb(9, (err, result) => {
    console.log(result);
});
 */

const deleteById = (pClienteId) => {
    return new Promise((resolve, reject) => {
        db.query('delete from clientes where id = ?', [pClienteId], (err, rows) => {
            if (err) reject(err);
            resolve(rows[0])
        })
    })
}

module.exports = {
    getAll,
    create,
    getById,
    deleteById
}