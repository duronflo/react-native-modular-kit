import { useDispatch, useSelector } from 'react-redux'
import {setMainCurrency, setStatus, resetStatus} from './userSlice'

export const useDefaultCurrency = (currency) => {
  const dispatch = useDispatch()
  const mainCurrency = useSelector(state => state.user.settings.mainCurrency)

  return {
    mainCurrency,
    setMainCurrency: (value) => { 
      return dispatch(setMainCurrency({ value }))
    },
  }
}

export const useStatus = (currency) => {
  const dispatch = useDispatch()
  const status = useSelector(state => state.user.settings.status)

  return {
    status,
    setStatus: (value) => { 
      return dispatch(setStatus({ value }))
    },
  }
}
