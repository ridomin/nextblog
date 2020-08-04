---
title: Azure IoT Hub web client
date: "2020-07-07"
---

# Azure IoT Hub Web Client

Working with the Azure IoT Hub SDKs requires a basic understanding of the underlaying MQTT protocol. Nothing better that a real coding excercise to learn how MQTT works with IoTHub.

This [article](https://docs.microsoft.com/azure/iot-hub/iot-hub-mqtt-support) covers how to use MQTT primitives (aka topics) to connect to IoTHub, and there are some implementations like this [iotmqttsample/](https://github.com/Azure-Samples/IoTMQTTSample) to explain the main concepts. 

... but I needed something else, just for fun, for learning MQTT and at the same time to create a tool that could help me in my day by day tasks.

Thiking about languages, my first approach will be use some MQTT library for .NET, but I couldnt find a library that was easy to use and extend, but the biggest issues is how to distribute the app. 

Because I was interested in the device side, it should have an application that required to be deployed on your desktop, and honestly Electron seem as an overkill option and I didnt want to invest more time in figuring out if MSIX will be the next deployment stack, also cross platform is an interesting requirement, so I started looking what could be possible in a browser, yes in a browser without any server interaction. A device simulator that can run entirely in the browser, easy to deploy, easy to update and cross-platform.


## Looking for a MQTT JS library

The Azure SDKs are based on MQTT.js, but their browser support was limited. I found Paho MQTT, which decent browser support. Quickly I realized how easy was to read/write (should I said sub/pub?) from the expected IoTHub topics.. and then a project was born:

## https://mqtt.rido.dev 
