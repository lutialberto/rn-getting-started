# RN Getting Started

Este documento describe los pasos necesarios para configurar un proyecto base de React Native con Expo. Incluye la instalación de dependencias, configuración de herramientas, y generación de componentes y configuraciones comunes para iniciar un proyecto rápidamente. Este proyecto está diseñado para facilitar el desarrollo de aplicaciones con configuraciones predefinidas y buenas prácticas.

## Índice

1. Introducción
2. Creación del Proyecto
3. Instalación de Dependencias
4. Configuración del Proyecto
5. Ejecución del Proyecto
6. Configuración de Builds y Ambientes

## 1. Introducción

Este proyecto base está diseñado para desarrolladores que buscan iniciar rápidamente con React Native utilizando Expo. Proporciona una estructura inicial con configuraciones predefinidas y buenas prácticas.

## 2. Creación del Proyecto

1. Descarga este proyecto como un archivo ZIP y descomprímelo en la carpeta donde deseas crear la solución. El proyecto debería descargarse con el nombre `rn-getting-started-master`.

2. Crea la solución con el siguiente comando reemplazando `{NombreApp}` con el nombre de tu aplicación:

   ```bash
   npx create-expo-app {NombreApp} --template tabs
   ```

3. Si se solicita, instala `create-expo-app`.

4. Navega al directorio del proyecto:

   ```bash
   cd .\{NombreApp}
   ```

## 3. Instalación de Dependencias

Instala las siguientes librerías necesarias para el proyecto:

| Librería                                 | Propósito                           | Comando de Instalación                                                               |
| ---------------------------------------- | ----------------------------------- | ------------------------------------------------------------------------------------ |
| `expo-secure-store`                      | Almacenamiento seguro               | `npx expo install expo-secure-store`                                                 |
| `zustand`                                | Manejo de estado global             | `npm install zustand`                                                                |
| `@react-native-community/datetimepicker` | Selector de fechas                  | `npx expo install @react-native-community/datetimepicker`                            |
| `react-native-toast-message`             | Mostrar notificaciones tipo "toast" | `npm install react-native-toast-message`                                             |
| `prettier`                               | Formateo de código                  | `npm install prettier && npm install --save-dev husky lint-staged && npx husky init` |
| `react-native-pager-view`                | Uso de carruseles                   | `npx expo install react-native-pager-view`                                           |
| `expo-checkbox`                          | Uso de checkboxes                   | `npx expo install expo-checkbox`                                                     |
| `react-hook-form`                        | Manejo de formularios               | `npm install react-hook-form`                                                        |

## 4. Configuración del Proyecto

### 4.1 Borrar carpetas

Elimina las siguientes carpetas del proyecto si existen:

```bash
rm -rf assets/fonts app components constants
```

### 4.2 Crear carpetas

Crea las siguientes carpetas en la raíz del proyecto:

```bash
mkdir hooks components .vscode
```

### 4.3 Copiado de carpetas

Copia las carpetas necesarias desde el proyecto base:

- **App**:

  ```bash
  cp -r ../rn-getting-started-master/app ./
  ```

- **Prettier**:

  ```bash
  cp -r ../rn-getting-started-master/.vscode/settings.json .vscode
  ```

- **Fuentes**:

  ```bash
  cp -r ../rn-getting-started-master/assets/fonts assets
  ```

- **Hooks - Themes**:

  ```bash
  cp -r ../rn-getting-started-master/hooks/theme hooks
  ```

- **Components**: Copia las carpetas `buttons`, `containers`, `texts`, `forms`, y `toast` desde `components` del proyecto base al nuevo proyecto.

  ```bash
  cp -r ../rn-getting-started-master/components/{buttons,containers,texts,forms,toast} components
  ```

## 5. Ejecución del Proyecto

1. Usa el siguiente comando para iniciar la solución:

   ```bash
   npx expo start
   ```

2. Para correr con Expo Go en un dispositivo físico, abre la aplicación y escanea el código QR.

3. Para correr con un build de desarrollo en un dispositivo físico, conéctalo por USB a la PC, escanea el código QR para instalar la aplicación, luego escanea el código QR para obtener el enlace y pégalo dentro de la aplicación.

## 6. Configuración de Builds y Ambientes

### 6.1 Configuración de Builds

Define un build para ejecutar después de configurar todos los módulos necesarios de Expo:

```bash
eas build:configure
```

Selecciona las plataformas a las que deseas apuntar: Todas, Android o iOS.

### 6.2 Configuración de Ambientes (dev, test, prod)

1. Copia los archivos de configuración de entorno a la raíz del proyecto:

   ```bash
   cp -r ../rn-getting-started-master/.env ./
   cp -r ../rn-getting-started-master/.env.test ./
   cp -r ../rn-getting-started-master/.env.production ./
   ```

2. Renombra el archivo `app.json` a `app.config.js`:

   ```bash
   mv app.json app.config.js
   ```

### 6.3 Editar `app.config.js`

1. Agrega las siguientes constantes al principio del archivo para definir los entornos:

   ```javascript
   const IS_DEV = process.env.APP_VARIANT === "development";
   const IS_TEST = process.env.APP_VARIANT === "test";
   ```

2. Transforma el contenido del archivo en una exportación de objeto de la siguiente manera:

   ```javascript
   export default {
     // ...existing code...
   };
   ```

3. Edita las siguientes propiedades dentro del archivo:

   - **`expo.name`**:

     ```javascript
     "RN Getting Started" + (IS_DEV ? " - Dev" : IS_TEST ? " - Test" : "");
     ```

   - **`expo.android.package`**:

     ```javascript
     "com.{nombre de la app}" + (IS_DEV ? ".dev" : IS_TEST ? ".test" : "");
     ```

   - **`expo.ios.bundleIdentifier`**:

     ```javascript
     "com.{nombre de la app}" + (IS_DEV ? ".dev" : IS_TEST ? ".test" : "");
     ```

4. Formatea el archivo con `Prettier`:

   ```bash
   npx prettier --write app.config.js
   ```

### 6.4 Editar `eas.json`

1. Agrega la siguiente configuración para los entornos:

   - **`build.development.env.APP_VARIANT`**: `"development"`
   - **`build.test.extends`**: `"development"`
   - **`build.test.env.APP_VARIANT`**: `"test"`

### 6.5 Configurar Ambiente Android

1. Ejecuta el siguiente comando para construir el ambiente de desarrollo en Android:

   ```bash
   eas build --profile development --platform android
   ```

2. Responde las siguientes preguntas durante el proceso:

   - **Android Application ID**: Ingresa `com.{NombreApp}`.
   - **Keystore**: Genera una nueva o usa una existente (`y/n`).
   - **Instalar el build en emulador**: Responde `y/n` según corresponda.

3. Para dispositivos físicos, abre el enlace o escanea el código QR con el celular e instala la APK.
