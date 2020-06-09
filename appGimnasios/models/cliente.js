const queries = require('../queries');

const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('select * from clientes', (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
};

const getAllV2 = () => {
    return new Promise((resolve, reject) => {
        db.query(queries.selectAll, (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        })
    });
};

const create = ({ nombre, apellidos, direccion, email, edad, sexo, cuota, fecha_nacimiento, dni }) => {
    return new Promise((resolve, reject) => {
        db.query('insert into clientes (nombre, apellidos, direccion, email, edad, sexo, cuota, fecha_nacimiento, dni, fecha_inscripcion) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [nombre, apellidos, direccion, email, edad, sexo, cuota, fecha_nacimiento, dni, new Date()],
            (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
    });
};

const getById = (pClienteId) => {
    return new Promise((resolve, reject) => {
        db.query('select * from clientes where id = ?', [pClienteId], (err, rows) => {
            if (err) reject(err);
            if (rows.length !== 1) reject('El id no existe');
            resolve(rows[0]);
        })
    });
};

const deleteById = (pClienteId) => {
    return new Promise((resolve, reject) => {
        db.query('delete from clientes where id = ?', [pClienteId], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
}

const deleteByCuota = (pCouta) => {
    return new Promise((resolve, reject) => {
        db.query('delete from clientes where cuota < ?', [pCouta], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
}

// DELETE CON CALLBACK
// const deleteByIdCb = (pClientId, callback) => {
//     db.query('delete from clientes where id = ?', [pClientId], callback);
// }

// deleteByIdCb(9, (err, result) => {
//     console.log(result);
// });

const updateById = (pClienteId, { nombre, apellidos, direccion, email, edad, sexo, cuota, fecha_nacimiento, dni }) => {
    return new Promise((resolve, reject) => {
        db.query(
            'update clientes set nombre = ?, apellidos = ?, direccion = ?, email = ?, edad = ?, sexo= ?, cuota = ?, fecha_nacimiento = ?, dni = ? where id = ?',
            [nombre, apellidos, direccion, email, edad, sexo, cuota, fecha_nacimiento, dni, pClienteId],
            (err, result) => {
                if (err) reject(err);
                resolve(result);
            })
    });
}

const executeQuery = (query, values) => {
    // ! ¡¿CÓMO?!
}

module.exports = {
    getAll, getAllV2, create, getById, deleteById, updateById, deleteByCuota
}