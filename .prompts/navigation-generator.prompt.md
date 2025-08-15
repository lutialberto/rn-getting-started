# Prompt para Configurar Navegación con Expo Router

## Contexto

Eres un experto desarrollador de React Native trabajando con Expo Router (file-based routing). El proyecto utiliza navegación por tabs, stacks y modales siguiendo las convenciones de Expo Router v3+.

## Objetivo

Configurar estructuras de navegación completas incluyendo layouts, pantallas anidadas, parámetros de rutas y configuraciones de UI específicas para cada plataforma.

## Tipos de Navegación Disponibles

### 1. Tab Navigation (Bottom Tabs)

- Navegación principal de la app
- Iconos y labels personalizados
- Badge notifications
- Configuración per-tab

### 2. Stack Navigation

- Navegación jerárquica
- Headers personalizados
- Animaciones de transición
- Gestión de back button

### 3. Modal Navigation

- Pantallas overlay
- Configuración de presentación
- Manejo de cierre

### 4. Drawer Navigation (Opcional)

- Menú lateral deslizable
- Navegación alternativa
- Perfiles y configuraciones

## Estructura de Archivos

### Layout Principal (\_layout.tsx)

```typescript
import { Tabs } from 'expo-router';
import { useColorScheme } from 'react-native';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import Colors from '@/constants/Colors';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>

      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
```

### Pantalla con Stack (\_layout.tsx en subcarpeta)

```typescript
import { Stack } from 'expo-router';

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Lista',
          headerShown: true,
        }}
      />

      <Stack.Screen
        name="[id]"
        options={{
          title: 'Detalle',
          headerShown: true,
          presentation: 'modal', // Para modal presentation
        }}
      />
    </Stack>
  );
}
```

### Pantalla Individual

```typescript
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ViewThemed } from '@/components/containers/ViewThemed';
import { TextApp } from '@/components/texts/TextApp';

export default function DetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  return (
    <ViewThemed>
      <TextApp>Detalle del elemento: {id}</TextApp>
      {/* HINT: Implementa el contenido de la pantalla */}
    </ViewThemed>
  );
}
```

## Configuraciones Avanzadas

### 1. Headers Dinámicos

```typescript
import { useLayoutEffect } from 'react';
import { useNavigation } from 'expo-router';

export default function DynamicHeaderScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Título Dinámico',
      headerRight: () => (
        <ButtonApp label="Acción" onPress={() => {}} />
      ),
    });
  }, [navigation]);

  return (
    // HINT: Contenido de la pantalla
  );
}
```

### 2. Navegación Programática

```typescript
import { useRouter } from 'expo-router';

export default function NavigationExample() {
  const router = useRouter();

  const navigateToDetail = (id: string) => {
    router.push(`/detail/${id}`);
  };

  const navigateWithParams = () => {
    router.push({
      pathname: '/detail/[id]',
      params: { id: '123', extra: 'data' }
    });
  };

  const goBack = () => {
    router.back();
  };

  return (
    // HINT: UI con botones de navegación
  );
}
```

### 3. Protección de Rutas

```typescript
import { Redirect } from 'expo-router';
import { useAuth } from '@/hooks/useAuth';

export default function ProtectedLayout() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Redirect href="/login" />;
  }

  return (
    // HINT: Layout protegido
  );
}
```

## Ejemplos de Estructuras Comunes

### App de E-commerce

```
app/
├── _layout.tsx (Root layout)
├── (auth)/
│   ├── _layout.tsx (Auth stack)
│   ├── login.tsx
│   └── register.tsx
├── (tabs)/
│   ├── _layout.tsx (Main tabs)
│   ├── index.tsx (Home)
│   ├── search.tsx
│   ├── cart.tsx
│   └── profile.tsx
├── product/
│   ├── _layout.tsx (Product stack)
│   ├── [id].tsx (Product detail)
│   └── reviews/[id].tsx
└── +not-found.tsx
```

### App de Redes Sociales

```
app/
├── _layout.tsx
├── (tabs)/
│   ├── _layout.tsx
│   ├── feed.tsx
│   ├── explore.tsx
│   ├── notifications.tsx
│   └── profile.tsx
├── post/
│   ├── _layout.tsx
│   ├── create.tsx
│   └── [id].tsx
├── user/
│   └── [username].tsx
└── settings/
    ├── _layout.tsx
    ├── account.tsx
    └── privacy.tsx
```

## Plantilla de Solicitud

```
Configura la navegación para una app de [TIPO_APP] con:
- Tabs principales: [TAB_1, TAB_2, TAB_N]
- Stacks secundarios: [STACK_1, STACK_2]
- Pantallas modales: [MODAL_1, MODAL_2]
- Protección de rutas: [RUTAS_PROTEGIDAS]

Incluye [FUNCIONALIDADES_ESPECÍFICAS] y considera [PLATAFORMAS_TARGET].
```

## Consideraciones de UX

### Navegación Intuitiva

- Tabs principales accesibles siempre
- Breadcrumb visual en stacks profundos
- Animaciones suaves entre pantallas
- Manejo correcto del botón atrás

### Configuración por Plataforma

```typescript
import { Platform } from "react-native";

const screenOptions = {
  headerShown: Platform.OS === "ios",
  tabBarStyle: {
    height: Platform.OS === "ios" ? 88 : 60,
  },
};
```

## Buenas Prácticas

- Usar grupos de rutas (parentesis) para organizar
- Implementar lazy loading en rutas pesadas
- Configurar deep linking apropiado
- Manejar estados de loading en navegación
- Implementar fallback para rutas no encontradas
- Considerar accesibilidad en navegación
