# Pagination

All collection responses are paginated. Paginated responses can accept two additional parameters: `page` and `per_page`. The default value for `page` is 1 and default value for `per_page` is 10.

> Please note that maximum value of `per_page` can be is `100`.

## Paginated Response

Paginated responses add two keys to the response: `links` and `meta`.

The pagination info is included in the response body. It is important to follow link values that are returned instead of constructing your own URLs.

An example of a paginated response looks like the following:

```javascript
{
    "data": [
        {
            "id": 2506,
            "model": "SM-G920I",
            "manufacturer": "samsung",
            "brand": "samsung",
            "product": "zerofltedv",
            "os_version": "7.0",
            "kernel_version": "3.10.61-11965133",
            "is_root": false,
            "created_at": "2017-10-26 15:39:09",
            "updated_at": "2017-10-26 15:39:09"
        },
        {
            "id": 2507,
            "model": "XT320",
            "manufacturer": "Batmobile",
            "brand": "generic",
            "product": "Batwing",
            "os_version": "4.3.1",
            "kernel_version": "2.6.29-gea477bb",
            "is_root": true,
            "created_at": "2017-10-26 20:23:49",
            "updated_at": "2017-10-26 20:23:49"
        },
        {
            "id": 2508,
            "model": "C2105",
            "manufacturer": "Sony",
            "brand": "Sony",
            "product": "C2105_1271-9849",
            "os_version": "4.2.2",
            "kernel_version": "3.4.0-g74b701b-00054-gde56c65-dirty",
            "is_root": true,
            "created_at": "2017-10-26 20:49:36",
            "updated_at": "2017-10-26 20:49:36"
        }
    ],
    "links": {
        "first": "https://greenhub.di.ubi.pt/api/v1/devices?page=1",
        "last": "https://greenhub.di.ubi.pt/api/v1/devices?page=1",
        "prev": null,
        "next": null
    },
    "meta": {
        "current_page": 1,
        "from": 1,
        "path": "https://greenhub.di.ubi.pt/api/v1/devices",
        "per_page": 10,
        "to": 3
    }
}
```