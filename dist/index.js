class Person {
    speak(name) {
        return `Olá ${name?.toUpperCase() ?? 'Fulano'}!!!`;
    }
}
const p = new Person();
p.speak('aquila');
p.speak();
//# sourceMappingURL=index.js.map