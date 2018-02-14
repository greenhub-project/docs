# Current User

- [User Object](#user-object)
- [Get Current User’s Profile](#get-current-users-profile)
- [Generate New API Key](#generate-new-api-key)

## User Object

User object represents a person who has a valid **GreenHub Farmer** account.

| Key        | Type      | Description                                |
| ---------- | --------- | ------------------------------------------ |
| id         | integer   | ID of the user.                            |
| name       | string    | Name of user.                              |
| email      | string    | Email address of user.                     |
| verified   | boolean   | Whether user account is verified.          |
| created_at | timestamp | Datetime when the record was created.      |
| updated_at | timestamp | Datetime when the record was last updated. |

## Get Current User’s Profile

Get detailed profile information about the current user.

```
GET /v1/me
```

### Request Parameters

#### Header

| Param         | Description                                                                |
| ------------- | --------------------------------------------------------------------------------------- |
| Authorization | A valid API token. See [Authentication](authentication.md) for more details. *Required* |

#### Query

None

### Response

```javascript
200 OK
X-Ratelimit-Limit: 60
X-Ratelimit-Remaining: 59
```

```javascript
{
    "data": {
        "created_at": "2017-10-17 18:27:02", 
        "email": "johndoe@example.com", 
        "id": 1, 
        "name": "John Doe", 
        "updated_at": "2017-10-26 18:27:49", 
        "verified": 1
    }
}
```

### Example Request

```javascript
curl -i -X GET "https://greenhub.di.ubi.pt/api/v1/me" -H "Authorization: Bearer {your api key}"
```

## Generate New API Key

Generate a new API token key for the current user.

```
PUT /v1/me/token
```

### Request Parameters

#### Header

| Param         | Description                                                                |
| ------------- | --------------------------------------------------------------------------------------- |
| Authorization | A valid API token. See [Authentication](authentication.md) for more details. *Required* |

#### Query

None

### Response

```javascript
200 OK
X-Ratelimit-Limit: 60
X-Ratelimit-Remaining: 59
```

```javascript
{
    "data": {
        "api_token": "{new api token here}"
    }
}
```

### Example Request

```javascript
curl -i -X PUT "https://greenhub.di.ubi.pt/api/v1/me/token" -H "Authorization: Bearer {your api key}"
```