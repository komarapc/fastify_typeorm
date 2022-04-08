import { UserModelType } from "./user.type.interface";
export class UserModel {
  public first_name?: string;
  public middle_name?: string;
  public last_name?: string;
  public user_name?: string;
  public email?: string;
  public additional_info?: {
    address: string;
    blood_type: string;
    height: number;
  };

  constructor({ ...data }: UserModelType) {
    this.first_name = data.first_name;
    this.middle_name = data.middle_name;
    this.last_name = data.last_name;
    this.user_name = data.user_name;
    this.email = data.email;
    this.additional_info = data.additional_info;
  }
}

export const userSelectModel = {
  first_name: "first_name",
  middle_name: "middle_name",
  last_name: "last_name",
  email: "email",
  user_name: "user_name",
  additional_info: "additional_info",
};
