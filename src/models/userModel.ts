import { Model, Pojo } from "objection";

export default class User extends Model {
  static tableName = "users";

  id!: number;
  first_name!: string;
  last_name!: string;
  email!: string;
  phone!: string;
  //password?: string; if password is required...
  country!: string;
  twitter?: string;
  facebook?: string;
  instagram?: string;


  // async $beforeInsert() {
  //   this.password = await hashPassword(this.password);
  // }


  // $formatJson(json: Pojo) {
  //   json = super.$formatJson(json);
  //   delete json.password;
  //   return json;
  // }

  userData() {
    return {
      id: this.id,
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      phone: this.phone,
      country: this.country,
      twitter: this.twitter,
      facebook: this.facebook,
      instagram: this.instagram
    };
  }
}
