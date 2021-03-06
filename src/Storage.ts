interface Storage<T> {
  get(id: string): T | null;
  store(id: string, value: T | null): void;
}

export default Storage;
