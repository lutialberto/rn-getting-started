# comandos y acciones que hice para crear la app expo

# descargar este proyecto como zip y descomprimirla dentro de la carperta donde se quiere crear la solucion
# debería descargarse con el siguiente nombre -> rn-getting-started-master

# Crear la solucion
npx create-expo-app {NombreApp} --template tabs
# Pregunta si quiero instalar create-expo-app -> y

# Ir a la solucion
cd .\{NombreApp}

# librería de storage
npx expo install expo-secure-store

# libreria de manejo estado global
npm install zustand

# libreria de asistencia al desarrollo
npx expo install expo-dev-client

# libreria de asistencia al chequeo de versiones
npx expo-doctor

# Borrar carpetas
rm assets/fonts
rm app
rm components
rm constants

# crear carpetas
mkdir hooks
mkdir components
mkdir .vscode

# app

# copiar la carpeta app a la raiz del proyecto
cp -r ../rn-getting-started-master/app ./

# Instalar librerías manualmente

# prettier
npm install prettier
npm install --save-dev husky lint-staged
npx husky init

# copiar configuracion de la extension prettier para vs code
cp -r ../rn-getting-started-master/.vscode/settings.json .vscode

# fonts

# copiar archivos .ttf de fuentes contenidos en carpeta fonts a la carpeta assets del proyecto
cp -r ../rn-getting-started-master/assets/fonts assets

# hooks

# copiar la carpeta theme a la carpeta hooks del proyecto
cp -r ../rn-getting-started-master/hooks/theme hooks

# componentes

# botones

# copiar la carpeta de buttons a la carpeta de components del proyecto
cp -r ../rn-getting-started-master/components/buttons components

# librería para uso de carruseles
npx expo install react-native-pager-view

# librería para el uso de top bar navigation
npm install @react-navigation/material-top-tabs react-native-tab-view

# containers -> errors - modals - spinners - views - carrousels - accordions - top bar

# copiar la carpeta de containers a la carpeta de components del proyecto
cp -r ../rn-getting-started-master/components/containers components

# texts

# copiar la carpeta de texts a la carpeta de components del proyecto
cp -r ../rn-getting-started-master/components/texts components

# inputs

# instalar react hook form
npm install react-hook-form

# librería para uso de date picker
npx expo install @react-native-community/datetimepicker

# librería para uso de checkbox
npx expo install expo-checkbox

# generación de components -> inputText,inputCheckboc,inputDate,inputSelect

# copiar la carpeta de forms a la carpeta de components del proyecto
cp -r ../rn-getting-started-master/components/forms components

#toasts

# copiar la carpeta de toast a la carpeta components del proyecto
cp -r ../rn-getting-started-master/components/toast components

# librería para mostrar las tostadas
npm install --save react-native-toast-message

# ajustar App.tsx / \_layout.tsx (componente raiz de la aplicación), poniendo <ToastApp /> como ultimo elemento del dom

# libreria para ejecucion y subida de apps
npm install --global eas-cli
eas init --id {EAS Build Project Id}

# Pregunta username y luego password

# Instalacion de app en dispositivos de desarrollo

# Definir un build a ejecutar luego de haber configurado todos modulos expo necesarios
eas build:configure

# pregunta a que plataformas quiero apuntar -> Todas | Android | Ios

#Generación de configs para los 3 ambientes - dev - qa - prod

# copiar los archivos de env a la carpeta raíz del proyecto
cp -r ../rn-getting-started-master/.env ./
cp -r ../rn-getting-started-master/.env.test ./
cp -r ../rn-getting-started-master/.env.production ./

# renombrar app json a config js
mv app.json app.config.js

# editar app.config.json

# agregar al principio const IS_DEV = process.env.APP_VARIANT === 'development';
# agregar al principio const IS_TEST = process.env.APP_VARIANT === 'test';
# transformar el "objeto" entre {}, como sentencia js -> export default { ... }
# editar expo.name -> 'RN Getting Started' + (IS_DEV ? ' - Dev' : IS_TEST ? ' - Test' : ''),
# editar expo.android.package -> package: 'com.{nombre de la app}' + (IS_DEV ? '.dev' : IS_TEST ? '.test' : ''),
# editar expo.ios.bundleIdentifier -> package: 'com.{nombre de la app}' + (IS_DEV ? '.dev' : IS_TEST ? '.test' : ''),
# formatear con prettier el app.config.js
npx prettier --write app.config.js

# editar eas json

# agregar build.development.env.APP_VARIANT: "development"
# agregar build.test.extends: "development"
# agregar build.test.env.APP_VARIANT: "test"

# Levantar ambiente Android
eas build --profile development --platform android

# pregunta sobre android application id -> com.{NombreApp}
# pregunta sobre la keystore, generar nueva o usar una existente -> y/n
# pregunta sobre instalar el build en emulador -> y/n
# para dispositivos fisicos abrir el link o leer el qr con el celular e instalar la apk

# ejecutar comando para correr la solucion
npx expo start

# para correr con expo go en un dispositivo fisico, abrir la aplicacion y escanear el qr
# para correr con development build en un dispositivo fisico, conectarlo por usb a la pc, escanear el qr para instalar la aplicacion, luego escanear el qr para obtener el link y pegarlo dentro de la aplicacion
