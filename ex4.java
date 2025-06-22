import java.util.Scanner;

public class ex4 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the principal amount (in R): ");
        double principal = scanner.nextDouble();

        System.out.print("Enter annual interest rate (in %): ");
        double rate = scanner.nextDouble();

        System.out.print("Enter number of years: ");
        int years = scanner.nextInt();

        double futureValue = principal * Math.pow(1 + rate / 100, years);

        System.out.printf("Future value after %d years: ₹%.2f\n", years, futureValue);
    }
}
