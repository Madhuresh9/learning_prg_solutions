using KafkaChatApp;

Console.WriteLine("Kafka Chat App");
Console.WriteLine("1. Send Message");
Console.WriteLine("2. Listen");

Console.Write("Enter your choice: ");
var choice = Console.ReadLine();

if (choice == "1")
{
    Console.Write("Enter message: ");
    var message = Console.ReadLine();
    await KafkaProducer.SendMessage(message ?? "");
}
else if (choice == "2")
{
    KafkaConsumer.Listen();
}
else
{
    Console.WriteLine("Invalid choice");
}
