export type AuthResponseType = {
    token: string
    name: string
    email: string
    expiration: number
    roles: string[]
}