# Schema

[[toc]]

## Location

The base address of the API is `https://farmer.greenhubproject.org/api/`. Responses are sent as JSON.

## Version

The API current version is **v1**. You should indicate the version via the uri:

```
https://farmer.greenhubproject.org/api/v1/
```

## HTTP Verbs

The GreenHub API uses HTTP verbs appropriate to each action.

| Verb   | Description           |
| ------ | --------------------- |
| GET    | Retrieving resources. |
| POST   | Creating resources.   |
| PUT    | Updating resources.   |
| DELETE | Deleting resources.   |

## Response Codes

The GreenHub API returns HTTP status codes in addition to JSON-based error messages.

It attempts to return appropriate HTTP status codes for every request.

| Code | Description                                                                                                                                                                                                                                                                           |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2xx  | This range of response code indicates that request was fulfilled successfully and no error was encountered.                                                                                                                                                                           |
| 400  | This return code indicates that there was an error in fulfilling the request because the syntax of URL was incorrect. The detail of the error will present in the body of response. Please do not repeat this request without modification.                                           |
| 401  | This return code means that we are not able to authenticate your request. Please make sure that a correct access token is provided in the request in the appropriate format.                                                                                                          |
| 404  | This response indicates the URI requested is invalid or the resource requested, such as a sample, does not exist.                                                                                                                                                                     |
| 422  | This response means that the server understands the content type of the request entity, and the syntax of the request entity is correct. However some validation logic is failing.                                                                                                    |
| 429  | This response code indicates that you have exceeded rate limit for using the API. See [Rate Limiting](/api/rate-limiting.md) for more details.                                                                                                                                        |
| 500  | This response code indicates that there was an internal server error while processing the request. We are automatically notified of these errors, however if you are seeing these for extended amount of time, then please report to [dev@hmatalonga.com](mailto:dev@hmatalonga.com). |
| 502  | This response indicates that GreenHub server is down, or being upgraded.                                                                                                                                                                                                              |

## Error Messages

If an error occurs, whether on the server or client side, the error message will be returned in an `message` string. For example:

```http
401 Unauthorized
```

Example error message:

```json
{
	"message": "Unauthenticated."
}
```

## Data Wrapping

By default, all request responses, return the query result(s) wrapped in a `data` key. Within it, all keys are sorted alphabetically.
So, for example, a typical collection response looks like the following:

```json
{
	"data": [
		{
			"id": 1,
			"model": "HTC One M9",
			"manufacturer": "HTC",
			"brand": "htc",
			"product": "himauhl_orange_fr-b2b",
			"os_version": "7.0",
			"kernel_version": "3.10.84-perf-g32dec9b",
			"is_root": false,
			"created_at": "2017-10-24 16:13:50",
			"updated_at": "2017-10-24 16:13:50"
		},
		{
			"id": 2,
			"model": "SM-G930F",
			"manufacturer": "samsung",
			"brand": "samsung",
			"product": "heroltexx",
			"os_version": "7.0",
			"kernel_version": "3.18.14-11104523",
			"is_root": false,
			"created_at": "2017-10-24 17:51:34",
			"updated_at": "2017-10-24 17:51:34"
		}
	]
}
```
