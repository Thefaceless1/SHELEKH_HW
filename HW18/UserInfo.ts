interface IUserInfo {
    id: number,
    userName: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    phone: string,
    userStatus: number
}
export class UserInfo implements IUserInfo{
    public id: number
    public userName: string
    public firstName: string
    public lastName: string
    public email: string
    public password: string
    public phone: string
    public userStatus: number
   constructor(id: number, userName: string, firstName: string, lastName: string, email: string, password: string, phone: string, userStatus: number) {
        this.id = id
        this.userName = userName
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.password = password
        this.phone = phone
        this.userStatus = userStatus
   }
}