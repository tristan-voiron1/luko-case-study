import * as ExpoImagePicker from "expo-image-picker";

export type ImageInfo = {
  uri: string;
  width: number;
  height: number;
  type?: "image" | "video";
  base64?: string;
};

export type ImagePickerResult =
  | {
      cancelled: true;
    }
  | ({
      cancelled: false;
    } & ImageInfo)
  | undefined;

const takePhoto: () => Promise<ImagePickerResult> = async () => {
  const { granted } = await ExpoImagePicker.requestCameraPermissionsAsync();
  // not supported on iOS simulator, you can use MediaLibrary with pickImage method instead
  if (granted) {
    const pickerResult = await ExpoImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    return pickerResult;
  }
  return undefined;
};

const pickImage: () => Promise<string> = async () => {
  // No permissions request is necessary for launching the image library
  let result = await ExpoImagePicker.launchImageLibraryAsync({
    mediaTypes: ExpoImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (!result.canceled) {
    return result.assets[0].uri;
  }
};

export const ImagePicker = {
  takePhoto,
  pickImage,
};
