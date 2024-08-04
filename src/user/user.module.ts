import { Module } from "@nestjs/common";
import { UserController } from "./infrastructure/user.controller";
import { UserService } from "./application/user.service";
import { UserRepositoryMock } from "./infrastructure/user.repository";

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    UserRepositoryMock,
    {
      provide: UserService,
      useFactory: (userRepository: UserRepositoryMock) => {
        return new UserService(userRepository);
      },
      inject: [UserRepositoryMock],
    },
  ],
})
export class UserModule {}
