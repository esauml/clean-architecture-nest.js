import { Controller, Get, Post } from "@nestjs/common";
import { UserService } from "../application/user.service";
import { User } from "../domain/User";

@Controller("users")
export class UserController {
  constructor(private readonly appService: UserService) {}

  @Post()
  updateEmail(): User {
    // mock
    const token = "1";
    const email = "esau@esau.com";

    const isValid = true;
    if (!isValid) {
      throw new Error("Invalid token");
    }

    return this.appService.updateEmail(token, email);
  }

  @Get()
  getAllUsers(): User[] {
    return this.appService.getAllUsers();
  }
}
