import createStore from '../createStore';

describe('createStore.ts', () => {
  const listener = jest.fn();

  let store: any, unsubscribe: any;

  beforeEach(() => {
    store = new createStore();
    listener.mockReset();
    //unsubscribe = store.subscribe(listener);
  });

  it('throws if handler is not a function', () => {
    expect(() => store(undefined)).toThrow();
    expect(() => store('test' as unknown)).toThrow();
    expect(() => store({} as unknown)).toThrow();
  });

  it('subscribe', () => {
    expect(listener).not.toBeCalled();
  });
});
