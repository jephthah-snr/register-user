import { FastifyPluginAsync } from "fastify"
import { AuthController } from 'src/controller/userController';
import { container } from 'tsyringe';

const authcontroller = container.resolve(AuthController)

const registeRoutes: FastifyPluginAsync = async(fastify) => {
    fastify.route({
        url: "/register",
        method: "POST",
        preHandler: [],
        handler: authcontroller.userSignup
    })
}
export {registeRoutes}