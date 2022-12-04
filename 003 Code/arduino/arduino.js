const { SerialPort } = require('serialport');

const sp = new SerialPort({
        path: 'Port Num', 
        baudRate: 115200,
});

module.exports = sp;