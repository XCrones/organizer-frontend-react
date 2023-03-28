export interface IAuthSignIn {
  email: string;
  password: string;
  comparePassword: string;
}
export interface IAuthSignUp extends IAuthSignIn {
  name: string;
  urlAvatar: string;
}
