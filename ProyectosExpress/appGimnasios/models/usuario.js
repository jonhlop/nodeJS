const create = ({ username, email, password }) => {
    return new Promise((resolve, reject) => {
        db.query(
            'insert into usuarios (username, email, password) values (?, ?, ?)',
            [username, email, password],
            (err, result) => {
                if (err) reject(err);
                resolve(result);
            }
        )
    });
};

module.exports = {
    create
}