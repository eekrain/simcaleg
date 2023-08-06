import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { useAuth0, Auth0Provider } from "react-native-auth0";
import { trpc } from "./utils/trpc";
import { useEffect } from "react";

const Home = () => {
  const { authorize, clearSession, user, error, getCredentials } = useAuth0();

  const onLogin = async () => {
    try {
      await authorize(
        { scope: "openid profile email" },
        { customScheme: "auth0.com.auth0samples" }
      );
      let credentials = await getCredentials();
      Alert.alert("AccessToken: " + credentials.accessToken);
    } catch (e) {
      console.log(e);
    }
  };

  const loggedIn = user !== undefined && user !== null;

  const onLogout = async () => {
    try {
      await clearSession({ customScheme: "auth0.com.auth0samples" });
    } catch (e) {
      console.log("Log out cancelled");
    }
  };

  const tes = trpc.test.getUser.useQuery("kontol");

  useEffect(() => {
    console.log("🚀 ~ file: Home.tsx:33 ~ Home ~ tes:", tes);
  }, [tes.data]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}> Auth0Sample - Login </Text>
      {user && <Text>You are logged in as {user.name}</Text>}
      {!user && <Text>You are not logged in</Text>}
      {error && <Text>{error.message}</Text>}
      <Button
        onPress={loggedIn ? onLogout : onLogin}
        title={loggedIn ? "Log Out" : "Log In"}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  header: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});
