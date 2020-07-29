---
title: Azure IoT Hub web client
date: "2020-07-07"
---

# Azure IoT Hub Web Client

Working with the Azure IoT Hub SDKs requires a basic understanding of the underlaying MQTT protocol. Nothing better that a real coding excercise to learn MQTT and IoTHub.

My team has been working in various bare bones MQTT samples for some time:

- [iotmqttsample/](https://github.com/Azure-Samples/IoTMQTTSample)
- [iot-hub-mqtt-support](https://docs.microsoft.com/azure/iot-hub/iot-hub-mqtt-support)

.. but I'd prefer to avoid C, and if possible use JavaScript to keep learning ES6.

## Looking for a MQTT JS library

The Azure SDKs are based on MQTT.js, but their browser support was limited. I found Paho MQTT, which decent browser support. Quickly I realized how easy was to read/write (should I said sub/pub?) from the expected IoTHub topics.. and then a project was born:

## https://mqtt.rido.dev 