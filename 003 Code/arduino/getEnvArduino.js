const db = require('./envDB.js');
const sp = require('./arduino.js');

let envArray = new Array();
envArray = [0, 0, 0];
let rstArray = new Array();
rstArray = [0, 0, 0];

let splitData = new Array();
splitData = ['', '', ''];

sp.open(function() {
    sp.on("error", function(error) {
        console.log("Error : ", error.message);
    });
});

function getDate() {
    const date = new Date();

    const year = String(date.getFullYear()).padStart(4, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    const formDate = `${year}-${month}-${day}`;

    return formDate;
}

function getTime() {
    const time = new Date();

    const hours = String(time.getHours()).padStart(2, "0");
    const minutes = String(time.getMinutes()).padStart(2, "0");
    const seconds = String(time.getSeconds()).padStart(2, "0");

    const formTime = `${hours}:${minutes}:${seconds}`;

    return formTime;
}

function getInfo() {
    sp.write("7", function(error) {
        if(error) {
            return console.log("Error on Write : ", error.message);
        } else {
            console.log("Write Success 7");
        }
    });

    sp.on('open', function() {
        let i = 0;
        let infoData = "";
        let k = 0;
        sp.on('data', function(data) {
            for (i = 0; i < data.length; i++) {
                infoData = infoData + String.fromCharCode(data[i]);
            }

            console.log("infoData.split(' ', 3) : ", infoData.split(' ', 3));

            splitData = infoData.split(' ', 3);
            console.log("Tem value in String : ", splitData[0]);
            console.log("Hum value in String : ", splitData[1]);
            console.log("CO2 value in String : ", splitData[2]);

            for (k = 0; k < splitData.length; k++) {
                envArray[k] = Number(splitData[k]);
            }
            infoData = "";

            console.log("Tem value in Number : ", envArray[0]);
            console.log("Hum value in Number : ", envArray[1]);
            console.log("CO2 value in Number : ", envArray[2]);
        });
    });

    return envArray;
}

function insertInfo() {
    const resultDate = getDate();
    const resultTime = getTime();
    rstArray = getInfo();

    console.log("tem value for INSERT : ", rstArray[0]);
    console.log("hum value for INSERT : ", rstArray[1]);
    console.log("CO2 value for INSERT : ", rstArray[2]);

    if (rstArray[0] !== 0 && rstArray[1] !== 0 && rstArray[2] !== 0 && rstArray[2] !== 500) {
        db.query(
            `INSERT INTO env(date, time, tem_value, hum_value, co2_value) VALUES(?, ?, ?, ?, ?)`,
            [resultDate, resultTime, rstArray[0], rstArray[1], rstArray[2]],
            function(error, result) {
                if(error) {
                    throw error;
                }
            }
        );
    }
}

insertInfo();
setInterval(insertInfo, 15000);