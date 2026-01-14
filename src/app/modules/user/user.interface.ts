export interface IUser {

  id?: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  password: string;
  isPasswordChanged: boolean;
  role: 'student' | 'mentor' | 'admin';
  status: 'active' | 'blocked' | 'pending';
  isDeleted: boolean;

}
