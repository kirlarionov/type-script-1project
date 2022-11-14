export interface IAddress {
   street: string
   city: string
   zipcode: string
}

export interface IUser {
   id: number
   name: string
   email: string
   phone: string | number
   website: string
   address: IAddress
}

export interface ITodo {
   id: number
   title: string
   completed: boolean
}
