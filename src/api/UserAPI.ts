import BaseAPI from './BaseAPI';

export interface UserData {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

export interface UserChangePassword {
  oldPassword: string;
  newPassword: string;
}

export interface SearchUser {
  login: string;
}

export class UserAPI extends BaseAPI {
  constructor() {
    super('/user');
  }

  changeUser(data: UserData) {
    return this.http.put('/profile', { data });
  }

  changeAvatar(data: FormData) {
    return this.http.put('/profile/avatar', {
      data,
      // headers: {
      //   // xhr.setRequestHeader('Content-Type', 'application/json');
      //   'Content-Type': 'multipart/form-data',
      // },
    });
  }

  changePassword(data: UserChangePassword) {
    return this.http.put('/password', { data });
  }

  getUserById(id: number) {
    return this.http.get(`/user/${id}`);
  }

  searchUser(data: SearchUser) {
    return this.http.post('/user/search', { data });
  }

  create = undefined;

  update = undefined;

  read = undefined;

  delete = undefined;
}
export default new UserAPI();
