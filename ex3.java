import java.util.*;

public class ex3 {
    public static void main(String[] args) {
        List<String> products = Arrays.asList("Laptop", "Smartphone", "Headphones", "Tablet", "Smartwatch");
        Scanner scanner = new Scanner(System.in);
        System.out.print("Search for a product: ");
        String search = scanner.nextLine().toLowerCase();
        boolean found = false;
        for (String product : products) {
            if (product.toLowerCase().contains(search)) {
                System.out.println("Found: " + product);
                found = true;
            }
        }
        if (!found) {
            System.out.println("No product found with that name.");
        }
    }
}
