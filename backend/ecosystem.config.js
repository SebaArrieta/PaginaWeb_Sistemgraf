module.exports = {
  apps: [
    {
      name: "server-paginaweb",       // Nombre de la aplicación
      script: "index.js",     // Archivo de entrada de la aplicación
      instances: 1,         // Número de instancias (0 para modo cluster)
      autorestart: true,    // Reinicio automático en caso de fallo
      watch: false,         // No ver cambios en archivos automáticamente
      max_restarts: 10,     // Número máximo de intentos de reinicio
      restart_delay: 5000,  // Retraso en milisegundos antes de reiniciar
    },
  ],
};
