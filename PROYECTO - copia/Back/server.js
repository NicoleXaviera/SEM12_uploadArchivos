const express = require('express');
const bodyParser = require('body-parser');//body-parser se utiliza para analizar el cuerpo de las solicitudes HTTP
const multipart = require('connect-multiparty');//connect-multiparty se utiliza para manejar la carga de archivos
const cors = require('cors');//Esta línea habilita CORS en la aplicación Express, lo que significa que el servidor aceptará solicitudes de diferentes orígenes


const PORT = 3000;
const app = express();

app.use(cors());

//multipart es para carga de archivos ya sea individuales o masivo
const multiPartMiddelware = multipart({
    uploadDir: __dirname + '/imagenes'
 });// Configurar 'connect-multiparty' para guardar los archivos cargados en el directorio './imagenes'

// Configurar 'body-parser' para analizar los cuerpos de las solicitudes JSON y URL-encoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: true
}));

// Definir una ruta POST en '/api/subir' que utiliza 'multiPartMiddelware' para manejar la carga de archivos
app.post('/api/upload', multiPartMiddelware, (req, res) => {
   // Cuando se envía una solicitud a esta ruta, el servidor responde con un mensaje JSON que indica que el archivo se ha cargado correctamente
   res.json({
       'message': 'Fichero subido correctamente.....!!!'
   })
});

// Definir una ruta GET en '/' que responde con el mensaje 'Hola Mundo....!!!' cuando se accede a ella
app.get('/', (req, res) => {
   res.send('Hola Mundo....!!!');
});

// Hacer que la aplicación Express comience a escuchar en el puerto 3000 y registrar un mensaje en la consola cuando el servidor está en funcionamiento
app.listen(3000, () => console.log(`Servidor corriendo en puerto ${PORT}`));