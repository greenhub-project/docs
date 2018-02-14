# Authentication

> You can manage your API key in the GreenHub Farmer web app through the Settings page.

All requests to the GreenHub API require authentication.

Authentication to the API is performed via **HTTP Basic Auth**. This is achieved by sending a valid API key in the request header.

To authenticate requests in this way, pass your API token via the HTTP Authorization header:

```
Authorization: Bearer greenhub_api_key
```

Alternatively, you can also pass this value on the url using a `api_token` query parameter:

```
https://greenhub.di.ubi.pt/api/v1/me?api_token=YOUR_API_KEY
```

All API requests must be made over HTTPS. Calls made over plain HTTP will fail. API requests without authentication will also fail.
