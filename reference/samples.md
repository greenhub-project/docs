# Samples

- [Sample Object](#sample-object)

## Sample Object

Device object represents an Android device registered on the API server. **A registration is one installation** of the app BatteryHub on the device. 
In case a device installs the app BatteryHub more than once, one device object will be created per each installation.

| Key              | Type     | Description                                                                              |
| ---------------- | -------- | ---------------------------------------------------------------------------------------- |
| id               | integer  | ID of the sample.                                                                        |
| timestamp        | datetime | Time stamp when the sample was created on the device.                                    |
| app_version      | integer  | BatteryHub app version.                                                                  |
| database_version | integer  | BatteryHub database version.                                                             |
| battery_state    | string   | State of battery. Can be `Charging`, `Discharging`, `Full`, `Not Charging` or `Unknown`. |
| battery_level    | float    | Battery Level. Ranges from `0.0` to `1.0`.                                               |
| created_at       | datetime | Time stamp when the record was created.                                                  |
| updated_at       | datetime | Time stamp when the record was last updated.                                             |
