import { History, Location } from 'history'
import { match, StaticContext } from 'react-router'

export interface IGlobalInfo {
  UserId: string
  ProfileImageUri: string
  UserDisplayName: string
  Email: string
}

export interface IBill {
  id: number
  date: Date
  amount: number
  description: string
}

export interface HistoryProps {
  history?: History
  location?: Location
  match?: match
  staticContext?: StaticContext
}
