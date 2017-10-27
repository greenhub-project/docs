# User

User object represents a person who has a valid **GreenHub Farmer** account.

## User Object

| Key        | Type      | Description                                |
| ---------- | --------- | ------------------------------------------ |
| id         | integer   | ID of the user.                            |
| name       | string    | Name of user.                              |
| email      | string    | Email address of user.                     |
| verified   | boolean*  | Whether user account is verified.          |
| created_at | timestamp | Datetime when the record was created.      |
| updated_at | timestamp | Datetime when the record was last updated. |

**Boolean values are stored as TINYINT.*

## Get The User’s Profile

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
  "id": 1,
  "name": "John Doe",
  "email": "johndoe@example.com",
  "verified": 1,
  "created_at": "2017-10-18 16:29:21",
  "updated_at": "2017-10-18 16:32:15"
}
```

### Example Request

```javascript
curl -i -X GET "https://greenhub.di.ubi.pt/api/v1/me" -H "Authorization: Bearer {your api key}"
```