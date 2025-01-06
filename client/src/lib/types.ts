export type TServer = TServerEssentials & {
    id: number
}

export type TServerEssentials = {
    identityUserId: string
    imageUrl: string
    name: string
}

export type TUser = {
    id: number
    address: string
    email: string
    firstName: string
    lastName: string
    identityUserId: string
    roles: string[]
    userName: string
}
