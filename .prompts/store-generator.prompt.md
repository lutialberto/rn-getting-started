# Prompt para Generar Stores con Zustand

## Contexto

Eres un experto desarrollador de React Native trabajando en un proyecto que utiliza Zustand para el manejo de estado global. El proyecto sigue patrones de clean architecture y separación de responsabilidades.

## Objetivo

Generar stores de Zustand que manejen estado global de forma eficiente, incluyendo persistencia, acciones asíncronas y subscripciones a cambios.

## Estructura Base de Store

```typescript
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import * as SecureStore from 'expo-secure-store';

// Configuración de storage seguro
const secureStorage = {
  getItem: async (name: string): Promise<string | null> => {
    return await SecureStore.getItemAsync(name);
  },
  setItem: async (name: string, value: string): Promise<void> => {
    await SecureStore.setItemAsync(name, value);
  },
  removeItem: async (name: string): Promise<void> => {
    await SecureStore.deleteItemAsync(name);
  },
};

// Interfaces del store
export interface [NombreStore]State {
  // HINT: Define el estado del store
}

export interface [NombreStore]Actions {
  // HINT: Define las acciones del store
}

export type [NombreStore]Store = [NombreStore]State & [NombreStore]Actions;

// Store principal
export const use[NombreStore]Store = create<[NombreStore]Store>()(
  persist(
    (set, get) => ({
      // Estado inicial
      // HINT: Define los valores iniciales del estado

      // Acciones
      // HINT: Implementa las acciones del store
    }),
    {
      name: '[nombre-store]-storage',
      storage: createJSONStorage(() => secureStorage),
      // HINT: Configurar qué partes del estado persistir
      partialize: (state) => ({
        // Solo persiste campos específicos
      }),
    }
  )
);
```

## Tipos de Stores Comunes

### 1. Auth Store

```typescript
export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

export interface AuthActions {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (userData: RegisterData) => Promise<void>;
  updateProfile: (userData: Partial<User>) => Promise<void>;
  clearError: () => void;
  checkAuthStatus: () => Promise<void>;
}
```

### 2. App Settings Store

```typescript
export interface SettingsState {
  theme: "light" | "dark" | "system";
  language: string;
  notifications: {
    push: boolean;
    email: boolean;
    sms: boolean;
  };
  preferences: {
    autoSave: boolean;
    biometricAuth: boolean;
  };
}

export interface SettingsActions {
  setTheme: (theme: SettingsState["theme"]) => void;
  setLanguage: (language: string) => void;
  updateNotificationSettings: (
    settings: Partial<SettingsState["notifications"]>,
  ) => void;
  updatePreferences: (
    preferences: Partial<SettingsState["preferences"]>,
  ) => void;
  resetSettings: () => void;
}
```

### 3. Data Store (Generic)

```typescript
export interface DataState<T> {
  items: T[];
  selectedItem: T | null;
  loading: boolean;
  error: string | null;
  filters: Record<string, any>;
  pagination: {
    page: number;
    limit: number;
    total: number;
    hasMore: boolean;
  };
}

export interface DataActions<T> {
  fetchItems: (params?: FetchParams) => Promise<void>;
  createItem: (item: Omit<T, "id">) => Promise<void>;
  updateItem: (id: string, updates: Partial<T>) => Promise<void>;
  deleteItem: (id: string) => Promise<void>;
  setSelectedItem: (item: T | null) => void;
  setFilters: (filters: Record<string, any>) => void;
  loadMore: () => Promise<void>;
  refresh: () => Promise<void>;
  clearError: () => void;
}
```

## Patrones Avanzados

### Store con Subscriptores

```typescript
export const useNotificationStore = create<NotificationStore>((set, get) => ({
  notifications: [],
  unreadCount: 0,

  addNotification: (notification: Notification) => {
    set((state) => ({
      notifications: [notification, ...state.notifications],
      unreadCount: state.unreadCount + 1,
    }));
  },

  markAsRead: (id: string) => {
    set((state) => ({
      notifications: state.notifications.map((n) =>
        n.id === id ? { ...n, read: true } : n,
      ),
      unreadCount: Math.max(0, state.unreadCount - 1),
    }));
  },

  subscribe: (callback: (state: NotificationStore) => void) => {
    return useNotificationStore.subscribe(callback);
  },
}));
```

### Store con Middleware Personalizado

```typescript
const logger = (config) => (set, get, api) =>
  config(
    (...args) => {
      console.log("Store updated:", args);
      set(...args);
    },
    get,
    api,
  );

export const useAppStore = create<AppStore>()(
  logger(
    persist(
      (set, get) => ({
        // Store implementation
      }),
      {
        name: "app-storage",
        storage: createJSONStorage(() => secureStorage),
      },
    ),
  ),
);
```

## Ejemplos de Uso

### Solicitud: Store de Carrito de Compras

```
Genera un store de carrito de compras que maneje:
- Lista de productos en el carrito
- Cantidad de cada producto
- Total del carrito con impuestos
- Agregar/remover/actualizar productos
- Aplicar cupones de descuento
- Persistencia del carrito
- Estados de loading para operaciones async
```

### Solicitud: Store de Favoritos

```
Genera un store de favoritos que maneje:
- Lista de elementos favoritos
- Toggle de favorito por ID
- Sincronización con backend
- Filtros y categorías de favoritos
- Persistencia local
- Estados de error y loading
```

## Selectors y Computeds

```typescript
// Selectors para optimizar re-renders
export const useCartTotal = () =>
  useCartStore((state) =>
    state.items.reduce((total, item) => total + item.price * item.quantity, 0),
  );

export const useCartItemCount = () =>
  useCartStore((state) =>
    state.items.reduce((count, item) => count + item.quantity, 0),
  );

// Computed values
export const useAuthenticatedUser = () => {
  const { user, isAuthenticated } = useAuthStore();
  return isAuthenticated ? user : null;
};
```

## Plantilla de Solicitud

```
Genera un store de [PROPÓSITO] que maneje:
- Estado: [ESTADO_1, ESTADO_2, ESTADO_N]
- Acciones: [ACCIÓN_1, ACCIÓN_2, ACCIÓN_N]
- Persistencia: [QUÉ_PERSISTIR]
- Operaciones async: [OPERACIONES_ASYNC]

Incluye [FUNCIONALIDADES_ESPECÍFICAS] y considera [OPTIMIZACIONES].
```

## Buenas Prácticas

### Performance

- Usar selectors para evitar re-renders innecesarios
- Separar stores por responsabilidad
- Implementar shallow compare cuando sea necesario
- Evitar objetos y arrays anidados complejos

### Estructura

- Mantener stores pequeños y enfocados
- Usar TypeScript estricto
- Implementar error handling consistente
- Documentar acciones complejas

### Testing

- Stores deben ser testeables unitariamente
- Mock de dependencias externas
- Test de persistencia y hydration
- Verificar estados intermedios en operaciones async

### Persistencia

- Solo persistir datos necesarios
- Considerar migración de esquemas
- Manejar casos de corrupción de datos
- Implementar fallbacks para datos faltantes
