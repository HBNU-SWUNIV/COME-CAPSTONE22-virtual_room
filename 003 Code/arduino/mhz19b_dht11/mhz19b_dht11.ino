#include <DHT.h>
#include <ESP8266WiFi.h>
#define DHTTYPE DHT11   // DHT 11
#define DHTPIN_A 12

#include <SoftwareSerial.h>
#include <MHZ19.h>

SoftwareSerial ss(D3,D4); //Rx Tx
MHZ19 mhz(&ss);

DHT dht1(DHTPIN_A, DHTTYPE); 

int t1 = 0;
int h1 = 0;
int co2 = 0;

String result = "";

void setup() {
  Serial.begin(115200);
  delay(10);
  dht1.begin();
  ss.begin(9600);
}

 

void loop(){
  long value = 0;
  if (Serial.available()) {
    value = Serial.parseInt();
  }

  if (value == 7) {
    getInfo();
  }
}

void getTem() {
  t1 = dht1.readTemperature();
  Serial.println(t1);
}

void getHum() {
  h1 = dht1.readHumidity();
  Serial.println(h1);
}

void getCO2() {
  MHZ19_RESULT response = mhz.retrieveData();
  if (response == MHZ19_RESULT_OK)
  {
    co2 = mhz.getCO2();
    Serial.println(co2);
  }
  else
  {
    Serial.print(F("Error, code: "));
    Serial.println(response);
  }
}

void getInfo() {
  t1 = dht1.readTemperature();
  h1 = dht1.readHumidity();

  MHZ19_RESULT response = mhz.retrieveData();
  if (response == MHZ19_RESULT_OK)
  {
   co2 = mhz.getCO2();
  }
  else
  {
    Serial.print(F("Error, code: "));
    Serial.print(response);
  }

  result = String(t1) + " " + String(h1) + " " + String(co2);
  Serial.print(result);
  
  
}
