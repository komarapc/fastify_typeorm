import { ContactInfoEntity } from "./../../entities/fastify_typeorm_test/contact-info";
import { UserModelType } from "./user.type.interface";
import { UserEntity } from "./../../entities/fastify_typeorm_test/user.entity";
import { ResponseData } from "./../../../app/global/response-data";
import { user } from "../../../data/user.json";
import { getRepository } from "typeorm";
import { userSelectModel } from "./user.model";

class UserRepository {
  private userEntity = UserEntity;
  private contactEntity = ContactInfoEntity;
  private userModel?: UserModelType;

  constructor(userModel?: UserModelType) {
    this.userModel = userModel;
  }
  async allUser() {
    const all_user = await this.userEntity.find({ relations: ["contact"] });
    const response = new ResponseData(true, 200, "Success", {
      users: all_user,
    });
    return response;
  }

  async store() {
    const create_user = await this.userEntity
      .create({ ...this.userModel })
      .save();
    const response = new ResponseData(true, 200, "Success", {
      users: create_user,
    });
    return create_user;
  }
}

export default UserRepository;
