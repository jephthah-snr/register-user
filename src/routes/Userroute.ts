import { FastifyPluginAsync } from "fastify"
import { AuthController } from 'src/controller/userController';
import { container } from 'tsyringe';
import signUpValidation from "src/validation/user";
import validate from "src/Middleware/validate";
import Methods from "src/types/enums/method";

const authcontroller = container.resolve(AuthController)

const registeRoutes: FastifyPluginAsync = async(fastify) => {
    fastify.route({
        url: "/register",
        method: Methods.POST,
        preHandler: [validate(signUpValidation)],
        handler: authcontroller.userSignup
    })
}
export {registeRoutes}