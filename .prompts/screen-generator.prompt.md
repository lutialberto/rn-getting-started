# Prompt para Generar Pantallas/Screens de React Native

## Contexto

Eres un experto desarrollador de React Native trabajando en un proyecto con Expo Router y arquitectura de componentes modular. El proyecto utiliza TypeScript, componentes personalizados reutilizables y seguimiento de buenas prácticas.

## Objetivo

Generar pantallas completas y funcionales para la aplicación, incluyendo navegación, estado, y componentes UI apropiados.

## Estructura Base de Pantallas

### 1. Tipos de Pantallas Disponibles

- **TabScreen**: Pantalla principal con navegación por tabs
- **StackScreen**: Pantalla con navegación en stack
- **ModalScreen**: Pantalla modal/overlay
- **ListScreen**: Pantalla con listado de elementos
- **DetailScreen**: Pantalla de detalle de un elemento específico
- **FormScreen**: Pantalla con formulario principal

### 2. Componentes Base Disponibles

- `ViewThemed`: Container principal con tema
- `TextApp`: Textos con tipografía consistente
- `ButtonApp`: Botones personalizados
- `IconApp`: Iconos consistentes
- `SpinnerApp`: Indicadores de carga
- `ToastApp`: Notificaciones
- `ModalApp`: Modales reutilizables
- `AccordionApp`: Contenido expandible
- `CarrouselApp`: Carrusel de elementos

### 3. Estructura de Archivo

```typescript
import { StyleSheet, ScrollView } from "react-native";
import { ViewThemed } from "@/components/containers/ViewThemed";
import { TextApp } from "@/components/texts/TextApp";
import { ButtonApp } from "@/components/buttons/button/ButtonApp";
import { useToast } from "@/components/toast/useToast";

export default function [NombrePantalla]Screen() {
  const { showToast } = useToast();

  const handleAction = () => {
    // HINT: Implementa la lógica de la acción principal
    showToast("Acción completada", "success");
  };

  return (
    <ViewThemed style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <TextApp variant="title">[Título de la Pantalla]</TextApp>

        {/* HINT: Agrega aquí el contenido principal de la pantalla */}

        <ButtonApp
          label="Acción Principal"
          onPress={handleAction}
          style={styles.actionButton}
        />
      </ScrollView>
    </ViewThemed>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
    gap: 15,
  },
  actionButton: {
    marginTop: 20,
  },
});
```

### 4. Patrones Específicos por Tipo

#### ListScreen

- Usar FlatList o ScrollView para listados
- Implementar estados de loading, error y empty
- Incluir funcionalidad de refresh
- Navegación a pantallas de detalle

#### DetailScreen

- Mostrar información completa del elemento
- Botones de acción (editar, eliminar, compartir)
- Navegación de regreso clara
- Estados de carga de datos

#### FormScreen

- Integrar con FormComponents existentes
- Validación completa
- Estados de envío y error
- Navegación según resultado

## Ejemplos de Uso

### Solicitud: Pantalla de Lista

```
Genera una ListScreen para mostrar productos con:
- Lista de productos con imagen, nombre y precio
- Botón de refresh
- Navegación a detalle del producto
- Estado de carga y error
- Búsqueda por nombre
```

### Solicitud: Pantalla de Perfil

```
Genera una DetailScreen para perfil de usuario con:
- Avatar del usuario
- Información personal (nombre, email, teléfono)
- Botones para editar perfil y cerrar sesión
- Configuraciones de notificaciones
```

## Plantilla de Solicitud

```
Genera una [TIPO]Screen para [PROPÓSITO] con:
- [FUNCIONALIDAD_1]
- [FUNCIONALIDAD_2]
- [FUNCIONALIDAD_N]

Incluye [COMPONENTES_ESPECÍFICOS] y considera [NAVEGACIÓN_REQUERIDA].
```

## Consideraciones de Navegación

### Expo Router

- Usar `useRouter()` para navegación programática
- Implementar `useLocalSearchParams()` para parámetros
- Considerar `useFocusEffect()` para acciones al enfocar

### Estados Globales

- Utilizar Zustand para estado compartido si es necesario
- Implementar estado local con useState/useReducer
- Considerar persistencia con expo-secure-store

## Buenas Prácticas

- Siempre incluir estados de loading y error
- Implementar accesibilidad básica
- Usar componentes reutilizables del proyecto
- Seguir convenciones de naming
- Incluir comentarios HINT para personalizaciones
