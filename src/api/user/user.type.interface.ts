export type UserModelType = {
  first_name?: string;
  middle_name?: string;
  last_name?: string;
  user_name?: string;
  email?: string;
  additional_info?: {
    address: string;
    blood_type: string;
    height: number;
  };
};
