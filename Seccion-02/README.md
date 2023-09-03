Curso, sección 2: Node Farm

Este repositorio contiene el proyecto Node Farm, una aplicación de servidor web desarrollada con Node.js. El proyecto se centra en introducir conceptos fundamentales de Node.js, al mismo tiempo que proporciona una comprensión práctica de cómo construir un servidor web básico.
Pasos para configurar y ejecutar el proyecto

Paso 1: Clonar el Repositorio

Comienza clonando este repositorio en tu máquina local usando el siguiente comando:

    git clone https://github.com/asynkDF/curso-node

Paso 2: Instalar Dependencias

Navega al directorio del proyecto y ejecuta este comando para instalar las dependencias necesarias:

    cd curso-node
    npm install slugify
    npm install -D nodemon

Esto instalará automáticamente las dependencias listadas en el archivo package.json.

Inicia el servidor ejecutando este comando:    

    npm start

El servidor utilizará nodemon, que reiniciará automáticamente el servidor cuando detecte cambios en el código.

Paso 4: Acceder a la Aplicación

Abre tu navegador web y visita http://localhost:8000 para interactuar con la aplicación Node Farm.
Estructura del Proyecto y Conceptos Clave

Node Farm introduce conceptos clave de Node.js que se combinan para construir una aplicación web simple:
Operaciones del Sistema de Archivos

El archivo index.js utiliza el módulo fs para realizar operaciones de lectura y escritura en archivos.
Creación de Servidores HTTP

Utilizamos el módulo http para crear un servidor HTTP que maneja solicitudes entrantes y envía respuestas apropiadas.
Enrutamiento

Nuestro servidor considera las rutas de URL para mostrar diferentes contenidos según la solicitud.
Plantillas HTML

Utilizamos plantillas HTML almacenadas en el directorio templates para generar contenido dinámico utilizando datos de archivos JSON.
Archivos y Directorios Principales

    index.js: El núcleo del servidor. Contiene la lógica para manejar solicitudes y construir respuestas. También importa módulos y plantillas HTML necesarios.

    templates: Contiene archivos HTML que actúan como plantillas para generar contenido dinámico.

    dev-data: Almacena data.json, que contiene información sobre productos en formato JSON.

    modules: Contiene replaceTemplate.js, un módulo que reemplaza marcadores en plantillas HTML con datos reales.

Dependencias Principales

El archivo package.json define las dependencias necesarias para ejecutar el proyecto. Las principales son:

    slugify: Utilizado para formatear cadenas de texto en slugs (identificadores URL amigables).

    nodemon: Herramienta de desarrollo que reinicia automáticamente el servidor al detectar cambios en el código.

Explorando Funciones Especiales

Dentro del archivo index.js, encontrarás funciones clave como readFileSync para leer archivos de manera síncrona, y http.createServer para crear un servidor HTTP. Además, utilizamos slugify para formatear los nombres de los productos en identificadores URL amigables.


Conclusión

El proyecto Node Farm (del curso) proporciona una base sólida para comprender los conceptos esenciales de Node.js y cómo se aplican para crear un servidor web básico. Explorando el código y siguiendo los pasos mencionados, puedes obtener una idea de cómo construir y ejecutar aplicaciones del lado del servidor utilizando Node.js.