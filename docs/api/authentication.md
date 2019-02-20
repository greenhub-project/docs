# Authentication

::: tip
You can manage your API key in the GreenHub Farmer web app through the Settings page.
:::

## Public Actions

Some actions can be performed without requiring authentication from a specific user. For example, retrieving the total numbers of samples.

For these actions you don't need an API key.

## User Authentication

Authentication to the API is performed via **HTTP Basic Auth**. This is achieved by sending a valid API key in the request header.

To authenticate requests in this way, pass your API token via the HTTP Authorization header:

```http
Authorization: Bearer greenhub_api_key
```

Alternatively, you can also pass this value on the url using a `api_token` query parameter:

```
https://farmer.greenhubproject.org/api/v1/me?api_token=YOUR_API_KEY
```

All API requests must be made over HTTPS. Calls made over plain HTTP will fail. API requests without authentication will result in a `401 Unauthorized` response.
