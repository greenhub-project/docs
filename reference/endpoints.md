# API Reference Index

GreenHub API Base URL: https://greenhub.di.ubi.pt/api/

All endpoints that require authentication you need to provide an API token with the request. See [Authentication](authentication.md) for more details.

| Method | Endpoint                    | Usage                                                           | Returns                             | Auth* |
| ------ | --------------------------- | --------------------------------------------------------------- | ----------------------------------- | ----- |
| GET    | /v1/devices                 | [List Devices](devices.md$list-devices)                         | [Devices](devices.md#device-object) | Yes   |
| GET    | /v1/devices/:device         | [Get A Device](devices.md#get-a-device)                         | [Device](devices.md#device-object)  | Yes   |
| GET    | /v1/devices/:device/samples | [Get A Device's Samples](devices.md#get-a-devices-samples)      | [Samples](samples.md#sample-object) | Yes   |
| GET    | /v1/me                      | [Get The User’s Profile](current-user.md#get-the-users-profile) | [User](current-user.md#user-object) | Yes   |
| PUT    | /v1/me/token                | [Generate New API Key](user.md#generate-new-api-key)            | string                              | Yes   |

**Request authentication*