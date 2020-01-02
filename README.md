## Required dependencies

- Expo-CLI 3.11+
- Node.js 10.15+

## Local setup

Navigate to the `/jsonserver` folder

Run `yarn db`

Open a new terminal and run `yarn tunnel`

Then copy the url from ngrok (p.e http://bf4d503d.ngrok.io)

Replace the baseURL value in `src/api/jsonServer.js` with the ngrok url

Go back to the root of the project

Start the project running `yarn start`
