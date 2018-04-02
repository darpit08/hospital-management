var amqp = require('amqplib');
const queueName = 'test-queue2';


async function receive() {
    let con = await amqp.connect('amqp://localhost');
    let ch = await con.createChannel();
    ch.assertQueue(queueName, { durable: true });
    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queueName);

    ch.consume(queueName, function (msg) {
        console.log('Got another.............')
        console.log(msg.content.toString());
        //ch.ack(msg);
    }, { noAck: false });


   // let res = await ch.sendToQueue(queueName, 'Test Message 4');
}

receive();

