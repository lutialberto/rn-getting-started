# RN Getting Started

Este documento describe los pasos necesarios para configurar un proyecto base de React Native con Expo. Incluye la instalación de dependencias, configuración de herramientas, y generación de componentes y configuraciones comunes para iniciar un proyecto rápidamente. Este proyecto está diseñado para facilitar el desarrollo de aplicaciones con configuraciones predefinidas y buenas prácticas.

## Índice

1. Introducción
2. Creación del Proyecto
3. Instalación de Dependencias
4. Configuración del Proyecto
5. Ejecución del Proyecto
6. Configuración de Builds y Ambientes
7. Snippets de VSCode
8. Estructura de Carpetas Sugerida
9. Buenas Prácticas

## 1. Introducción

Este proyecto base está diseñado para desarrolladores que buscan iniciar rápidamente con React Native utilizando Expo. Proporciona una estructura inicial con configuraciones predefinidas y buenas prácticas.

> **¿Por qué importar todo localmente y no usar una librería externa?**
>
> La idea principal es que todos los componentes, hooks y utilidades estén disponibles localmente en el proyecto, en lugar de depender de una librería externa que los exponga.  
> Esto permite editar, adaptar y evolucionar cualquier parte del código según las necesidades del proyecto, sin depender de actualizaciones de una librería central ni enfrentar breaking changes inesperados.  
> Así, el equipo tiene control total sobre la base de código y puede mantener la flexibilidad y la velocidad de desarrollo.

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

### 4.1 Configuración automática

Para facilitar la configuración inicial, puedes usar el comando batch `setup-base.bat` ubicado en la carpeta `_commands`. Este comando realiza todos los pasos de borrado, creación y copiado de carpetas necesarias desde el proyecto base.

Ejecuta en la raíz del proyecto:

```bat
..\rn-getting-started-master\_commands\setup-base.bat
```

Esto eliminará las carpetas iniciales, creará las necesarias y copiará todos los recursos base.

### Nota sobre componentes individuales

Si solo necesitas copiar una carpeta de componente específica, puedes usar el comando:

```bat
..\rn-getting-started-master\_commands\copy-component.bat <nombre-carpeta>
```

O para copiar todos los componentes elegibles:

```bat
..\rn-getting-started-master\_commands\copy-component.bat --all
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

   ```bat
   ..\rn-getting-started-master\_commands\setup-env.bat
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

## 7. Snippets de VSCode

Los snippets son fragmentos de código reutilizables que facilitan la escritura rápida de componentes y configuraciones comunes en el proyecto. Se recomienda agregarlos a la carpeta `.vscode` para tenerlos disponibles en tu editor VSCode.

### Archivos de snippets disponibles

- `app-components.code-snippets`: Componentes reutilizables (botones, textos, iconos, etc.)
- `app-form.code-snippets`: Formularios y campos de entrada
- `app-hooks.code-snippets`: Hooks personalizados (temas, estilos, toast, etc.)
- `app-navigation.code-snippets`: Navegación y layouts
- `app-debug.code-snippets`: Utilidades para debug visual

### Copiar los snippets al proyecto

Ejecuta el siguiente comando para copiar los archivos de snippets desde el proyecto base:

```bat
..\rn-getting-started-master\_commands\copy-snippet.bat
```

Una vez copiados, los snippets estarán disponibles automáticamente en VSCode al escribir los prefijos definidos en cada archivo.

## 8. Estructura de Carpetas Sugerida

A continuación se muestra una estructura de carpetas recomendada para este proyecto:

```plaintext
.
├── app/
├── assets/
│   └── fonts/
├── components/
│   ├── buttons/
│   ├── containers/
│   ├── forms/
│   ├── texts/
│   └── toast/
├── hooks/
│   └── theme/
```

**Descripción de las carpetas:**

