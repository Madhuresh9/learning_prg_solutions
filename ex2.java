interface Product {
    void use();
}

class ConcreteProductA implements Product {
    public void use() {
        System.out.println("Using Product A");
    }
}

class ConcreteProductB implements Product {
    public void use() {
        System.out.println("Using Product B");
    }
}

class ProductFactory {
    public static Product createProduct(String type) {
        if (type.equalsIgnoreCase("A")) {
            return new ConcreteProductA();
        } else if (type.equalsIgnoreCase("B")) {
            return new ConcreteProductB();
        } else {
            System.out.println("Invalid type. Returning null.");
            return null;
        }
    }
}

public class ex2 {
    public static void main(String[] args) {
        Product product1 = ProductFactory.createProduct("A");
        if (product1 != null) product1.use();

        Product product2 = ProductFactory.createProduct("B");
        if (product2 != null) product2.use();
    }
}
