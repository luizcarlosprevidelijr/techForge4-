//Separação de Responsabilidades em Classe de Pedido
class Order {
    private items: string[] = [];
    private totalPrice: number = 0;
    private paymentStatus: string = "Pending";
    private shippingStatus: string = "Not Shipped";

    addItem(item: string, price: number): void {
        this.items.push(item);
        this.totalPrice += price;
    }

    processPayment(): void {
        this.paymentStatus = "Processed";
        console.log("Payment processed.");
    }

    updateShippingStatus(): void {
        this.shippingStatus = "Shipped";
        console.log("Shipping updated.");
    }

    getOrderSummary(): string {
        return `Items: ${this.items.join(", ")}, Total: $${this.totalPrice}, Payment Status: ${this.paymentStatus}, Shipping Status: ${this.shippingStatus}`;
    }
}

const order = new Order();
order.addItem("Laptop", 1000);
order.addItem("Mouse", 50);
order.processPayment();
order.updateShippingStatus();
console.log(order.getOrderSummary());

//Refatorado para Separação de Responsabilidades:
class Cart {
    private items: { name: string, price: number }[] = [];

    addItem(name: string, price: number): void {
        this.items.push({ name, price });
    }

    getTotalPrice(): number {
        return this.items.reduce((total, item) => total + item.price, 0);
    }

    getItems(): string[] {
        return this.items.map(item => item.name);
    }
}

class Payment {
    processPayment(): void {
        console.log("Payment processed.");
    }
}

class Shipping {
    updateShippingStatus(): void {
        console.log("Shipping updated.");
    }
}

class Order {
    private cart: Cart = new Cart();
    private payment: Payment = new Payment();
    private shipping: Shipping = new Shipping();
    private paymentStatus: string = "Pending";
    private shippingStatus: string = "Not Shipped";

    addItem(item: string, price: number): void {
        this.cart.addItem(item, price);
    }

    processPayment(): void {
        this.payment.processPayment();
        this.paymentStatus = "Processed";
    }

    updateShippingStatus(): void {
        this.shipping.updateShippingStatus();
        this.shippingStatus = "Shipped";
    }

    getOrderSummary(): string {
        return `Items: ${this.cart.getItems().join(", ")}, Total: $${this.cart.getTotalPrice()}, Payment Status: ${this.paymentStatus}, Shipping Status: ${this.shippingStatus}`;
    }
}

const order = new Order();
order.addItem("Laptop", 1000);
order.addItem("Mouse", 50);
order.processPayment();
order.updateShippingStatus();
console.log(order.getOrderSummary());
