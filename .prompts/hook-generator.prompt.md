# Prompt para Generar Hooks Personalizados

## Contexto

Eres un experto desarrollador de React Native trabajando en un proyecto que utiliza hooks personalizados para encapsular lógica reutilizable. El proyecto sigue patrones de clean architecture y separación de responsabilidades.

## Objetivo

Generar hooks personalizados que encapsulen lógica compleja, manejo de estado, efectos secundarios y operaciones comunes de la aplicación.

## Tipos de Hooks Disponibles

### 1. Hooks de Estado y Datos

- **useLocalStorage**: Persistencia local con expo-secure-store
- **useApi**: Llamadas a APIs con estados de loading/error
- **useForm**: Manejo avanzado de formularios
- **useList**: Manejo de listas con filtrado, paginación
- **useSearch**: Funcionalidad de búsqueda con debounce

### 2. Hooks de UI y Interacción

- **useTheme**: Manejo de temas y estilos dinámicos
- **useToast**: Notificaciones y mensajes
- **useModal**: Control de modales y overlays
- **useNavigation**: Navegación programática avanzada
- **useKeyboard**: Manejo del teclado virtual

### 3. Hooks de Utilidades

- **useTimer**: Temporizadores y intervalos
- **useDebounce**: Debounce de valores y funciones
- **usePermissions**: Manejo de permisos del dispositivo
- **useNetwork**: Estado de conectividad de red
- **useDeviceInfo**: Información del dispositivo

## Estructura Base de Hook

```typescript
import { useState, useEffect, useCallback } from 'react';

export interface Use[NombreHook]Props {
  // HINT: Define las props necesarias para configurar el hook
}

export interface Use[NombreHook]Return {
  // HINT: Define el tipo de retorno del hook
}

export const use[NombreHook] = (props?: Use[NombreHook]Props): Use[NombreHook]Return => {
  // Estados internos
  const [state, setState] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Efectos
  useEffect(() => {
    // HINT: Implementa efectos secundarios necesarios
  }, []);

  // Funciones del hook
  const handleAction = useCallback(() => {
    // HINT: Implementa la lógica principal del hook
  }, []);

  // Cleanup si es necesario
  useEffect(() => {
    return () => {
      // HINT: Limpieza de recursos (timers, subscriptions, etc.)
    };
  }, []);

  return {
    // HINT: Retorna estado y funciones que el componente necesita
    state,
    loading,
    error,
    handleAction,
  };
};
```

## Patrones Específicos

### Hook de API

```typescript
export const useApi = <T>(endpoint: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      // HINT: Implementar llamada a la API
      const response = await fetch(endpoint);
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error desconocido");
    } finally {
      setLoading(false);
    }
  }, [endpoint]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
};
```

### Hook de Almacenamiento Local

```typescript
import * as SecureStore from "expo-secure-store";

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    const loadValue = async () => {
      try {
        const stored = await SecureStore.getItemAsync(key);
        if (stored) {
          setValue(JSON.parse(stored));
        }
      } catch (error) {
        console.error("Error loading from storage:", error);
      }
    };
    loadValue();
  }, [key]);

  const setStoredValue = useCallback(
    async (newValue: T) => {
      try {
        setValue(newValue);
        await SecureStore.setItemAsync(key, JSON.stringify(newValue));
      } catch (error) {
        console.error("Error saving to storage:", error);
      }
    },
    [key],
  );

  return [value, setStoredValue] as const;
};
```

## Ejemplos de Uso

### Solicitud: Hook de Autenticación

```
Genera un hook useAuth que maneje:
- Estado de autenticación del usuario
- Login con email/password
- Logout con limpieza de datos
- Persistencia de token
- Refresh automático de token
- Estados de loading y error
```

### Solicitud: Hook de Lista con Filtros

```
Genera un hook useFilteredList que maneje:
- Lista de elementos con tipo genérico
- Filtrado por texto de búsqueda
- Filtrado por categorías
- Ordenamiento ascendente/descendente
- Paginación con lazy loading
- Estados de empty y error
```

## Plantilla de Solicitud

```
Genera un hook use[NombreHook] que maneje:
- [FUNCIONALIDAD_1]
- [FUNCIONALIDAD_2]
- [FUNCIONALIDAD_N]

Incluye [ESTADOS_NECESARIOS] y considera [EFECTOS_SECUNDARIOS].
Debe ser reutilizable para [CASOS_DE_USO].
```

## Consideraciones de Performance

### Optimizaciones

- Usar `useCallback` para funciones que se pasan como props
- Usar `useMemo` para cálculos costosos
- Implementar cleanup en `useEffect` para evitar memory leaks
- Evitar re-renders innecesarios con dependencias correctas

### Testing

- Los hooks deben ser testeable unitariamente
- Considerar estados edge cases
- Manejar errores de forma consistente

## Buenas Prácticas

- Naming consistente con prefijo `use`
- TypeScript estricto con interfaces claras
- Documentación inline con comentarios
- Manejo de errores robusto
- Cleanup de recursos al desmontar
- Estados loading/error/success consistentes
