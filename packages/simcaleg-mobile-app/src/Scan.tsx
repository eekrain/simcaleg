import { useEffect, useState } from "react";
import DocumentScanner from "react-native-document-scanner-plugin";
import { Button, Image, View } from "react-native";
import MlkitOcr, { MlkitOcrResult } from "react-native-mlkit-ocr";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {};

const Scan = (props: Props) => {
  const [scannedImage, setScannedImage] = useState<any>();
  const [result, setResult] = useState<MlkitOcrResult | undefined>();

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

  const ocrProcess = async () => {
    setResult(await MlkitOcr.detectFromUri(scannedImage));
  };

  useEffect(() => {
    console.log("🚀 ~ file: App.tsx:31 ~ useEffect ~ result:", result);
  }, [result]);

  return (
    <SafeAreaView>
      <View>
        <Button title="Scan KTP" onPress={scanDocument} />
        <Button title="OCR" onPress={ocrProcess} />
        <View>
          {scannedImage && (
            <Image
              resizeMode="contain"
              style={{ width: "100%", height: "50%" }}
              source={{ uri: scannedImage }}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Scan;
