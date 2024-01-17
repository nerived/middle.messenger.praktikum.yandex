import API, { ChatsAPI, ChangeChatAvatar } from '../api/ChatsAPI';
import store from '../utils/Store';
import MessagesController from './MessagesController';

class ChatsController {
  private readonly api: ChatsAPI;

  constructor() {
    this.api = API;
  }

  async create(title: string) {
    await this.api.create(title);

    this.fetchChats();
  }

  async fetchChats() {
    const chats = await this.api.read();

    chats.map(async (chat) => {
      const token = await this.getToken(chat.id);
      await MessagesController.connect(chat.id, token);
    });

    chats.map((chat) => {
      if (chat?.last_message?.time) {
        chat.last_message.time = `${new Date(
          chat.last_message.time
        ).toLocaleTimeString()}`;
      }
      return chat;
    });

    store.set('chats', chats);
  }

  addUserToChat(id: number, userId: number) {
    this.api.addUsers(id, [userId]);
  }

  async changeAvatar(data: ChangeChatAvatar) {
    await this.api.changeAvatar(data);
  }

  async delete(id: number) {
    await this.api.delete(id);

    this.fetchChats();
  }

  async deleteUsers(id: number, userId: number) {
    await this.api.deleteUsers(id, [userId]);

    this.fetchChats();
  }

  getToken(id: number) {
    return this.api.getToken(id);
  }

  selectChat(id: number) {
    store.set('selectedChat', id);
  }

  resetSelectChat() {
    store.set('selectedChat', undefined);
  }
}

const controller = new ChatsController();

// @ts-expect-error: Should expect ChatsController
window.chatsController = controller;

export default controller;
