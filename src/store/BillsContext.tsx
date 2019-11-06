import * as React from 'react'
import { Action, initialState, appReducer, AppContextProps } from './AppReducer'
import { useReducer, createContext } from 'react'

export const AppContext = createContext(initialState)
export const AppDispatch = createContext((() =>
  console.log('in 0')) as React.Dispatch<Action>)

export const BillContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(appReducer, initialState)
  return (
    <AppDispatch.Provider value={dispatch}>
      <AppContext.Provider value={state}>{children}</AppContext.Provider>
    </AppDispatch.Provider>
  )
}

// export const useDispatch = () => {
//   return
// }

// export const useGlobalState = () => {
//   const state = React.useContext(AppContext)
//   return state
// }
