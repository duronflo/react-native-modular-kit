import { StyleSheet, View, Text, Pressable, Switch } from 'react-native';
// import { AntDesign } from '@expo/vector-icons';
import {welcomeStyles, colorPalette} from '../styles';

// helper component for having a proper configuration
export default SectionElement = ({ type, title, result = "", onPress = () => { }, buttonDisabled = false }) => {

    const styles = StyleSheet.create(welcomeStyles());
    switch (type) {
        case "button":
            return (
                <Pressable style={styles.sectionButton} onPress={onPress} disabled={buttonDisabled ? true : false}>
                    <Text style={{ flex: 2 }}>{title}</Text>
                    <Text style={{ flex: 3, color: "grey" }}>{result}</Text>
                </Pressable>
            );
        case "info":
            return (
                <View style={styles.sectionInfo}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            );
        case "switch":
            return (
                <View style={styles.sectionSwitch}>
                    <Text style={{ flex: 2 }}>{title}</Text>
                    <Text style={{ flex: 3 }}>{String(result)}</Text>
                    <Switch 
                    style={{ flex: 1 }} 
                    value={result} 
                    onValueChange={onPress} 
                    trackColor= {{ false: "lightgrey", true: colorPalette.lightMintGreen }}
                    thumbColor={"grey"}
                    />
                </View>
            );
        default:
            return (
                <Text unkown elemnt-type />
            );
    }




};