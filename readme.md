# comandos y acciones que hice para crear la app expo

# Crear la solucion

npx create-expo-app {NombreApp} --template tabs

# Pregunta si quiero instalar create-expo-app@3.0.0 -> y

#

# Ir a la solucion

cd .\{NombreApp}

#

# librería de storage

npx expo install expo-secure-store

# libreria de manejo estado global

npm install zustand

# libreria de asistencia al desarrollo

npx expo install expo-dev-client

# libreria de asistencia al chequeo de versiones

npx expo-doctor

#

# Borrar lo siguiente de la carpeta raiz -> app, assets, components, constants

rm -rf assets/images
rm -rf app
rm -rf components
rm -rf constants

#

# app

# copiar la carpeta app a la raiz del proyecto

cp -r app ./

#

# Instalar librerías manualmente

# prettier

npm install --save dev --save-exact prettier
npm install --save-dev husky lint-staged
npx husky init

# copiar configuracion de la extension prettier para vs code

cp -r settings.json .vscode

#

# fonts

# copiar archivos .ttf de fuentes contenidos en carpeta fonts a la carpeta assets del proyecto

cp -r fonts assets

#

# hooks

# copiar la carpeta theme a la carpeta hooks del proyecto

cp -r theme hooks

#

# componentes

# botones

# copiar la carpeta de buttons a la carpeta de components del proyecto

cp -r buttons components

# librería para uso de carruseles

npm expo install react-native-pager-view

# librería para el uso de top bar navigation

npm install @react-navigation/material-top-tabs react-native-tab-view

# containers -> errors - modals - spinners - views - carrousels - accordions - top bar

# copiar la carpeta de containers a la carpeta de components del proyecto

cp -r containers components

# texts

# copiar la carpeta de texts a la carpeta de components del proyecto

cp -r texts components

# inputs

# instalar react hook form

npm install react-hook-form

# librería para uso de date picker

npm expo install @react-native-community/datetimepicker

# librería para uso de checkbox

npx expo install expo-checkbox

# generación de components -> inputText,inputCheckboc,inputDate,inputSelect

# copiar la carpeta de forms a la carpeta de components del proyecto

cp -r forms components

#toasts

# copiar la carpeta de toast a la carpeta components del proyecto

cp -r toast components

# librería para mostrar las tostadas

npm install --save react-native-toast-message

# ajustar App.tsx / \_layout.tsx (componente raiz de la aplicación), poniendo <ToastApp /> como ultimo elemento del dom

#

# libreria para ejecucion y subida de apps

npm install --global eas-cli
eas init --id {EAS Build Project Id}

# Pregunta username y luego password

#

# Instalacion de app en dispositivos de desarrollo

# Definir un build a ejecutar luego de haber configurado todos modulos expo necesarios

eas build:configure

# pregunta a que plataformas quiero apuntar -> Todas | Android | Ios

#

#Generación de configs para los 3 ambientes - dev - qa - prod

# copiar los archivos de env a la carpeta raíz del proyecto

cp -r .env ./
cp -r .env.test ./
cp -r .env.production ./

# renombrar app json a config js

mv app.json app.config.js

# editar app.config.json

# agregar al principio const IS_DEV = process.env.APP_VARIANT === 'development';

# agregar al principio const IS_TEST = process.env.APP_VARIANT === 'test';

# transformar el "objeto" entre {}, como sentencia js -> export default { ... }

# editar expo.name -> 'RN Getting Started' + (IS_DEV ? ' - Dev' : IS_TEST ? ' - Test' : ''),

# editar expo.android.package -> package: 'com.{nombre de la app}' + (IS_DEV ? '.dev' : IS_TEST ? '.test' : ''),

# editar expo.ios.bundleIdentifier -> package: 'com.{nombre de la app}' + (IS_DEV ? '.dev' : IS_TEST ? '.test' : ''),

# editar eas json

#agregar build.development.env.APP_VARIANT = "development"
#agregar build.test.extends = "development"
#agregar build.test.env.APP_VARIANT = "test"

#

# Levantar ambiente Android

eas build --profile development --platform android

# pregunta sobre android application id -> com.{NombreApp}

# pregunta sobre la keystore, generar nueva o usar una existente -> y/n

# pregunta sobre instalar el build en emulador -> y/n

# para dispositivos fisicos abrir el link o leer el qr con el celular e instalar la apk

#

# ejecutar comando para correr la solucion

npx expo start

# para correr con expo go en un dispositivo fisico, abrir la aplicacion y escanear el qr

# para correr con development build en un dispositivo fisico, conectarlo por usb a la pc, escanear el qr para instalar la aplicacion, luego escanear el qr para obtener el link y pegarlo dentro de la aplicacion
