export interface Repository {
    findAll(): Promise<string[]>;
    findById(id: string): Promise<string>;
    create(text: string): Promise<string>;
    update(id: string, text: string): Promise<void>;
    delete(id: string): Promise<void>;
}