import { useEffect, useState } from "react";
import DocumentScanner from "react-native-document-scanner-plugin";
import { Button, Image, SafeAreaView } from "react-native";

export default function App() {
  const [scannedImage, setScannedImage] = useState<any>();

  const scanDocument = async () => {
    // start the document scanner
    const { scannedImages } = await DocumentScanner.scanDocument();

    // check if undefined
    if (scannedImages) {
      // get back an array with scanned image file paths
      if (scannedImages.length > 0) {
        // set the img src, so we can view the first scanned image
        setScannedImage(scannedImages[0]);
      }
    }
  };

  // useEffect(() => {
  //   // call scanDocument on load
  //   scanDocument();
  // }, []);

  return (
    <>
      <SafeAreaView>
        {scannedImage && (
          <Image
            resizeMode="contain"
            style={{ width: "100%", height: "50%" }}
            source={{ uri: scannedImage }}
          />
        )}
        <Button title="Scan KTP" onPress={scanDocument} />
      </SafeAreaView>
    </>
  );
}
