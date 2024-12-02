abstract class Inventory {
    abstract addItem(item: string, quantity: number): void;
    abstract removeItem(item: string): void;
    abstract getInventory(): Record<string, number>;
}

class WarehouseInventory extends Inventory {
    private inventory: Record<string, number> = {};

    addItem(item: string, quantity: number): void {
        this.inventory[item] = (this.inventory[item] || 0) + quantity;
    }

    removeItem(item: string): void {
        delete this.inventory[item];
    }

    getInventory(): Record<string, number> {
        return this.inventory;
    }
}

class StoreInventory extends Inventory {
    private inventory: Record<string, number> = {};

    addItem(item: string, quantity: number): void {
        const newQuantity = (this.inventory[item] || 0) + quantity;
        this.inventory[item] = Math.min(newQuantity, 10); // Limite de 10 unidades
    }

    removeItem(item: string): void {
        delete this.inventory[item];
    }

    getInventory(): Record<string, number> {
        return this.inventory;
    }
}

const warehouse = new WarehouseInventory();
warehouse.addItem("Laptop", 100);
warehouse.addItem("Phone", 50);

const store = new StoreInventory();
store.addItem("Shirt", 5);
store.addItem("Shirt", 7); // O limite é 10

console.log(warehouse.getInventory());
console.log(store.getInventory());
