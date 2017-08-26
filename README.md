
## Prerequisites
### Setup Google Default Credentials

The environment variable GOOGLE_APPLICATION_CREDENTIALS is checked. If this variable is specified it should point to a file that defines the credentials. The simplest way to get a credential for this purpose is to create a Service account key in the Google API Console:
Go to the API Console Credentials page.

From the project drop-down, select your project.

On the Credentials page, select the Create credentials drop-down, then select Service account key.
From the Service account drop-down, select an existing service account or create a new one.
For Key type, select the JSON key option, then select Create. The file automatically downloads to your computer.
Put the *.json file you just downloaded in a directory of your choosing. This directory must be private (you can't let anyone get access to this), but accessible to your web server code.


Set the environment variable `GOOGLE_APPLICATION_CREDENTIALS` to the path of the JSON file downloaded.


Detail:
https://developers.google.com/identity/protocols/application-default-credentials

### Set your project ID
Set the environment variable `GOOGLE_APPLICATION_PROJECT_ID`

## Installation
`npm install`

`node run`
