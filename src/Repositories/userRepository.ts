import User from "src/models/userModel";
import { autoInjectable } from "tsyringe";

@autoInjectable()
export default class UserRepository{
    async save(item: Partial<User>): Promise<User> {
        return await User.query().insert({
            first_name: item.first_name,
            last_name: item.last_name,
            phone: item.phone,
            country: item.country,
            twitter: item.twitter,
            facebook: item.facebook,
            instagram: item.instagram
        });
      };
}