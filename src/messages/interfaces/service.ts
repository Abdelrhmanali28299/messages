export interface Service {
  list(): Promise<string[]>;
  create(text: string): Promise<string>;
  view(id: string): Promise<string>;
  update(id: string, text: string): Promise<void>;
  delete(id: string): Promise<void>;
}
