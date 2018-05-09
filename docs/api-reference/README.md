---
sidebar: auto
---
# API Reference
::: tip
For instructions how to use the GreenHub API, please read [this](/api/getting-started.html) first.
:::

## Index

GreenHub API URL: `https://greenhub.di.ubi.pt/api/`.

All actions that require authentication you need to provide an API token with the request. See [Authentication](/api/authentication.html) for more details.

| Method | Endpoint                    | Usage                                                 | Returns                   | Auth* |
| ------ | --------------------------- | ----------------------------------------------------- | ------------------------- | ----- |
| GET    | /v1/devices                 | [List Devices](#list-devices)                         | [Devices](#device-object) | Yes   |
| GET    | /v1/devices/:device         | [Get A Device](#get-a-device)                         | [Device](#device-object)  | Yes   |
| GET    | /v1/devices/:device/samples | [Get A Device's Samples](#get-a-devices-samples)      | [Samples](#sample-object) | Yes   |
| GET    | /v1/me                      | [Get The User’s Profile](#get-current-user’s-profile) | [User](#user-object)      | Yes   |
| PUT    | /v1/me/token                | [Generate New API Key](#generate-new-api-key)         | string                    | Yes   |

**Request authentication*

## Current User

### User Object
User object represents a person who has a valid **GreenHub Farmer** account.

| Key        | Type      | Description                                |
| ---------- | --------- | ------------------------------------------ |
| id         | integer   | ID of the user.                            |
| name       | string    | Name of user.                              |
| email      | string    | Email address of user.                     |
| verified   | boolean   | Whether user account is verified.          |
| created_at | timestamp | Datetime when the record was created.      |
| updated_at | timestamp | Datetime when the record was last updated. |

### Get Current User’s Profile
Get detailed profile information about the current user.

```http
GET /v1/me
```

#### Authentication
Yes

#### Parameters
None

#### Response
```http
200 OK
X-Ratelimit-Limit: 60
X-Ratelimit-Remaining: 59
```

```json
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
```shell
curl -i -X GET "https://greenhub.di.ubi.pt/api/v1/me" -H "Authorization: Bearer {your api key}"
```

### Generate New API Key
Generate a new API token key for the current user.

```http
PUT /v1/me/token
```

#### Authentication
Yes

#### Parameters
None

#### Response
```http
200 OK
X-Ratelimit-Limit: 60
X-Ratelimit-Remaining: 59
```

```json
{
  "data": {
    "api_token": "{new api token here}"
  }
}
```

#### Example Request
```shell
curl -i -X PUT "https://greenhub.di.ubi.pt/api/v1/me/token" -H "Authorization: Bearer {your api key}"
```

## Devices

### Device Object
Device object represents an Android device registered on the API server. **A registration is one installation** of the app BatteryHub on the device. 
In case a device installs the app BatteryHub more than once, one device object will be created per each installation.

| Key            | Type     | Description                                  |
| -------------- | -------- | -------------------------------------------- |
| id             | integer  | ID of the device.                            |
| model          | string   | Model of device.                             |
| manufacturer   | string   | Brand of device.                             |
| product        | string   | Product name of device.                      |
| os_version     | string   | Android OS version of device.                |
| kernel_version | string   | Unix kernel version of device.               |
| is_root        | boolean  | Whether device has root access.              |
| created_at     | datetime | Time stamp when the record was created.      |
| updated_at     | datetime | Time stamp when the record was last updated. |

### List Devices
Get a single page from the list of all devices.

```http
GET /v1/devices
```

#### Authentication
Yes

#### Parameters
All parameters are optional.

| Param    | Description                               |
| -------- | ----------------------------------------- |
| page     | Page number to retrieve. *(Default: 1)*   |
| per_page | Number of items per page. *(Default: 10)* |

#### Response
```http
200 OK
X-Ratelimit-Limit: 60
X-Ratelimit-Remaining: 59
```

```json
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
    "first": "https://greenhub.di.ubi.pt/api/v1/devices?page=1",
    "last": null,
    "prev": null,
    "next": "https://greenhub.di.ubi.pt/api/v1/devices?page=2"
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "path": "https://greenhub.di.ubi.pt/api/v1/devices",
    "per_page": 10,
    "to": 2
  }
}
```

#### Example Request
```shell
curl -i -X GET "https://greenhub.di.ubi.pt/api/v1/devices" -H "Authorization: Bearer {your api key}"
```

### Get A Device
Retrieve a single device.

```http
GET /v1/devices/:id
```

#### Authentication
Yes

#### Request Parameters
| Param    | Description                                        |
| -------- | -------------------------------------------------- |
| id       | The device's ID. *Required*                        |
| page     | Page number to retrieve. *Optional (Default: 1)*   |
| per_page | Number of items per page. *Optional (Default: 10)* |

#### Response
```json
200 OK
X-Ratelimit-Limit: 60
X-Ratelimit-Remaining: 59
```

```json
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
```json
curl -i -X GET "https://greenhub.di.ubi.pt/api/v1/devices/1234" -H "Authorization: Bearer {your api key}"
```

### Get A Device's Samples
Get a list of samples uploaded by a device.

See the documentation about the [Sample object](#sample-object).

```http
GET /v1/devices/:id/samples
```

#### Authentication
Yes

#### Request Parameters
| Param    | Description                                        |
| -------- | -------------------------------------------------- |
| id       | The device's ID. *Required*                        |
| page     | Page number to retrieve. *Optional (Default: 1)*   |
| per_page | Number of items per page. *Optional (Default: 10)* |

#### Response
```http
200 OK
X-Ratelimit-Limit: 60
X-Ratelimit-Remaining: 59
```

```json
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
    "first": "https://greenhub.di.ubi.pt/api/v1/devices/1234/samples?page=1", 
    "last": null, 
    "next": null, 
    "prev": null
  }, 
  "meta": {
    "current_page": 1, 
    "from": 1, 
    "path": "https://greenhub.di.ubi.pt/api/v1/devices/1234/samples", 
    "per_page": 10, 
    "to": 2
  }
}
```

#### Example Request
```shell
curl -i -X GET "https://greenhub.di.ubi.pt/api/v1/devices/1234/samples" -H "Authorization: Bearer {your api key}"
```

<!-- ## Samples

### Sample Object

Sample object represents a .

| Key              | Type     | Description                                                                              |
| ---------------- | -------- | ---------------------------------------------------------------------------------------- |
| id               | integer  | ID of the sample.                                                                        |
| timestamp        | datetime | Time stamp when the sample was created on the device.                                    |
| app_version      | integer  | BatteryHub app version.                                                                  |
| database_version | integer  | BatteryHub database version.                                                             |
| battery_state    | string   | State of battery. Can be `Charging`, `Discharging`, `Full`, `Not Charging` or `Unknown`. |
| battery_level    | float    | Battery Level. Ranges from `0.0` to `1.0`.                                               |
| created_at       | datetime | Time stamp when the record was created.                                                  |
| updated_at       | datetime | Time stamp when the record was last updated.                                             | -->
