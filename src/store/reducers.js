import { combineReducers } from 'redux'
import user from "../features/user/userSlice"

const rootReducer = combineReducers({
    user,
})

export default rootReducer

