export class Observer {
  private observers: Function[] = [];
  constructor() {
    this.observers = [];
  }

  suscribe(fn: Function) {
    this.observers.push(fn);
  }
  unsubscribe(fn: Function) {
    this.observers = this.observers.filter((e) => e !== fn);
  }

  notify(param: string) {
    this.observers.forEach((e) => e(param));
  }
}
