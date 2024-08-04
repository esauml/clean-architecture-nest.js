import { User } from "../domain/User";

export interface IUserRepository {
  updateUserEmail(user: User, email: string): User;
  isEmailAvailable(email: string): boolean;
  getUserByToken(token: string): User;
  getAllUsers(): User[];
}
