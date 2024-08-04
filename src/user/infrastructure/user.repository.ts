/* eslint-disable @typescript-eslint/no-unused-vars */
import { User } from "../domain/User";
import { IUserRepository } from "../application/user.repository.interface";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserRepositoryMock implements IUserRepository {
  users = [
    new User(1, "foo@bar", "foo"),
    new User(2, "bar@foo", "bar"),
    new User(3, "baz@qux", "baz"),
  ];

  getAllUsers(): User[] {
    return this.users;
  }

  updateUserEmail(user: User, email: string): User {
    // search for the user in the users array
    const userIndex = this.users.findIndex((user) => user.id === user.id);

    // if the user is not found, throw an error
    if (userIndex === -1) throw new Error("User not found");

    // update the user's email
    this.users[userIndex].email = email;

    // return the updated user
    return this.users[userIndex];
  }

  isEmailAvailable(email: string): boolean {
    // search for the email in the users array
    const user = this.users.find((user) => user.email === email);

    // if the email is not found, return true
    if (!user) return true;

    // if the email is found, return false
    return false;
  }

  getUserByToken(token: string): User {
    const tokenInt = parseInt(token);

    // search for the user in the users array
    const user = this.users.find((user) => user.id === tokenInt);

    // if the user is not found, throw an error
    if (!user) throw new Error("User not found");

    // if the user is found, return the user
    return user;
  }
}
