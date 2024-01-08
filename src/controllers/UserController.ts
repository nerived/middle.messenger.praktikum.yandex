import API, {
  UserAPI,
  UserData,
  UserChangePassword,
  SearchUser,
} from '../api/UserAPI';

export class UserController {
  private readonly api: UserAPI;

  constructor() {
    this.api = API;
  }

  async changeUser(data: UserData) {
    try {
      await this.api.changeUser(data);
    } catch (e: any) {
      console.error(e);
    }
  }

  async changeAvatar(data: FormData) {
    try {
      await this.api.changeAvatar(data);
    } catch (e: any) {
      console.error(e.message);
    }
  }

  async changePassword(data: UserChangePassword) {
    try {
      await this.api.changePassword(data);
    } catch (e: any) {
      console.error(e.message);
    }
  }

  async getUserById(id: number) {
    try {
      await this.api.getUserById(id);
    } catch (e: any) {
      console.error(e.message);
    }
  }

  async searchUser(data: SearchUser) {
    try {
      await this.api.searchUser(data);
    } catch (e: any) {
      console.error(e.message);
    }
  }
}

export default new UserController();
