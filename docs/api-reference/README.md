---
sidebar: auto
---

# API Reference

::: tip
For instructions how to use the GreenHub API, please read [this](/api/getting-started.html) first.
:::

## Index

GreenHub API URL: `https://farmer.greenhubproject.org/api/` .

All actions that require authentication you need to provide an API token with the request. See [Authentication](/api/authentication.html) for more details.

| Method | Endpoint                | Usage                                                | Returns                          | Auth\* |
|--------|-------------------------|------------------------------------------------------|----------------------------------|--------|
| GET    | /v1/me                  | [Get The User’s Profile](#get-current-users-profile) | [User](#user-object)             | Yes    |
| PUT    | /v1/me/token            | [Generate New API Key](#generate-new-api-key)        | string                           | Yes    |
| GET    | /v1/devices             | [List Devices](#list-devices)                        | [Devices](#device-object)        | Yes    |
| GET    | /v1/devices/:id         | [Get A Device](#get-a-device)                        | [Device](#device-object)         | Yes    |
| GET    | /v1/devices/:id/samples | [Get A Device's Samples](#get-a-device-s-samples)    | [Samples](#sample-object)        | Yes    |
| GET    | /v1/samples             | [List Samples](#list-samples)                        | [Samples](#sample-object)        | Yes    |
| GET    | /v1/samples/:id         | [Get A Sample](#get-a-sample)                        | [Sample](#sample-object)         | Yes    |
| GET    | /v1/samples/:id/device  | [Get A Sample's Device](#get-a-sample-s-device)      | [Device](#device-object)         | Yes    |
| GET    | /v1/cpu-statuses        | [List CPU Statuses](#list-cpu-statuses)              | [CPU Status](#cpu-status-object) | Yes    |
| GET    | /v1/cpu-statuses/:id    | [Get A CPU Status](#get-a-cpu-status)                | [CPU Status](#cpu-status-object) | Yes    |

\*_Request authentication_

## Current User

### User Object

User object represents a person who has a valid **GreenHub Farmer** account.

| Key        | Type      | Description                                |
|------------|-----------|--------------------------------------------|
| id         | integer   | ID of the user.                            |
| name       | string    | Name of user.                              |
| email      | string    | Email address of user.                     |
| verified   | boolean   | Whether user account is verified.          |
| created_at | timestamp | Datetime when the record was created.      |
| updated_at | timestamp | Datetime when the record was last updated. |

### Get Current User’s Profile

Get detailed profile information about the current user.

``` http
GET /v1/me
```

#### Authentication

Yes

#### Parameters

None

#### Response

``` http
200 OK
X-Ratelimit-Limit: 60
X-Ratelimit-Remaining: 59
```

``` json
{
  "data": {
    "created_at": "2017-10-17 18:27:02",
    "email": "johndoe@example.com",
    "id": 1,
    "name": "John Doe",
    "updated_at": "2017-10-26 18:27:49",
    "verified": true
  }
}
```

#### Example Request

``` shell
$ curl -i -X GET "https://farmer.greenhubproject.org/api/v1/me" -H "Authorization: Bearer {your api key}"
```

### Generate New API Key

Generate a new API token key for the current user.

``` http
PUT /v1/me/token
```

#### Authentication

Yes

#### Parameters

None

#### Response

``` http
200 OK
X-Ratelimit-Limit: 60
X-Ratelimit-Remaining: 59
```

``` json
{
  "data": {
    "api_token": "{new api token here}"
  }
}
```

#### Example Request

``` shell
$ curl -i -X PUT "https://farmer.greenhubproject.org/api/v1/me/token" -H "Authorization: Bearer {your api key}"
```

## Devices

### Device Object

Device object represents an Android device registered on the API server.**A registration is one installation** of the app BatteryHub on the device.
In case a device installs the app BatteryHub more than once, one device object will be created per each installation.

| Key            | Type     | Description                                 |
|----------------|----------|---------------------------------------------|
| id             | integer  | ID of the device.                           |
| model          | string   | Model of device.                            |
| manufacturer   | string   | Brand of device.                            |
| product        | string   | Product name of device.                     |
| os_version     | string   | Android OS version of device.               |
| kernel_version | string   | Unix kernel version of device.              |
| is_root        | boolean  | Whether device has root access.             |
| created_at     | datetime | Timestamp when the record was created.      |
| updated_at     | datetime | Timestamp when the record was last updated. |

### List Devices

Get a single page from the list of all devices.

``` http
GET /v1/devices
```

#### Authentication

Yes

#### Parameters

All parameters are optional.

| Param    | Description                               |
|----------|-------------------------------------------|
| page     | Page number to retrieve. _(Default: 1)_   |
| per_page | Number of items per page. _(Default: 10)_ |

#### Response

``` http
200 OK
X-Ratelimit-Limit: 60
X-Ratelimit-Remaining: 59
```

``` json
{
  "data": [
    {
      "brand": "asus",
      "created_at": "2017-10-28 02:51:09",
      "id": 2518,
      "is_root": false,
      "kernel_version": "3.1835+",
      "manufacturer": "asus",
      "model": "ASUS_X008D",
      "product": "WW_Phone",
      "os_version": "7.0",
      "updated_at": "2017-10-28 02:51:09"
    },
    {
      "brand": "samsung",
      "created_at": "2017-10-28 06:24:32",
      "id": 2519,
      "is_root": false,
      "kernel_version": "3.18.14-11104523",
      "manufacturer": "samsung",
      "model": "SM-G930F",
      "product": "heroltexx",
      "os_version": "7.0",
      "updated_at": "2017-10-28 06:24:32"
    }
  ],
  "links": {
    "first": "https://farmer.greenhubproject.org/api/v1/devices?page=1",
    "last": null,
    "prev": null,
    "next": "https://farmer.greenhubproject.org/api/v1/devices?page=2"
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "path": "https://farmer.greenhubproject.org/api/v1/devices",
    "per_page": 10,
    "to": 2
  }
}
```

#### Example Request

``` bash
$ curl -i -X GET "https://farmer.greenhubproject.org/api/v1/devices" -H "Authorization: Bearer {your api key}"
```

### Get A Device

Retrieve a single device.

``` http
GET /v1/devices/:id
```

#### Authentication

Yes

#### Parameters

| Param | Description                 |
|-------|-----------------------------|
| id    | The device's ID. _Required_ |

#### Response

``` json
200 OK
X-Ratelimit-Limit: 60
X-Ratelimit-Remaining: 59
```

``` json
{
  "data": {
    "brand": "google",
    "created_at": "2017-10-17 21:52:45",
    "id": 1234,
    "is_root": false,
    "kernel_version": "3.4.0-gcf10b7e",
    "manufacturer": "LGE",
    "model": "Nexus 5",
    "os_version": "6.0.1",
    "product": "hammerhead",
    "updated_at": "2017-10-17 21:52:45"
  }
}
```

#### Example Request

``` json
$ curl -i -X GET "https://farmer.greenhubproject.org/api/v1/devices/1234" -H "Authorization: Bearer {your api key}"
```

### Get A Device's Samples

Get a list of samples uploaded by a device.

See the documentation about the [Sample object](#sample-object).

``` http
GET /v1/devices/:id/samples
```

#### Authentication

Yes

#### Parameters

| Param    | Description                                        |
|----------|----------------------------------------------------|
| id       | The device's ID. _Required_                        |
| page     | Page number to retrieve. _Optional (Default: 1)_   |
| per_page | Number of items per page. _Optional (Default: 10)_ |

#### Response

``` http
200 OK
X-Ratelimit-Limit: 60
X-Ratelimit-Remaining: 59
```

``` json
{
  "data": [
    {
      "app_version": 14,
      "battery_level": 0.99,
      "battery_state": "Discharging",
      "country_code": "Unknown",
      "created_at": "2017-10-25 18:17:37",
      "database_version": 3,
      "id": 98,
      "memory_active": 1025820,
      "memory_free": 1899508,
      "memory_inactive": 420244,
      "memory_user": 173044,
      "memory_wired": 0,
      "network_status": "WIFI",
      "screen_brightness": -1,
      "screen_on": true,
      "timestamp": "2017-10-25 18:04:34",
      "timezone": "Europe/Lisbon",
      "triggered_by": "android.intent.action.BATTERY_CHANGED",
      "updated_at": "2017-10-25 18:17:37"
    },
    {
      "app_version": 14,
      "battery_level": 0.98,
      "battery_state": "Discharging",
      "country_code": "Unknown",
      "created_at": "2017-10-25 18:17:38",
      "database_version": 3,
      "id": 99,
      "memory_active": 1021292,
      "memory_free": 1899508,
      "memory_inactive": 418888,
      "memory_user": 178000,
      "memory_wired": 0,
      "network_status": "WIFI",
      "screen_brightness": -1,
      "screen_on": true,
      "timestamp": "2017-10-25 18:04:56",
      "timezone": "Europe/Lisbon",
      "triggered_by": "android.intent.action.BATTERY_CHANGED",
      "updated_at": "2017-10-25 18:17:38"
    }
  ],
  "links": {
    "first": "https://farmer.greenhubproject.org/api/v1/devices/1234/samples?page=1",
    "last": null,
    "next": null,
    "prev": null
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "path": "https://farmer.greenhubproject.org/api/v1/devices/1234/samples",
    "per_page": 10,
    "to": 2
  }
}
```

#### Example Request

``` shell
$ curl -i -X GET "https://farmer.greenhubproject.org/api/v1/devices/1234/samples" -H "Authorization: Bearer {your api key}"
```

## Samples

### Sample Object

Sample object represents a snapshot of the Android device, it is a summary of its current state containing information ranging from battery status, network, screen state and memory usage. It also contains important information about the datetime when the sample was obtained, as well the BatteryHub version that originated the sample.

| Key               | Type     | Description                                                                                  |
|-------------------|----------|----------------------------------------------------------------------------------------------|
| id                | integer  | ID of the sample.                                                                            |
| timestamp         | datetime | Timestamp when the sample was created on the device.                                         |
| app_version       | integer  | BatteryHub app version.                                                                      |
| database_version  | integer  | BatteryHub database version.                                                                 |
| battery_state     | string   | State of battery. Can be `Charging` , `Discharging` , `Full` , `Not Charging` or `Unknown` . |
| battery_level     | float    | Battery Level. Ranges from `0.0` to `1.0` .                                                  |
| triggered_by      | string   | The event (Android action intent) that triggered the sample collection.                      |
| network_status    | string   | State of network. Can be `WIFI` , `lte` or `disconnected` .                                  |
| screen_brightness | integer  | Screen brightness value between `0` and `255` , `-1` if set to automatic otherwise.          |
| screen_on         | boolean  | Either if screen is on or off.                                                               |
| timezone          | string   | Current timezone of the mobile device.                                                       |
| country_code      | string   | Current network ISOBattery Details country code.                                             |
| created_at        | datetime | Timestamp when the record was created.                                                       |
| updated_at        | datetime | Timestamp when the record was last updated.                                                  |

### List Samples

Get a single page from the list of all samples.

``` http
GET /v1/samples
```

#### Authentication

Yes

#### Parameters

All parameters are optional.

| Param    | Description                               |
|----------|-------------------------------------------|
| page     | Page number to retrieve. _(Default: 1)_   |
| per_page | Number of items per page. _(Default: 10)_ |

#### Response

``` http
200 OK
X-Ratelimit-Limit: 60
X-Ratelimit-Remaining: 59
```

``` json
{
  "data": [
    {
      "id": 1,
      "device_id": 1,
      "timestamp": "2017-10-08 12:50:04",
      "app_version": 11,
      "database_version": 0,
      "battery_state": "discharging",
      "battery_level": 0.82,
      "triggered_by": "android.intent.action.BATTERY_CHANGED",
      "network_status": "wifi",
      "screen_brightness": -1,
      "screen_on": true,
      "timezone": "America/Chicago",
      "country_code": "us",
      "created_at": "2017-10-09 03:48:00",
      "updated_at": "2017-10-09 03:48:00"
    },
    {
      "id": 2,
      "device_id": 1,
      "timestamp": "2017-10-08 12:50:04",
      "app_version": 11,
      "database_version": 0,
      "battery_state": "discharging",
      "battery_level": 0.82,
      "triggered_by": "android.intent.action.BATTERY_CHANGED",
      "network_status": "wifi",
      "screen_brightness": -1,
      "screen_on": true,
      "timezone": "America/Chicago",
      "country_code": "us",
      "created_at": "2017-10-09 03:51:23",
      "updated_at": "2017-10-09 03:51:23"
    }
  ],
  "links": {
    "first": "https://farmer.greenhubproject.org/api/v1/samples?page=1",
    "last": null,
    "prev": null,
    "next": "https://farmer.greenhubproject.org/api/v1/samples?page=2"
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "path": "https://farmer.greenhubproject.org/api/v1/samples",
    "per_page": "2",
    "to": 2
  }
}
```

#### Example Request

``` shell
$ curl -i -X GET "https://farmer.greenhubproject.org/api/v1/samples?per_page=2" -H "Authorization: Bearer {your api key}"
```


### Get A Sample

Retrieve a single sample.

``` http
GET /v1/samples/:id
```

#### Authentication

Yes

#### Parameters

| Param | Description                 |
|-------|-----------------------------|
| id    | The sample's ID. _Required_ |

#### Response

``` http
200 OK
X-Ratelimit-Limit: 60
X-Ratelimit-Remaining: 59
```

```json
{
  "data": {
    "id": 1234,
    "device_id": 135,
    "timestamp": "2017-10-09 12:10:31",
    "app_version": 11,
    "database_version": 3,
    "battery_state": "charging",
    "battery_level": 0.72,
    "triggered_by": "android.intent.action.BATTERY_CHANGED",
    "network_status": "disconnected",
    "screen_brightness": -1,
    "screen_on": false,
    "timezone": "Europe/Lisbon",
    "country_code": "pt",
    "created_at": "2017-10-09 14:13:56",
    "updated_at": "2017-10-09 14:13:56"
  }
}
```

#### Example Request

``` shell
$ curl -i -X GET "https://farmer.greenhubproject.org/api/v1/samples/1234" -H "Authorization: Bearer {your api key}"
```

### Get A Sample's Device

Retrieve a single sample's.

``` http
GET /v1/samples/:id/device
```

#### Authentication

Yes

#### Parameters

| Param | Description                 |
|-------|-----------------------------|
| id    | The sample's ID. _Required_ |

#### Response

``` http
200 OK
X-Ratelimit-Limit: 60
X-Ratelimit-Remaining: 59
```

```json
{
  "data": {
    "id": 40,
    "model": "SM-G920F",
    "manufacturer": "samsung",
    "brand": "samsung",
    "product": "zerofltexx",
    "os_version": "7.0",
    "kernel_version": "3.10.61-10940776",
    "is_root": false,
    "created_at": "2017-10-09 10:27:44",
    "updated_at": "2017-10-09 10:27:44"
  }
}
```

#### Example Request

``` shell
$ curl -i -X GET "https://farmer.greenhubproject.org/api/v1/samples/1000/device" -H "Authorization: Bearer {your api key}"
```

## CPU Statuses

### CPU Status Object

CPU Status object represents the state of the device's CPU at the time the associated sample is obtained. Contains information about its usage, up and sleep time.

| Key        | Type     | Description                                 |
|------------|----------|---------------------------------------------|
| id         | integer  | ID of the CPU status.                       |
| sample_id  | integer  | ID of the sample that it belongs to.        |
| usage      | float    | Fraction of cpu being used.                 |
| up_time    | integer  | Up time in seconds.                         |
| sleep_time | integer  | Sleep time in seconds.                      |
| created_at | datetime | Timestamp when the record was created.      |
| updated_at | datetime | Timestamp when the record was last updated. |

### List CPU Statuses

Get a single page from the list of all cpu statuses.

``` http
GET /v1/cpu-statuses
```

#### Authentication

Yes

#### Parameters

All parameters are optional.

| Param    | Description                               |
|----------|-------------------------------------------|
| page     | Page number to retrieve. _(Default: 1)_   |
| per_page | Number of items per page. _(Default: 10)_ |

#### Response

``` http
200 OK
X-Ratelimit-Limit: 60
X-Ratelimit-Remaining: 59
```

``` json
```

#### Example Request

``` shell
$ curl -i -X GET "https://farmer.greenhubproject.org/api/v1/cpu-statuses?per_page=2" -H "Authorization: Bearer {your api key}"
```


### Get A CPU Status

Retrieve a single CPU status.

``` http
GET /v1/cpu-statuses/:id
```

#### Authentication

Yes

#### Parameters

| Param | Description                     |
|-------|---------------------------------|
| id    | The CPU status's ID. _Required_ |

#### Response

``` json
200 OK
X-Ratelimit-Limit: 60
X-Ratelimit-Remaining: 59
```

``` json
```

#### Example Request

``` json
$ curl -i -X GET "https://farmer.greenhubproject.org/api/v1/cpu-statuses/1234" -H "Authorization: Bearer {your api key}"
```

## Battery Details

### Battery Details Object

Battery Details object represents a .

| Key        | Type     | Description                                 |
|------------|----------|---------------------------------------------|
| id         | integer  | ID of the battery details.                  |
| created_at | datetime | Timestamp when the record was created.      |
| updated_at | datetime | Timestamp when the record was last updated. |


## Network Details

### Network Details Object

Network Details object represents a .

| Key        | Type     | Description                                 |
|------------|----------|---------------------------------------------|
| id         | integer  | ID of the network details.                  |
| created_at | datetime | Timestamp when the record was created.      |
| updated_at | datetime | Timestamp when the record was last updated. |


## Storage Details

### Storage Details Object

Storage Details object represents a .

| Key | Type    | Description                |
|-----|---------|----------------------------|
| id  | integer | ID of the storage details. |


## Settings

### Settings Object

Settings object represents a set of device's configuration at the time the associated sample is obtained. Contains information regarding which components are switch on or off.

| Key                 | Type     | Description                                                                   |
|---------------------|----------|-------------------------------------------------------------------------------|
| id                  | integer  | ID of the settings.                                                           |
| sample_id           | integer  | ID of the sample that it belongs to.                                          |
| bluetooth_enabled   | boolean  | Either if bluetooth is on or off.                                             |
| location_enabled    | boolean  | Either if GPS is on or off.                                                   |
| power_saver_enabled | boolean  | Either if power saver mode is enabled or disabled.                            |
| flashlight_enabled  | boolean  | Either if flashlight is on or off.                                            |
| nfc_enabled         | boolean  | Either if NFC sensor is on or off.                                            |
| unknown_sources     | boolean  | Either if system setting for apps of unknown sources can be installed or not. |
| developer_mode      | boolean  | Either if developer mode is enabled or disabled.                              |
| created_at          | datetime | Timestamp when the record was created.                                        |
| updated_at          | datetime | Timestamp when the record was last updated.                                   |


