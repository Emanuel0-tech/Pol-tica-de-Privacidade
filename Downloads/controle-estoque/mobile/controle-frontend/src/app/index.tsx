import { Text, View } from "react-native";
import { Stack } from "expo-router";
import  Button from "../components/Button";

export default function Index() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#041A25"
        }}
      >
        <Text>Edit app/index.tsx to edit this screen.</Text>
        <Button title="Login" onPress={undefined} />
      </View>
    </>
  );
}
