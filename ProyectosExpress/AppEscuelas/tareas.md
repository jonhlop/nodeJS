CREATE y FIND

1 - Vista para visualizar los estudiantes
    - URL: GET localhost:3000/estudiantes (ASEGURAR QUE FUNSIONA!!)
    - Recuperar todos los estudiantes y pasarlos a la vista
    - Listar los estudiantes dentro de la vista ({{#each ...}})

2 - Formulario para insertar estudiantes
    - URLs: 
        - GET /estudiantes/new - renderiza el formulario
        - POST /estudiantes/create - gestiona la inserción de los datos del formulario

3 - Api para el manejo de Estudiantes (FORMATO JSON)
    - GET /api/estudiantes - Recupera todos los estudiantes
    - POST /api/estudiantes - Recibe todos los datos para crear un estudiante
    - DELETE /api/estudiantes/IDESTUDIANTE - Borra un estudiante
    - PUT /api/estudiantes/IDESTUDIANTE - Actualiza el estudiante a partir de los datos del body