import { StyleSheet, View } from "react-native";
import { TextApp } from "@/components/texts/TextApp";
import { Link } from "expo-router";
import { useForm } from "react-hook-form";
import InputTextApp from "@/components/forms/inputText/InputTextApp";
import { ViewThemed } from "@/components/containers/ViewThemed";

export default function TabOneScreen() {
  const {
    control,
    formState: { errors },
    setValue,
    handleSubmit,
  } = useForm<{ name: string }>({
    defaultValues: {
      name: "",
    },
  });

  return (
    <ViewThemed style={styles.container}>
      <TextApp style={styles.title}>Tab One</TextApp>
      <Link href="/modal">
        <TextApp>Go to modal</TextApp>
      </Link>
      <View style={{ gap: 10 }}>
        <InputTextApp
          formControl={{
            control: control,
            name: "name",
            rules: { required: "The input field is required" },
          }}
          label={"Nombre"}
          error={errors.name?.message}
          containerStyle={{ minWidth: 250 }}
          clearInput={() => setValue("name", "")}
        />
      </View>
    </ViewThemed>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
