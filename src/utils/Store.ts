import { set, isEqual } from '../services';

import EventBus from './EventBus';
import Block, { BlockProps } from './Block';

type Indexed<T = any> = {
  [key in string]: T;
};

export enum StoreEvents {
  Updated = 'updated',
}

class Store extends EventBus {
  private state: Indexed = {};

  public set(path: string, value: unknown) {
    set(this.state, path, value);
    this.emit(StoreEvents.Updated, this.getState());
  }

  public getState() {
    return this.state;
  }
}

const store = new Store();

// @ts-ignore
window.store = store;

export function connect<SP>(mapStateToProps: (state: Indexed) => SP) {
  return function wrap<P extends BlockProps>(Component: typeof Block<SP & P>) {
    return class extends Component {
      constructor(props: Omit<P, keyof SP>) {
        let previousState = mapStateToProps(store.getState());
        super({ ...(props as P), ...previousState });
        store.on(StoreEvents.Updated, () => {
          const newState = mapStateToProps(store.getState()) as SP & P;
          if (!isEqual(previousState, newState)) {
            this.setProps({ ...newState });
          }

          previousState = newState;
        });
      }
    };
  };
}

export default store;
