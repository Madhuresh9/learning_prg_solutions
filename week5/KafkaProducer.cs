using Confluent.Kafka;

namespace KafkaChatApp
{
    public class KafkaProducer
    {
        public static async Task SendMessage(string message)
        {
            var config = new ProducerConfig
            {
                BootstrapServers = "localhost:9092"
            };

            using var producer = new ProducerBuilder<Null, string>(config).Build();
            var result = await producer.ProduceAsync("chat-topic", new Message<Null, string> { Value = message });
            Console.WriteLine($"Produced message to: {result.TopicPartitionOffset}");
        }
    }
}
