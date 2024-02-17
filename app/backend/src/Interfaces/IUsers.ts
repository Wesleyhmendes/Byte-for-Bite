export default interface IUsers {
  id: number,
  username: string,
  profileImage: string,  
  role: string,
  email: string,
  password: string
}

export interface IUsersModel {
  findByEmail(email: IUsers['email']): Promise<IUsers | null>
  findByUsername(username: IUsers['username']): Promise<IUsers | null>
  createUser(newUser: Omit<IUsers, 'id'>): Promise<Omit<IUsers, 'id'>>
}
