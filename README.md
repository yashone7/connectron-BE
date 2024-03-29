# covid-19-ri

>

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

   ```
   cd path/to/covid-19-ri
   npm install
   ```

3. Start your app

   ```
   npm start
   ```

## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.

## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g @feathersjs/cli          # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers help                           # Show all commands
```

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).

## Problem Statement:

Analysing probable and possible hotspots of infection both current and upcoming cases is very tedious without a visual aid i.e geographic data. Using location-based approach these deficiencies can be overcome.

## What kind of problems can be addressed

- Predicting hotspots of infection which are likely to relapse is very essential to containing the coronavirus.
- Geo-visualization plays a pivotal role in determining the areas from which lock-down can be lifted, this can be helpful in determining areas in which economic activityies can be started.

## What problems we are attempting to solve?

- Analysing and predicting both current, prospective and probable hotspots of infection.
- Geo-visualizing the results of the tests conducted by doctors.
- racking patients with test positive test result.

## How Our solution is different from the existing ones?

- The current data does not furnish high-resolution location data, and hence decision making cannot be hyperlocal.
- Our platform offers high-resolution spatial data which facilitates a hyperlocal community-based approach for combating corona virus.

## Technology stack used

- NodeJS for the server (Open Source)
- ExpressJS for APIs (Open Source)
- ReactJS for frontend (Open Source)
- Uber’s React-Map-GL for Maps (Open Source)
- Uber’s Deck.GL for geo-visualization (Open Source)
- MongoDB as database
- JsonWebToken for security (Open Source)
- Mapbox - base map provider
- Turf Js for geo-analytics (Open Source)

### Brief implementation of our idea

The doctor when conducting tests will capture the location of the patient with our app after the results come, the status of the patient will be updated. The status may be positive negative and pending. Using this data, we can visualize it using deck.gl, furthermore meaningful analysis can be done by using turf js.

#### Limitations

- Inventory control of every hospital is independent and API integration is a time-consuming process, and hence cannot be accomplished in the time given to us.
- This platform is dependent on the number of tests being made if not enough tests are conducted analysis would not yield meaningful results.

## ConneTron

### To dos

[ ] - Add email verfication functionality

[ ] - Useres should be able to comment on the feeds
