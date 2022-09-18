import { ErrorResponse } from "src/helpers/error";
import { createValidationError } from "../helpers/validate";
import { ObjectLiteral } from "../interfaces.ts/object-literal";
import { FastifyReply, FastifyRequest } from "fastify";
import httpStatus from "http-status";
import Validator from "validatorjs";

const validate = (rules: ObjectLiteral, validationMessages?: ObjectLiteral) => {
  return (request: FastifyRequest, reply: FastifyReply, done: any) => {
    const validation = new Validator(request.body, rules, validationMessages);

    const errors: any = validation.errors.all();

    if (validation.fails()) {
      return reply
        .code(httpStatus.BAD_REQUEST)
        .send(
          ErrorResponse("Your data is invalid", createValidationError(errors))
        );
    }

    done();
  };
};

export default validate;
