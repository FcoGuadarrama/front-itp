import {User} from "../user.model";

export class LoginResponse {
  access_token: string;
  expires_in: number;
  token_type: string;
  user: User;
}
