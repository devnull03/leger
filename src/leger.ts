class Leger {
    static initialBalance: number;
    static currentBalance: number;
    
    static allItems: Map<string, Thing> = new Map();

    static inputPurpose: Purpose.edit | Purpose.new;
}

enum Purpose {
    new,
    edit
}
