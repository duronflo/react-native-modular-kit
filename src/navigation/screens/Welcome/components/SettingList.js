import { StyleSheet, View, Text, Pressable, SectionList, Switch } from 'react-native';
import { useState } from 'react';
// import { AntDesign } from '@expo/vector-icons';
import { welcomeStyles, colorPalette } from '../styles';
import { useNavigation } from '@react-navigation/native';
import SectionListElement from './SectionListElement.js';
import { useDefaultCurrency } from '../../../../features/user/hooks';

// helper component for having a proper configuration
export default SettingList = () => {

    const styles = StyleSheet.create(welcomeStyles());
    const navigation = useNavigation();
    const { mainCurrency, setMainCurrency } = useDefaultCurrency();
    const [design, setDesign] = useState(true);

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
                buttonDisabled: false,
                actionHandler: () => navigation.setParams({ openModal: true })
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
        <SectionList
            sections={profileScreenConfig}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => {
                return (
                    <SectionListElement
                        type={item.type}
                        title={item.title}
                        result={item.result}
                        onPress={item.actionHandler}
                        buttonDisabled={item.buttonDisabled} />
                )
            }}
            renderSectionHeader={({ section: { title } }) => (
                <Text style={styles.sectionTitle}>{title}</Text>
            )}
        />)



};