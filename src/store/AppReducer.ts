import { IGlobalInfo, IBill } from '../Interfaces/AppInterface'
import { AppContext } from './BillsContext'

export interface AppContextProps {
  appState: IGlobalInfo
  bills: IBill[]
}

export const initialState: AppContextProps = {
  appState: {
    UserId: '',
    ProfileImageUri: '',
    UserDisplayName: '',
    Email: ''
  },
  bills: [
    {
      id: 1,
      date: new Date(),
      amount: 12345,
      description: 'One'
    },
    {
      id: 2,
      date: new Date(),
      amount: 1345,
      description: 'two'
    }
  ]
}

export type Action =
  | { type: 'FETCH_APP_DATA'; payload: IGlobalInfo }
  | {
      type: 'ADD_BILL'
      payload: { amount: number; billDate: Date; billDetails: string }
    }
  | {
      type: 'UPDATE_SITE_URL'
      payload: { fetchSiteUrl: string; fetchSiteTitle: string }
    }

export const appReducer = (
  state: AppContextProps,
  action: Action
): AppContextProps => {
  switch (action.type) {
    case 'FETCH_APP_DATA':
      return {
        ...state,
        appState: {
          UserId: action.payload.UserId,
          ProfileImageUri: action.payload.ProfileImageUri,
          UserDisplayName: action.payload.UserDisplayName,
          Email: action.payload.Email
        }
      }
    case 'ADD_BILL':
      return {
        ...state,
        bills: [
          ...state.bills,
          {
            id: state.bills.length + 1,
            date: action.payload.billDate,
            amount: action.payload.amount,
            description: action.payload.billDetails
          }
        ]
      }
    default:
      return state
  }
}
