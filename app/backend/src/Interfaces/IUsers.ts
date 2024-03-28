export default interface IUsers {
  id: number,
  username: string,
  profileImage: string,  
  role: string,
  email: string,
  password: string
}

export interface IGUsers {
  id: number,
  username: string,
  profileImage: string,  
  role: string,
  email: string,
  emailVerified: string,
}

export interface IUsersModel {
  findByEmail(email: IUsers['email']): Promise<IUsers | null>
  findByUsername(username: IUsers['username']): Promise<IUsers | null>
  createUser(newUser: Omit<IUsers, 'id'>): Promise<IUsers>
  createGoogleUser(newUser: Omit<IGUsers, 'id' | 'emailVerified'>): Promise<Omit<IGUsers, 'emailVerified'>>
}
