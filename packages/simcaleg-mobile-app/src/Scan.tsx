import React, { useState } from "react";
import {
  Button,
  Image,
  Alert,
  PermissionsAndroid,
  Platform,
} from "react-native";
import DocumentScanner from "react-native-document-scanner-plugin";

type Props = {};

const Scan = (props: Props) => {
  const [scannedImage, setScannedImage] = useState("");

  const scanDocument = async () => {
    // prompt user to accept camera permission request if they haven't already
    if (
      Platform.OS === "android" &&
      (await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA
      )) !== PermissionsAndroid.RESULTS.GRANTED
    ) {
      Alert.alert(
        "Error",
        "User must grant camera permissions to use document scanner."
      );
      return;
    }
    // start the document scanner
    const { scannedImages } = await DocumentScanner.scanDocument();

    // get back an array with scanned image file paths
    if (scannedImages && scannedImages.length > 0) {
      // set the img src, so we can view the first scanned image
      setScannedImage(scannedImages[0]);
    }
  };

  return (
    <>
      <Image source={{ uri: scannedImage }} />
      <Button title="Scan" onPress={scanDocument} />
    </>
  );
};

export default Scan;
