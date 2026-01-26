# Backend Boilerplate

Un boilerplate inicial para construir **APIs RESTful** con **Node.js**, **Express** y **TypeScript**, listo para desarrollo, pruebas, linting y despliegue en producción.

---

## 📦 Tecnologías principales

- [**Node.js**](https://nodejs.org/en/) y [**Express**](https://expressjs.com/) para el servidor.
- [**TypeScript**](https://www.typescriptlang.org/) para tipado estático y mayor seguridad.
- [**Zod**](https://zod.dev/) para validación de datos.
- [**Pino**](https://getpino.io/) para logging eficiente.
- [**Helmet**](https://helmetjs.github.io/) y [**cors**](https://www.npmjs.com/package/cors) para seguridad y manejo de CORS.
- [**Express Rate Limit**](https://www.npmjs.com/package/express-rate-limit) para limitar peticiones y proteger tu API.
- [**Jest**](https://jestjs.io/) + [**Supertest**](https://www.npmjs.com/package/supertest) para testing.

---

## ⚡ Características

- Estructura modular lista para crecer.
- Scripts para desarrollo, producción, testing y limpieza.
- Integración de [**Prettier**](https://prettier.io/) y [**ESLint**](https://eslint.org/) para mantener el código limpio.
- [**Husky**](https://typicode.github.io/husky/#/) + [**Commitlint**](https://commitlint.js.org/) para commits estandarizados.
- Configuración de pruebas con cobertura incluida.

---

## 🚀 Instalación

Clona el repositorio:

```bash
git clone <URL_DEL_REPOSITORIO>
cd backend-boilerplate
```

### _Listo para usar con npm o pnpm:_

Si quieres usar NPM solo debes **borrar el fichero pnpm-lock.yaml**.

```bash
npm install
```

En caso contrario si quieres usar PNPM solo ejecuta pnpm install.

```bash
pnpm install
```

### Variables de entorno

Renombrar fichero .env.example a .env y usar configurar las variables de entorno.

---

## 🏃‍♂️ Scripts disponibles

| Script                  | Descripción                                                             |
| ----------------------- | ----------------------------------------------------------------------- |
| `npm run dev`           | Inicia el servidor en modo desarrollo con watch usando `tsx`.           |
| `npm run build`         | Compila TypeScript a JavaScript en la carpeta `dist/`.                  |
| `npm start`             | Ejecuta la versión de producción desde `dist/index.js`.                 |
| `npm run test`          | Ejecuta tests usando Jest.                                              |
| `npm run coverage`      | Genera reporte de cobertura de tests con Jest.                          |
| `npm run prettier`      | Formatea todo el código del proyecto usando Prettier.                   |
| `npm run lint`          | Aplica ESLint para corregir errores de estilo automáticamente.          |
| `npm run format`        | Aplica Prettier y ESLint en conjunto.                                   |
| `npm run clean`         | Elimina carpetas `dist/` y `coverage/` para limpiar el proyecto.        |
| **_`npm run prepare`_** | Prepara Husky y los hooks de Git.**(Usarlo después de Initial commit)** |

## 📝 Commitlint y Husky

- Configuración lista para asegurar commits con mensajes convencionales.
- Husky activa hooks de pre-commit automáticamente.
- Lint-staged asegura que solo se revisen los archivos modificados.
