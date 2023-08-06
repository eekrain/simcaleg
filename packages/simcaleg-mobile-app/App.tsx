import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useAuth0, Auth0Provider } from "react-native-auth0";
import Home from "./src/Home";
import { TrpcProvider } from "./src/utils/trpc";

export default function App() {
  return (
    <Auth0Provider
      domain={"simcaleg.au.auth0.com"}
      clientId={"vR6PC0hhSKOW1vLFY5VJUwHUpEdQxpXM"}
    >
      <TrpcProvider>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <Home />
        </View>
      </TrpcProvider>
    </Auth0Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
