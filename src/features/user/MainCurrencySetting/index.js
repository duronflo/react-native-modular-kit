import {  StyleSheet, View, Text, TextInput, Pressable } from 'react-native'
import formStyles from './styles'
import { useDefaultCurrency } from '../hooks'
import { useDispatch } from "react-redux";
import { submitDefaultCurrency } from '../userSlice';


const Form = ({ disabled = false }) => {
  const styles = StyleSheet.create(formStyles())
  const { mainCurrency, setMainCurrency } = useDefaultCurrency()
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.form}></View>

      <TextInput
        key={'currency'}
        placeholder='currency'
        value={mainCurrency}
        style={{ borderWidth: 1, borderColor: 'black', borderRadius: 4, padding: 15 }}
        onChangeText={value => setMainCurrency(value)}
      />

      <Pressable
        title="setDefaultCurrency"
        onPress={() => dispatch(submitDefaultCurrency(mainCurrency))}
      >
        <Text>Submit</Text>
      </Pressable>
    </View>
  )

}

export default Form