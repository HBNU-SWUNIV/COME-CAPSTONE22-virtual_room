#include <Arduino.h>
#include <IRremoteESP8266.h>
#include <IRsend.h>

const uint16_t kIrLed = 4;

IRsend irsend(kIrLed);

void setup() {
  irsend.begin();
  Serial.begin(115200, SERIAL_8N1);
  
}

void loop() {
  long value = 0;

  if (Serial.available()) {
    value = Serial.parseInt();
  }

  if (value == 1) {
    Serial.println("TURN ON");
    irsend.sendSymphony(0xD82, 12);
    Serial.println("Symphony Turn On");
  }
  if (value == 2) {
    Serial.println("TURN OFF");
    irsend.sendSymphony(0xD81, 12);
    Serial.println("Symphony Turn Off");
  }
  if (value == 3)
  {
    Serial.println("ROTATION");
    irsend.sendSymphony(0xD90, 12);
  }
  if (value == 4)
  {
    Serial.println("TIMER");
    irsend.sendSymphony(0xD88, 12);
  }
  if (value == 5)
  {
    Serial.println("MODE");
    irsend.sendSymphony(0xD84, 12);
  }
}
