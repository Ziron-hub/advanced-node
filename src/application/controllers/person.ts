export interface Speaker {
  speak: (name?: string) => string;
}

export class PersonController implements Speaker {
  age: number;

  constructor(age: number) {
    this.age = age;
  }

  speak(name?: string): string {
    return `Olá ${name?.toUpperCase() ?? "Fulano"}. Você tem ${this.age?.toString()}!!!`;
  }
}
