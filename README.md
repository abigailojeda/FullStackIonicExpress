# ✨ Inspiration Point ✨

Una aplicación en la que poder compartir esas ideas que se te ocurren en un momento de inspiración pero no tienes tiempo o recursos para llevarla a cabo.
Compártela con el mundo para que alguien pueda hacerla realidad, o explora y descubre ideas que la gente ha compartido y que puedes llevar a cabo
## 💾 Descarga el proyecto

Crea una carpeta para el proyecto y ejecuta:

git clone https://github.com/abigailojeda/FullStackIonicExpress.git .

Con el "." del final especificas que quieres que el proyecto se clone dentro de esa carpeta, y no que cree una carpeta nueva para clonarse


## 📂 ¿Qué necesitas tener instalado en tu ordenador?

NodeJS, versión LTS  [Enlace a Node](https://nodejs.org/en/)

Ionic: 
npm install -g @ionic/cli


## ⚙️ Configuración del proyecto

### backend
En la carpeta back( cd back), instala las dependencias:
npm install

IMPORTANTE:
Debes crear una base de datos en local, esta es la configuración:
```javascript
// back/config/db-config.js
module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "inspiration_point",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}
```


En caso de que tu front no se ejecute en el puerto 8100, deberás cambiarlo aquí:

```javascript
// back/index.js linea 6
 let corsOptions = {
  origin: 'http://localhost:8100'
}
```

#### 👨‍🚀 prueba los endpoints con POSTMAN

<div class="postman-run-button"
data-postman-action="collection/fork"
data-postman-var-1="18449118-74e2d313-f4c4-486b-8daa-59e9c377384a"
data-postman-collection-url="entityId=18449118-74e2d313-f4c4-486b-8daa-59e9c377384a&entityType=collection&workspaceId=ab713d30-9a13-469c-8c13-72ca4aea76e0"></div>
<script type="text/javascript">
  (function (p,o,s,t,m,a,n) {
    !p[s] && (p[s] = function () { (p[t] || (p[t] = [])).push(arguments); });
    !o.getElementById(s+t) && o.getElementsByTagName("head")[0].appendChild((
      (n = o.createElement("script")),
      (n.id = s+t), (n.async = 1), (n.src = m), n
    ));
  }(window, document, "_pm", "PostmanRunObject", "https://run.pstmn.io/button.js"));
</script>

### frontend
En la carpeta front( cd front), instala las dependencias:
npm install

IMPORTANTE:
En caso de que tu back no se ejecute en el puerto 8080, deberás cambiarlo aquí:

```javascript
// front/src/app/services/idea.service.ts linea 8
  endpoint = 'http://localhost:8080/api/idea'
```



<!-- 
## Wiki 📖

Puedes encontrar mucho más de cómo utilizar este proyecto en nuestra [Wiki](https://github.com/tu/proyecto/wiki) -->


<!-- ## Expresiones de Gratitud 🎁

* Comenta a otros sobre este proyecto 📢
* Invita una cerveza 🍺 o un café ☕ a alguien del equipo. 
* Da las gracias públicamente 🤓.
* Dona con cripto a esta dirección: `0xf253fc233333078436d111175e5a76a649890000`
* etc. -->



---
 🙋🏻‍♀️ [Abigail Ojeda Alonso](https://es.linkedin.com/in/abigail-ojeda)
