# Rate Limiting

Rate limiting of the API is primarily on a per-user basis — or more accurately described, per user API token. It allows **60 requests per minute per API token**. On each request, your current rate limit status is returned in the response headers:

```
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 55
```

If you get [response code 429](http://tools.ietf.org/html/rfc6585), it means that you have sent too many requests. If this happens, have a look in the **Retry-After** header, where you will see a number displayed. This is the amount of **seconds that you need to wait**, before you can retry sending your requests.