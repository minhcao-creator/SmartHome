const mqtt = require('mqtt');
const host = 'io.adafruit.com';
const connectUrl = `mqtt://${host}`;

const topicSensor = 'minhcao2000/feeds/sensor';
const topicLed = 'minhcao2000/feeds/bbc-led';
const topicBuzzer = 'minhcao2000/feeds/bbc-alarm';

var ledData = "0";
var buzzerData = "0";
var sensorData = "1";

//Khi sensor gửi tín hiệu có đột nhập đến cho hệ thống, hệ thống liền phản hồi tín hiệu
//lại cho led và buzzer.
function adafruit() {
    const client = mqtt.connect(connectUrl, {
        clean: true,
        port: 1883,
        connectTimeout: 4000,
        username: 'minhcao2000',
        password: '',
        reconnectPeriod: 1000,
    })
    
    client.on('connect', () => {
        console.log("Successfully connected to adafruit");
        client.subscribe([topicSensor], () => {
            console.log(`Subscribe to all topic`)
        });
    });
    
    client.on('message', (topic, message) => {
        console.log('Received Message:', topic, parseInt(message));
        statusChange = true;
        if(!parseInt(message)){
            ledData = "1";
            buzzerData = "1";
            sensorData = "0";
        }
        else {
            ledData = "0";
            buzzerData = "0";
            sensorData = "1";
        }
        
        
        client.publish(topicLed, ledData, { qos: 0, retain: false }, (error) => {
            if (error) {
                console.error(error)
            }
            console.log('Send Message: ',ledData, topicLed);
        });
        client.publish(topicBuzzer, buzzerData, { qos: 0, retain: false }, (error) => {
            if (error) {
                console.error(error)
            }
            console.log('Send Message: ',buzzerData, topicBuzzer);
        });
        
        // app.get('/dashboard',(req, res) =>{
        //     ledData = ledData;
        //     buzzerData = buzzerData;
        //     sensorData = sensorData;
        //     res.send({
        //         ledData,
        //         buzzerData,
        //         sensorData
        //     });
        // })
    });

    return data = {
        ledData,
        buzzerData,
        sensorData
    }
}

module.exports = adafruit;