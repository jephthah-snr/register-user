import { autoInjectable, inject, delay } from "tsyringe"
import UserRepository from "src/Repositories/userRepository"
import User from "src/models/userModel"
import { userRegister } from "src/interfaces.ts/types"



@autoInjectable()
export default class UserService{
    constructor(
        @inject(delay(() => UserRepository)) private readonly userrepository:UserRepository
    ){}

    userRegister = async(payload: userRegister) => {
        const response = await this.userrepository.save(payload)
        return ({
            status:200,
            message: "user added successfully",
            data: response
        })
    }
}