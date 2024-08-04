import { Injectable } from "@nestjs/common";
import { User } from "../domain/User";
import { IUserRepository } from "./user.repository.interface";

/**
 * See {@link UserRepositoryMock} for the implementation of the IUserRepository interface
 */
@Injectable()
export class UserService {
  constructor(private readonly userPersistance: IUserRepository) {}

  updateEmail(token: string, email: string): User {
    // get user from token
    const user = this.userPersistance.getUserByToken(token);

    // check that no user user has the email
    const isEmailAvailable = this.userPersistance.isEmailAvailable(email);

    if (!isEmailAvailable) {
      throw new Error("Email is already taken");
    }

    // update user email
    return this.userPersistance.updateUserEmail(user, email);
  }

  getAllUsers(): User[] {
    return this.userPersistance.getAllUsers();
  }
}
