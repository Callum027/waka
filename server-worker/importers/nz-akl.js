const path = require('path')
const request = require('request')
const fs = require('fs')
const log = require('../../server-common/logger.js')

const auckland = {
  zipLocation: path.join(__dirname, '../../cache/at.zip'),
  files: [
    {
      name: 'agency.txt',
      table: 'agency',
      versioned: false,
    },
    {
      name: 'stops.txt',
      table: 'stops',
      versioned: true,
    },
    {
      name: 'routes.txt',
      table: 'routes',
      versioned: true,
    },
    {
      name: 'trips.txt',
      table: 'trips',
      versioned: true,
    },
    {
      name: 'stop_times.txt',
      table: 'stop_times',
      versioned: true,
    },
    {
      name: 'calendar.txt',
      table: 'calendar',
      versioned: true,
    },
    {
      name: 'calendar_dates.txt',
      table: 'calendar_dates',
      versioned: true,
    },
  ],
  shapeFile: 'shapes.txt',
  download: () => {
    return new Promise((resolve, reject) => {
      const url = 'https://atcdn.blob.core.windows.net/data/gtfs.zip'
      log('Downloading GTFS Data from AT')
      const gtfsRequest = request({url: url}).pipe(fs.createWriteStream(auckland.zipLocation))
      gtfsRequest.on('finish', function() {
        log('Finished Downloading GTFS Data')
        resolve()
      })
      gtfsRequest.on('error', reject)
    })
  }
}
module.exports = auckland