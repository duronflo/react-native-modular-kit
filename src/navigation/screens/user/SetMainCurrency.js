import React from 'react'
import { View, ScrollView, SafeAreaView, ActivityIndicator } from 'react-native'
import MainCurrencySetting from "../../../features/user/MainCurrencySetting"
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { PENDING, REQUESTING, SUCCESS, ERROR } from '../../../utilities/helper';
import { useStatus } from '../../../features/user/hooks';
import styles from './styles';

// top level display component only - declares a view that will be part of navigation
const SetMainCurrencyScreen = () => {
  const navigation = useNavigation();
  const { status, setStatus } = useStatus();

  // use side effect to navigate to previous screen and reset status of status views
  useEffect(() => {
    if (status === SUCCESS) {
      navigation.goBack();
      setStatus(PENDING);
    }
  }, [status])

  if (status === REQUESTING || status === SUCCESS) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    )
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <MainCurrencySetting />
      </ScrollView>
    </SafeAreaView>
  )
}

export default SetMainCurrencyScreen