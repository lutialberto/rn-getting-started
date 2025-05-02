import { type ErrorBoundaryProps } from "expo-router";
import { ViewThemed } from "../ViewThemed";
import { TextApp } from "@/components/texts/TextApp";
import ButtonApp from "@/components/buttons/button/ButtonApp";
import { useTextStyles } from "@/components/texts/useTextStyles";

/**
 * @description Fallback component to wrap the entire app when an error occurs.
 * It displays the error message and a button to retry.
 * @example
 * <Try catch={MainFallbackApp}>
 *  {...}
 * </Try>
 * @param {ErrorBoundaryProps} props - The error boundary props.
 * @returns {JSX.Element} - The fallback component.
 */
export default function MainFallbackApp({ error, retry }: ErrorBoundaryProps) {
  const { textStyles } = useTextStyles();
  return (
    <ViewThemed
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
      }}
    >
      <TextApp style={textStyles.screenTitle}>Ocurrió un error</TextApp>
      <TextApp>{error.message}</TextApp>
      <ButtonApp label="Volver a la home" onPress={retry} />
    </ViewThemed>
  );
}
