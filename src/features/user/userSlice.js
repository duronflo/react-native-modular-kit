import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { PENDING, REQUESTING, SUCCESS, ERROR } from "../../utilities/helper"

const name = 'user'

const initialState = {
    user: {},
    settings: {
        mainCurrency: "EUR",
        status: PENDING,
    }
}

const reducers = {
    setMainCurrency: (state, { payload }) => {
        const { value } = payload;
        state.settings.mainCurrency = value
    },
    setStatus: (state, { payload }) => {
        const { value } = payload;
        state.settings.status = value
    }
}

const extraReducers = (builder) => {
    builder
        .addCase(submitDefaultCurrency.pending, (state) => {
            state.settings.status = REQUESTING;
        })
        .addCase(submitDefaultCurrency.fulfilled, (state, action) => {
            state.settings.status = SUCCESS
            state.settings.mainCurrency = action.payload;
        })
        .addCase(submitDefaultCurrency.rejected, (state) => {
            state.settings.status = ERROR
        })
}

const slice = createSlice({
    name,
    initialState,
    reducers,
    extraReducers
})

export const submitDefaultCurrency = createAsyncThunk(
    "user/submitMainCurrencyAsync",
    async (value) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return value;
    }
)

export const {
    setMainCurrency,
    setStatus
} = slice.actions

export default slice.reducer