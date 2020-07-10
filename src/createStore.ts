export type Listener = () => void;

export default class Store<T> {
  public listeners: Listener[];

  constructor() {
    this.listeners = [];
  }

  /**
   * @param listener
   */
  public subscribe(listener: Listener): void {
    const index = this.listeners.indexOf(listener);
    if (index === -1) {
      this.listeners.push(listener);
    }
  }

  /**
   * @param listener
   */
  public unsubscribe(listener: Listener): void {
    const index = this.listeners.indexOf(listener);
    if (index !== -1) {
      this.listeners.splice(index, 1);
    }
  }
}
