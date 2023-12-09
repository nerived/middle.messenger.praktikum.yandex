type Callback = (...args: any[]) => void;

export class EventBus {
  private readonly listeners: Record<string, Array<(...args: any[]) => void>> =
    {};

  on(event: string, callback: Callback) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event: string, callback: Callback) {
    if (!this.listeners[event]) {
      throw new Error(`Event not found: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter(
      (listener) => listener !== callback
    );
  }

  emit(event: string, ...args: any[]) {
    if (!this.listeners[event]) {
      throw new Error(`Event not found: ${event}`);
    }

    this.listeners[event].forEach(function (listener) {
      listener(...args);
    });
  }
}

export default EventBus;
