export interface IAuthSignIn {
  email: string;
  password: string;
}
export interface IAuthSignUp extends IAuthSignIn {
  name: string;
  urlAvatar: string;
}
