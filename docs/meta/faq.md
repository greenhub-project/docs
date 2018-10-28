# FAQ

### What is GreenHub?

> GreenHub is a collaborative approach to power consumption analysis of _Android_ devices.

It is an ecosystem of applications which have as common goal: Gather, query and visualize data about the energy consumption of _Android_ devices. So far a mobile app (_BatteryHub_), a web app (_Farmer_) and a CLI app (_Lumberjack_). Below you can find the links for each app:

- [GreenHub BatteryHub](https://play.google.com/store/apps/details?id=com.hmatalonga.greenhub) - Android app
- [GreenHub Farmer](https://greenhub.di.ubi.pt/) - Backend web app + REST API
- [GreenHub Lumberjack](https://www.npmjs.com/package/greenhub-cli) - A command line app for interacting with the GreenHub REST API

### Why was the GreenHub project created?

When looking for a comprehensive repository of data about mobile devices energy consumption. We realized the information available was rather restricted and scarce. Therefore lacking an open repository of data available to the community, we started this project.

### What kind of data the GreenHub collects?

The kind of data that we gather, mostly concerns the mobile device different statuses such as battery, network, sensors and memory details, etc.

### Why do we need the collected data?

The data collected is used to conduct research and further studies on energy consumption behaviors patterns. As well to provide to the community real-world data either for academic or industrial purposes.

### Does GreenHub collect any personal information?

No, we don't collect any kind of personal information, or any data that could identify any mobile user when using the Android app (_BatteryHub_). Although when creating an account on our web app (_Farmer_) we require some essentials personal details such as the person's name and email for login and contact purposes only. To read more in detail about privacy issues, please refer to our [Privacy Policy](https://greenhubproject.org/privacy/).

### Is the collect data shared?

Yes, all the data collected via the Android app (_BatteryHub_) is shared with the community. No other information is shared elsewhere.

### How can I access the data?

The data can be accessed through 2 different ways:

- Downloading a snapshot of the latest dataset (these are generated weekly at midnight) in csv format.
- Using our REST API which allows to make flexible queries to the data in real-time.

### How is the GreenHub different from similar projects such as Carat?

One of the most important features that distinguishes GreenHub from all other projects is the availability of the collected data to the community in real-time as mentioned before. On the Android app side, we aim to offer a greater range of features available to the user.
