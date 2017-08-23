# DYMAJO Transit
This is a transit app! Check it out.

<https://transit.dymajo.com>

## Client Development
- You'll need node.js & npm installed. (at least v8)
- `npm install` to install deps.
- `npm run watch-js` to watch and recompile js
- `npm run watch-css` to watch and recompile css
- `node localserver.js` to run just the client!
- Change the endpoint in config.js to `https://transit.dymajo.com/a` to use the live data. There's an exception for localhost:8009.
- Go to `http://localhost:8009`

## Server Development

### Prereqs
- Microsoft SQL Server Installed
- Sign up for an account at <https://dev-portal.at.govt.nz>
- Set the system environmental variable atApiKey to your API key
- You'll also need Azure Table Storage - install the emulator, or use a testing server. There's instructions in the Azure documentation on how to set credentials.
- Set the sendgrid API key if you want to send emails.

### Database
- Set the connection details in `config.js`
- Run `node server/db/create-database.js` to create the database.
- No migrations yet! 

### Server
- `node app` to run server.
- `npm run build-js` to production build js
- `npm run build-css` to production build css