---
title: Azure IoT Hub web client
date: "2020-07-07"
---

# Azure IoT Hub Web Client

Working with the Azure IoT Hub SDKs requires a basic understanding of the underlaying MQTT protocol. Nothing better that a real coding excercise to learn how MQTT works with IoTHub.

This [article](https://docs.microsoft.com/azure/iot-hub/iot-hub-mqtt-support) covers how to use MQTT primitives (aka topics) to connect to IoTHub, and there are some implementations like this [iotmqttsample/](https://github.com/Azure-Samples/IoTMQTTSample) to explain the main concepts. 

... but I needed something else, just for fun, for learning MQTT and at the same time to create a tool that could help me in my day by day tasks.

Thiking about languages, my first approach will be use some MQTT library for .NET, but I couldnt find a library that was easy to use and extend, but the biggest issue is how to distribute the app. 

Because I was interested in the device side, it should have an application that required to be deployed on your desktop, and honestly Electron seem as an overkill option and I didnt want to invest more time in figuring out if MSIX will be the next deployment stack, also cross platform is an interesting requirement, so I started looking what could be possible in a browser, yes in a browser without any server interaction. A device simulator that can run entirely in the browser, easy to deploy, easy to update and cross-platform.


## Looking for a MQTT JS library

The Azure SDKs are based on MQTT.js, but their browser support was limited. I found Paho MQTT, which decent browser support. Quickly I realized how easy was to read/write (should I said sub/pub?) from the expected IoTHub topics.. and then a project was born:

## https://mqtt.rido.dev 

## My modern front-end development principles

First, I'm coding this project just for fun, to learn and absorb the state of art of modern front-end development. I remember 5 years ago, when I started in Visual Studio with TACO (tools for Apache Cordova) how node is changing everything in the web development space, from new reuse patterns based on Modules, to TypeScript, Babel and finally Angular, React, Vue,etc..

If I remember something from those days, it was how I hated *WebPack*. Not because it wasnt solving an interesting problem, it's because the fragility of the ecosystem. Everyone was using some webpack configuration scripts, but a few realy knew how to maintain those.

Another important piece is the ES6 support, in browsers and node. With ES6 I dont need typescript to use classes, async or modules, so I can skip any transpile step, making webpack not strictly required.

With all of these in mind, I set these **base principles** for this project:

- Avoid any transpile. The code your write is the code the browser executes
- Use native ES6 features
- Use Types on top of JS files using JSDOc annotations

### Javscript code style

We have JSLinters, ESLinters, TSLinters, with a trillion of customizations, but that was not helping me to write better JS code. Then I found the _JavaScript Standard_, and I found it wonderfull, including the fact that semicolons are discouraged. So I decided to give it a try.




