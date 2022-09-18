import { FastifyReply, FastifyRequest } from "fastify";
import UserService from "src/Services/userService";
import { autoInjectable, delay, inject } from "tsyringe";
import httpStatus from "http-status";
import { userRegister } from "src/interfaces.ts/types";

@autoInjectable()
export class AuthController {
  constructor(
    @inject(delay(() => UserService)) private readonly authService: UserService
  ) {}
  userSignup = async (
    req: FastifyRequest<{
      Body: userRegister;
    }>,
    res: FastifyReply
  ) => {
    try {
      const response = await this.authService.userRegister(req.body);
      return res.status(httpStatus.OK).send(response);
    } catch (error: any) {
      return res
        .status(error.statusCode || 500)
        .send({ message: error.message });
    }
  };
}