- **app/**: Contiene la estructura principal de navegación y pantallas de la aplicación.
- **assets/**: Archivos estáticos como imágenes, fuentes y otros recursos.
  - **fonts/**: Fuentes personalizadas utilizadas en la app.
- **components/**: Componentes reutilizables de la interfaz de usuario.
  - **buttons/**: Botones personalizados.
  - **containers/**: Contenedores y layouts reutilizables.
  - **forms/**: Componentes relacionados con formularios.
  - **texts/**: Componentes de texto personalizados.
  - **toast/**: Componentes para notificaciones tipo toast.
- **hooks/**: Hooks personalizados para lógica reutilizable.
  - **theme/**: Hooks relacionados con el manejo de temas y estilos.

Esta estructura facilita la organización y el mantenimiento del proyecto, siguiendo buenas prácticas para proyectos React Native con Expo.

## 9. Buenas Prácticas

A continuación se presentan algunas recomendaciones para mantener la calidad y organización del proyecto:

- **Organización de carpetas:**  
  Mantén los componentes, hooks y recursos en sus respectivas carpetas. Usa subcarpetas para agrupar componentes relacionados.

- **Nomenclatura consistente:**  
  Usa nombres descriptivos y en inglés para archivos, carpetas y variables. Ejemplo: `UserCard`, `useAuth`, `LoginForm`, `PreferencesScreen`, `NewsTab`.

- **Formateo y linting:**  
  El proyecto utiliza Prettier para mantener un formato de código consistente. Automaticamente se editan los archivos segun las reglas definidas sobre los archivos durante el pre-commit.

- **Variables de entorno:**  
  No edites los archivos `.env` a menos que sean cambios estables. Tampoco dejes datos sensibles ya que quedarán expuestos. Crea y utiliza el `.env.local` para sobreescribir las variables durante el desarrollo.

- **Commits claros:**  
  Escribe mensajes de commit descriptivos y en presente. Se recomienda el uso de prefijos para identificar el tipo de cambio realizado:

  - **Feat:** Para agregar nuevas funcionalidades.  
    _Ejemplo:_ `Feat: add user authentication flow`
  - **Fix:** Para corregir errores o bugs.  
    _Ejemplo:_ `Fix: resolve crash on login screen`
  - **Doc:** Para cambios en la documentación.  
    _Ejemplo:_ `Doc: update installation instructions in README`
  - **Refactor:** Para mejoras internas del código que no afectan la funcionalidad.  
    _Ejemplo:_ `Refactor: simplify user context logic`
  - **Rollback:** Para revertir cambios previos.  
    _Ejemplo:_ `Rollback: revert authentication feature`
  - **Merge:** Para fusiones de ramas.  
    _Ejemplo:_ `Merge: branch 'feature/login' into 'main'`

  Utilizar estos prefijos ayuda a mantener un historial de cambios claro y fácil de entender para todo el equipo.

- **Documentación:**  
  Mantén este README actualizado y documenta cualquier cambio relevante en la estructura o configuración del proyecto.

- **Snippets y utilidades:**  
  Aprovecha los snippets de VSCode incluidos para acelerar el desarrollo y mantener la consistencia.

### Criterios para buscar, agregar y validar recursos en el proyecto

- **¿Cómo encontrar si algo ya existe?**  
  Antes de crear un nuevo componente, hook o utilidad, utiliza la búsqueda global de tu editor (por ejemplo, `Ctrl+Shift+F` en VSCode) para verificar si ya existe algo similar en el proyecto.  
  También puedes navegar por la estructura de carpetas sugerida para identificar recursos reutilizables.

- **¿Cómo agregar nuevos recursos?**  
  Si necesitas agregar un nuevo componente, hook o utilidad:

  - Ubícalo en la carpeta correspondiente (`components/`, `hooks/`, etc.).
  - Sigue la convención de nombres y estructura del proyecto. En caso de ser un elemento 'App' (ButtonApp, TextApp, etc), significa que no puede tener logica de negocio y debe ser lo mas generico posible.
  - Si es un componente que podría reutilizarse, documenta su uso y dependencias con las anotaciones. Considerar si es posible y vale la pena generar un snippet.
  - Aplica los principios SOLID siempre que puedas.

- **¿Qué hacer si necesitas modificar algo existente?**
  - Antes de modificar un recurso compartido, revisa si otros módulos lo utilizan para evitar romper funcionalidades.
