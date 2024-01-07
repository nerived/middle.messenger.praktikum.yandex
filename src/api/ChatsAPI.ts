import BaseAPI from './BaseAPI';
import { User } from './AuthAPI';

export interface ChatInfo {
  id: number;
  title: string;
  avatar: string;
  unread_count: number;
  created_by: number;
  last_message: {
    user: User;
    time: string;
    content: string;
  };
}

export interface ChatArchiveInfo {
  userId: number;
  result: ChatInfo;
}

export interface FileInfo {
  id: number;
  user_id: number;
  chat_id: number;
  time: string;
  type: string;
  content: number;
  file: {
    id: number;
    user_id: number;
    path: string;
    filename: string;
    content_type: string;
    content_size: number;
    upload_date: string;
  };
}

export interface ChatParams {
  offset?: number;
  limit?: number;
  title?: string;
  name?: string;
  email?: string;
}

export interface ChangeChatAvatar {
  chatId: number;
  avatar: File;
}

export class ChatsAPI extends BaseAPI {
  constructor() {
    super('/chats');
  }

  read(
    _?: string,
    data?: Pick<ChatParams, 'offset' | 'limit' | 'title'>
  ): Promise<ChatInfo[]> {
    return this.http.get('/', { data });
  }

  create(title: string) {
    return this.http.post('/', { data: { title } });
  }

  delete(id: number): Promise<unknown> {
    return this.http.delete('/', { data: { chatId: id } });
  }

  getFiles(id: number): Promise<Array<FileInfo>> {
    return this.http.get(`/${id}/files`);
  }

  getArchivedChats(
    data: Pick<ChatParams, 'offset' | 'limit' | 'title'>
  ): Promise<Array<ChatArchiveInfo>> {
    return this.http.get('/archive', { data });
  }

  archiveById(id: number): Promise<ChatArchiveInfo> {
    return this.http.post('/archive', { data: { chatId: id } });
  }

  unarchiveById(id: number): Promise<ChatArchiveInfo> {
    return this.http.post('/unarchive', { data: { chatId: id } });
  }

  getCommonChats(id: number): Promise<Array<ChatInfo[]>> {
    return this.http.get(`/${id}/common`);
  }

  getUsers(
    id: number,
    data?: Pick<ChatParams, 'offset' | 'limit' | 'name' | 'email'>
  ): Promise<Array<User & { role: string }>> {
    return this.http.get(`/${id}/users`, { data });
  }

  getNewMessagesCount(id: number): Promise<{ unread_count: number }> {
    return this.http.get(`/new/${id}`);
  }

  changeAvatar(data: ChangeChatAvatar): Promise<ChatInfo> {
    return this.http.put('/avatar', { data });
  }

  addUsers(id: number, users: number[]): Promise<unknown> {
    return this.http.put('/users', { data: { users, chatId: id } });
  }

  deleteUsers(id: number, users: number[]): Promise<unknown> {
    return this.http.delete('/users', { data: { users, chatId: id } });
  }

  async getToken(id: number): Promise<string> {
    const response = await this.http.post<{ token: string }>(`/token/${id}`);

    return response.token;
  }

  update = undefined;
}

export default new ChatsAPI();
