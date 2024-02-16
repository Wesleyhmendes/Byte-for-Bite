export default interface IUsers {
  id: number,
  username: string,
  role: string,
  email: string,
  password: string
}

export interface IUsersModel {
  findByEmail(email: IUsers['email']): Promise<IUsers | null>
}