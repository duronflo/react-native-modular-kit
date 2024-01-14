import { useNavigation, useRoute } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Modal, SectionList, Pressable } from 'react-native';
import { welcomeStyles } from './styles';
import SettingList from './components/SettingList';

const ModalBasic = ({ styles, modalState, text }) => {
   const {modalVisible, toggleModalVisible} = modalState();

  return (
    <Modal
      animationType="fade"
      visible={modalVisible}
      onRequestClose={toggleModalVisible}>
      <View style={styles.container}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{text}</Text>
          <Pressable
            style={[styles.button]}
            onPress={toggleModalVisible}>
            <Text style={styles.textStyle}>Hide Modal</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  )
}

export default function Welcome() {
  const styles = StyleSheet.create(welcomeStyles());
  const navigation = useNavigation();
  const route = useRoute();

  const [modalVisible, setModalVisible] = useState(false);

  const modalState = () => {
    return {
      modalVisible,
      toggleModalVisible : () => setModalVisible(() => !modalVisible)
    }
  }

  useEffect(() => {
    // Listen for changes to the navigation params
    if (route.params?.openModal) {
      setModalVisible(true);
      // Reset the navigation params
      navigation.setOptions({ params: { openModal: false } });
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <ModalBasic styles={styles}  modalState={modalState} text={"Ich baue einen Info-Screen"}/>
      <SettingList />
    </View>
  );
}


