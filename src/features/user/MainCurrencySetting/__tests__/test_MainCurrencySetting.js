// LoginForm.test.js
import React from 'react';
import { screen, fireEvent } from '@testing-library/react-native';
import { renderWithRedux} from '../../../../utilities/test-utils';
import MainCurrencyScreen from '../../MainCurrencySetting';
import { initialState } from "../../userSlice"

jest.mock(
    '@expo/vector-icons',
    () => 'Entypo',
  );

describe('Set default currency', () => {
    test('submits form data on button press to a redux state',  () => {

        const { store } = renderWithRedux(<MainCurrencyScreen />, { initialState })

        const testvec = "USD"
        // Simulate user input
        fireEvent.changeText(screen.getByPlaceholderText('currency'), testvec);

        // Simulate button press
        fireEvent.press(screen.getByText("Submit"));

        const defaultCurrency = store.getState().user.settings.mainCurrency;
        
        expect(defaultCurrency).toBe(testvec)
    });

});