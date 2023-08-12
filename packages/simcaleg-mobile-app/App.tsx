import { StatusBar } from "expo-status-bar";
import {
  Alert,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useAuth0, Auth0Provider } from "react-native-auth0";
import Home from "./src/Home";
import { TrpcProvider } from "./src/utils/trpc";
import Scan from "./src/Scan";
import { useEffect } from "react";
import NewScan from "./src/NewScan";

export default function App() {
  return <NewScan />;
}

// export default function App() {
//   const permission = async () => {
//     // prompt user to accept camera permission request if they haven't already
//     if (
//       Platform.OS === "android" &&
//       (await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.CAMERA
//       )) !== PermissionsAndroid.RESULTS.GRANTED
//     ) {
//       Alert.alert(
//         "Error",
//         "User must grant camera permissions to use document scanner."
//       );
//       return;
//     }
//   };
//   useEffect(() => {
//     permission();
//   }, []);
//   return (
//     <Auth0Provider
//       domain={"simcaleg.au.auth0.com"}
//       clientId={"vR6PC0hhSKOW1vLFY5VJUwHUpEdQxpXM"}
//     >
//       <TrpcProvider>
//         <View style={styles.container}>
//           <StatusBar style="auto" />
//           <Home />
//           <Scan />
//         </View>
//       </TrpcProvider>
//     </Auth0Provider>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
