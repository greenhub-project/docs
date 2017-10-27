# API Reference Index

GreenHub API Base URL: https://greenhub.di.ubi.pt/api/

All endpoints that require authentication you need to provide an API token with the request. See [Authentication](authentication.md) for more details.

| Method | Endpoint       | Usage                                                   | Returns                        | Auth* |
| ------ | -------------- | ------------------------------------------------------- | ------------------------------ | ----- |
| GET    | /v1/me         | [Get The User’s Profile](user.md#get-the-users-profile) | [User](user.md#user-object)    | Yes   |
| PUT    | /v1/me/token   | [Generate New API Key](user.md#generate-new-api-key)    | string                         | Yes   |

**Request authentication*