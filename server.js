const app = require('./src/app');
const PORT = process.env.PORT || 5000;

// Iniciar el servidor y escuchar en el puerto especificado
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

// Exportar la aplicación para pruebas o uso en otro lugar
module.exports = app;