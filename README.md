# Voicebot Backend

This repository houses the source code for the Fulfillment function which serves as the Webhook for our DialogFlow Voice Agent supporting Meijer stores and the Meijer call center.

## Installation

Clone the repository.
Use the package manager [npm](https://www.npmjs.com/) to install all specified dependencies

```bash
git clone (TODO: Add Repo link)
cd fulfillment
npm install
```

## Dependencies

In addition to the following software, there are a number of files needed to run + deploy this project that are not stored on this repository. The way to retrieve it is discussed in the next section.

- TODO: Update this info `fulfillment-keys-dev.json` allows a local instance to retrieve the API Subscription Key and Constructor API Key.
- TODO: Update this info `.env`, `.env.development`, `.env.staging`, `.env.production` store some environment variables and are utilized by `scripts/updateYaml.js`. We need to create `.env` in the `/fulfillment` directory and it has to have the following contents based on the dialogflow that is being pointed to.

TODO: Update these env vars

```bash
PORT=8080
NODE_ENV=`development`
GOOGLE_CLOUD_PROJECT="meijer-dialogflow-chatbot-dev"
GOOGLE_APPLICATION_CREDENTIALS="fulfillment-keys-dev.json"
```
