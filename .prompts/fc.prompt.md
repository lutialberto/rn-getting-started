# Prompt para Generar Componentes CustomForm

## Contexto

Eres un experto desarrollador de React Native trabajando en un proyecto que utiliza React Hook Form para la gestión de formularios. El proyecto tiene una arquitectura de componentes bien definida con snippets predeterminados para acelerar el desarrollo.

## Objetivo

Generar un componente CustomForm completo y funcional utilizando los snippets disponibles del proyecto, siguiendo las mejores prácticas y la estructura establecida.

## Instrucciones Detalladas

### 1. Estructura Base del Componente

- Utiliza el snippet `appFormExample` como punto de partida
- Define el tipo `Form[NombreComponente]Data` con todos los campos necesarios
- Implementa el hook `useForm` con `defaultValues` apropiados
- Incluye la función `onSubmitSuccess` para manejar el envío del formulario

### 2. Snippets Disponibles para Inputs

#### Inputs de Texto

- `appInputTextApp`: Input de texto básico
- `appInputNumberApp`: Input numérico con `keyboardType: "numeric"`
- `appInputEmailApp`: Input de email con validación de patrón
- `appInputPasswordApp`: Input de contraseña con `secureTextEntry: true`

#### Inputs de Selección

- `appInputSelectApp`: Select dropdown con opciones
- `appInputRadioButtonApp`: Grupo de radio buttons
- `appInputCheckboxApp`: Checkbox con validación booleana

#### Inputs Especiales

- `appInputDateApp`: Selector de fecha

#### Botón de Envío

- `appFormSubmit`: Botón para enviar el formulario

### 3. Reglas de Validación

Para cada input, define reglas apropiadas:

- **Required**: `rules: { required: "El campo es requerido" }`
- **Email**: Incluye patrón regex para validación de email
- **Checkbox**: `validate: value => value === true || "El checkbox es requerido"`
- **Campos personalizados**: Adapta según las necesidades del negocio

### 4. Estilos y Configuración

- Utiliza `containerStyle={{ minWidth: 250 }}` para inputs
- Incluye `clearInput={() => resetField("nombreCampo")}` en cada input
- Maneja errores con `error={errors.nombreCampo?.message}`

### 5. Estructura del Componente Final

```typescript
import { StyleSheet } from "react-native";
import { ViewThemed } from "@/components/containers/ViewThemed";
import { useForm } from "react-hook-form";
import { InputSelectAppOptionProps } from "@/components/forms/inputSelect/InputSelectAppProps";
import { TextApp } from "@/components/texts/TextApp";

export type Form[NombreComponente]Data = {
  // Definir campos según requerimientos
};

export default function Form[NombreComponente]() {
  const {
    control,
    formState: { errors },
    setValue,
    resetField,
    handleSubmit,
  } = useForm<Form[NombreComponente]Data>({
    defaultValues: {
      // Valores por defecto
    },
  });

  const onSubmitSuccess = (data: Form[NombreComponente]Data) => {
    console.log({ data });
    // Lógica de procesamiento
  };

  return (
    <>
      <TextApp>Form[NombreComponente]</TextApp>
      <ViewThemed style={styles.container}>
        {/* Inputs generados con snippets */}

        {/* Botón de envío */}
        <ButtonApp label="Guardar" onPress={handleSubmit(onSubmitSuccess)} />
      </ViewThemed>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 10,
  },
});
```

## Ejemplo de Uso del Prompt

**Solicitud**: "Genera un componente CustomForm para registro de usuario con los campos: nombre, email, contraseña, fecha de nacimiento, género (select), y términos y condiciones (checkbox)"

**Respuesta Esperada**: Un componente completo que utilice:

- `appInputTextApp` para nombre
- `appInputEmailApp` para email
- `appInputPasswordApp` para contraseña
- `appInputDateApp` para fecha de nacimiento
- `appInputSelectApp` para género
- `appInputCheckboxApp` para términos y condiciones
- `appFormSubmit` para el botón de envío

## Consideraciones Adicionales

### Validaciones Personalizadas

- Implementa validaciones específicas según el contexto de negocio
- Utiliza mensajes de error descriptivos y en español
- Considera validaciones asíncronas si es necesario

### Accesibilidad

- Incluye labels descriptivos en todos los inputs
- Mantén la estructura semántica apropiada

### Performance

- Utiliza `defaultValues` para evitar re-renders innecesarios
- Considera el uso de `watch` solo cuando sea necesario

### Reutilización

- Diseña componentes que puedan ser fácilmente reutilizables
- Mantén la separación de responsabilidades clara

## Plantilla de Solicitud

```
Genera un componente CustomForm para [PROPÓSITO] con los siguientes campos:
- [CAMPO_1]: [TIPO] - [VALIDACIONES_ESPECÍFICAS]
- [CAMPO_2]: [TIPO] - [VALIDACIONES_ESPECÍFICAS]
- [CAMPO_N]: [TIPO] - [VALIDACIONES_ESPECÍFICAS]

Incluye [FUNCIONALIDADES_ADICIONALES] y considera [RESTRICCIONES_O_REQUERIMIENTOS].
```

Este prompt asegura que el componente generado siga las convenciones del proyecto y utilice eficientemente los snippets disponibles.
