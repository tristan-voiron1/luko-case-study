import React, { useState } from "react";
import { StyleSheet, View, Modal, Alert } from "react-native";
import Button from "../components/Button";
import { InventoryItem, RootTabScreenProps } from "../navigation/types";
import { colors } from "../theme/colors";
import { TextInputWithTitle } from "../components/TextInputWithTitle";
import PhotoButton from "../components/PhotoButton";
import { ImageInfo, ImagePicker } from "../sdk/ImagePicker";
import Photo from "../components/Photo";

export default function AddItemScreen({
  navigation,
}: RootTabScreenProps<"AddItemScreen">) {
  const [modalVisible, setModalVisible] = useState(false);
  const [item, setItem] = useState<InventoryItem>({
    name: "",
    value: "",
  });

  const setPickedPhoto = async () => {
    const selectedPhoto = await ImagePicker.pickImage();
    setItem({ ...item, photo: selectedPhoto });
    setModalVisible(false);
  };

  const setTakenPhoto = async () => {
    const selectedPhoto = await ImagePicker.takePhoto();
    if (selectedPhoto && (selectedPhoto as ImageInfo).uri) {
      setItem({ ...item, photo: (selectedPhoto as ImageInfo).uri });
      setModalVisible(false);
    }
  };

  const onSubmit = () => {
    console.log("Submit");
  };

  const isDisabled = item.value && item.photo && item.name ? false : true;

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Button
              title="Pick from library"
              onPress={() => setPickedPhoto()}
            />
            <Button title="Take a photo" onPress={() => setTakenPhoto()} />
          </View>
        </View>
      </Modal>
      <View style={styles.buttonsContainer}>
        <Button title="Cancel" onPress={() => navigation.goBack()} />
        <Button title="Add" disabled={isDisabled} onPress={() => onSubmit()} />
      </View>
      <View style={styles.photoContainer}>
        {!item.photo ? (
          <PhotoButton
            title="Add photo"
            onPress={() => setModalVisible(true)}
          />
        ) : (
          <Photo
            image={item.photo}
            onPress={() => setItem({ ...item, photo: undefined })}
          />
        )}
      </View>
      <View style={styles.textContainer}>
        <TextInputWithTitle
          title="Name"
          placeholder="Bracelet"
          text={item.name}
          onChangeText={(value: string) => setItem({ ...item, name: value })}
        />
        <TextInputWithTitle
          title="Value"
          placeholder="700€"
          text={item.value as string}
          onChangeText={(value: string) => setItem({ ...item, value: value })}
        />
        <TextInputWithTitle
          title="Description"
          placeholder="Optional"
          isMultiline={true}
          text={item.description as string}
          onChangeText={(value: string) =>
            setItem({ ...item, description: value })
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.background,
    paddingTop: 10,
  },
  buttonsContainer: {
    width: "100%",
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "transparent",
  },
  photoContainer: {
    alignItems: "center",
    marginTop: 69,
  },
  textContainer: {
    flex: 1,
    marginTop: 60,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    height: "30%",
    justifyContent: "space-between",
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
