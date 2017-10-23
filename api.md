# Getting Started

- [Sign Up](#sign-up)
- [API Overview](#api-overview)
  - [API Rate Limits](#api-rate-limits)
- [API Quick Reference](#api-quick-reference)

## Sign Up

In order to start using the GreenHub API, first you will need to create an account in our GreenHub Farmer web app.

1. Head over to [https://greenhub.di.ubi.pt/register](https://greenhub.di.ubi.pt/register).
2. Fill the necessary fields to complete the registration process.
3. After you create your account, it will be necessary to verify your email address.
4. So check your inbox, and follow the email instructions you just got.
5. You should be redirected to the GreenHub Farmer homepage and you should see an alert saying that you are now verified!

You can now login with your credentials and use the web app at [https://greenhub.di.ubi.pt/login](https://greenhub.di.ubi.pt/login).

That's it! It will only takes a couple of minutes to create an account.

## API Overview

The base url for the API is:

```
https://greenhub.di.ubi.pt/api/
```

Before start using the API, be sure to understand our privacy policy. You can read it [here](https://greenhubproject.org/privacy).

### API Rate Limits

Rate limiting of the API is primarily on a per-user basis — or more accurately described, per user access token. It allows 60 requests per minute per access token.

When an application exceeds the rate limit for a given API endpoint, the API will return a [HTTP 429 "Too Many Requests"](http://tools.ietf.org/html/rfc6585) response code.

## API Quick Reference

All parameters are enclosed by curly brackets, e.g. `{parameterName}` it should be replace with paramater value.

Below are listed all endpoints available, you can find more detailed information in other sections of this documentation. This is simply a quick reference:

<table class="table is-striped">
  <thead>
    <th>Method</th>
    <th>URI</th>
    <th>Parameters values</th>
    <th>Authentication</th>
  </thead>
  <tbody>
    <tr>
      <td>GET</td>
      <td><code>v1/count/{model}</code></td>
      <td>devices, samples</td>
      <td><span class="tag is-success">Yes</span></td>
      </tr>
    <tr>
      <td>GET</td>
      <td><code>v1/datasets/create</code></td>
      <td>Check <a href="/docs/api/objects/datasets" class="">Datasets Docs</a></td>
      <td><span class="tag is-success">Yes</span></td>
    </tr>
    <tr>
      <td>GET</td>
      <td><code>v1/datasets/{token}</code></td><td>token is obtained via email</td><td><span class="tag is-success">Yes</span></td></tr><tr><td>GET</td><td><code>v1/datasets/{token}/download</code></td><td>token is obtained via email</td><td><span class="tag is-danger">No</span></td></tr><tr><td>GET</td><td><code>v1/devices</code></td><td>Check <a href="/docs/api/objects/devices" class="">Devices Docs</a></td><td><span class="tag is-success">Yes</span></td></tr><tr><td>GET</td><td><code>v1/samples</code></td><td>Check <a href="/docs/api/objects/samples" class="">Samples Docs</a></td><td><span class="tag is-success">Yes</span></td></tr><tr><td>GET</td><td><code>v1/status</code></td><td>None</td><td><span class="tag is-danger">No</span></td></tr><tr><td>POST</td><td><code>v1/token/new</code></td><td>None</td><td><span class="tag is-success">Yes</span></td></tr><tr><td>GET</td><td><code>v1/user</code></td><td>None</td><td><span class="tag is-success">Yes</span></td></tr></tbody></table>