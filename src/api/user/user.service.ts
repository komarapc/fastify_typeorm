import { UserModelType } from "./user.type.interface";
import UserRepository from "./user.repository";

const userRepo = new UserRepository();

class UserService {
  async index() {
    const user: UserModelType = {
      first_name: "Izmi",
      middle_name: "",
      last_name: "",
      email: "izmi@mail.com",
      user_name: "izmi",
      additional_info: {
        address: "Palembang",
        blood_type: "O",
        height: 172,
      },
    };
    return await new UserRepository(user).allUser();
  }
}
export default UserService;
