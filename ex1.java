public class ex1 {
    private static ex1 instance;

    private ex1() {
        System.out.println("ex1 instance created!");
    }

    public static ex1 getInstance() {
        if (instance == null) {
            instance = new ex1();
        }
        return instance;
    }

    public void showMessage() {
        System.out.println("Hello from the ex1 object!");
    }

    public static void main(String[] args) {
        ex1 obj1 = ex1.getInstance();
        obj1.showMessage();

        ex1 obj2 = ex1.getInstance();
        System.out.println("Are both instances same? " + (obj1 == obj2));
    }
}
