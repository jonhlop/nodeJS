### RUTAS

**index.js**
GET /

**users.js**
GET /users
GET /users/new
GET /users/IDUSER
POST /users/create

**libros.js**
GET /libros/ESCRITOR/libro/LIBRO
GET /libros/NOMBRE.EXTENSION

**tests.js**
GET /tests/ejemplo/a
GET /tests/ejemplo/b
GET /tests/ejemplo/c

### MIDDLEWARE

- Muestra la hora para todas las peticiones
- Genera una línea en un fichero para todas las peticiones
- Muestra un console.log sólo para las peticiones con /users
- Middleware global.
    - Si la hora está entre las 12 y las 17, debemos bloquear el acceso a la página y responder con un texto
    if(CONDICION){
        RESPUESTA
    }else{
        NEXT
    }