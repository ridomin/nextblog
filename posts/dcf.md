---
title: Device Client Factory
date: "2019-12-12"
---

# Device Client Factory

I've doing PoCs with IoT Hub SDKs. I wanted to compare how a device communicates to Hub (Pass) or Central (SaaS), and I got tired or changing connection strings, ID Scopes, etcc..

So I came up with a simple solution:

>Extend the Connection String to support DPS

then I added X509 support, a certificate reader and a connection string parser.

Still a good prototype to experiment with: 

## [https://github.com/ridomin/DeviceClientFactory](https://github.com/ridomin/DeviceClientFactory)