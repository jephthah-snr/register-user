import { autoInjectable, inject, delay } from "tsyringe"
import UserRepository from "src/Repositories/userRepository"
import User from "src/models/userModel"
import { userRegister } from "src/interfaces.ts/types"
import AppError from "src/helpers/error"



@autoInjectable()
export default class UserService{
    constructor(
        @inject(delay(() => UserRepository)) private readonly userrepository:UserRepository
    ){}

    userRegister = async(payload: userRegister) => {
        // if((!payload.twitter) || (!payload.facebook)){
        //     console.log(payload.instagram)
        //     throw new AppError(401, "You must choose at least one social media platform.")
        // }
        if(payload.facebook || payload.twitter ){
            console.log("available")
        }

        const response = await this.userrepository.save(payload)
        return ({
            status:200,
            message: "user added successfully",
            data: response
        })
    }
}