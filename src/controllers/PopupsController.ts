import store from '../utils/Store';

export class PopupsController {
  add(id: string) {
    store.set('popupId', id);
  }

  delete() {
    store.set('popupId', '');
  }
}

export default new PopupsController();
