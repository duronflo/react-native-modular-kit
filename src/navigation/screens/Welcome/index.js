import { useNavigation } from '@react-navigation/native';
import {useState} from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Text, View, TouchableOpacity, SectionList, Pressable } from 'react-native';
import {welcomeStyles} from './styles';
import SectionListElement from './components/SectionListElement.js';

import { useDefaultCurrency } from '../../../features/user/hooks';


export default function Welcome() {
  const styles = StyleSheet.create(welcomeStyles());
  const navigation = useNavigation();
  const { mainCurrency, setMainCurrency } = useDefaultCurrency();
  const [ design, setDesign] = useState(true);

  const profileScreenConfig = [{
    title: "Settings",
    data: [
      {
        type: "button",
        title: "Currency",
        result: mainCurrency,
        actionHandler: () =>
          navigation.navigate('settingsMainCurrency', {})
      },
      {
        type: "button",
        title: "Language",
        result: "System",
        buttonDisabled: true,
        actionHandler: () => { }
      },
      {
        type: "button",
        title: "Design",
        result: "System",
        buttonDisabled: true,
        actionHandler: () => { }
      },

    ],
  },
  {
    title: "myApp",
    data: [{
      type: "info",
      title: "developer: duronflo",
      buttonDisabled: true,
    },
    {
      type: "switch",
      title: "Design",
      result: design, 
      buttonDisabled: true,
      actionHandler: () => setDesign(!design)
    }]
  }
  ]
  return (
    <View style={styles.container}>
      <SectionList
        sections={profileScreenConfig}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => {
          return (
            <SectionListElement type={item.type} title={item.title} result={item.result} onPress={item.actionHandler} buttonDisabled={item.buttonDisabled} />
          )
        }}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionTitle}>{title}</Text>
        )}
      />
    </View>
  );
}