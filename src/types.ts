// Store
export interface RootState {
  langage: LangageState
  user: UserState
}

export interface LangageState {
  langage: string
}

export interface UserState {
  user: UserFields
}

export interface UserFields {
  country: string
  city?: string
  street?: string
  email: string
  phone?: string
  firstname: string
  lastname: string
  title?: string
}

// General
export interface ArrayToMap {
  [key: string]: any
}
