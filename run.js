const BigQuery = require('@google-cloud/bigquery');
const queries = require("./queries.json");
const fs = require('fs');

const projectId = process.env.GOOGLE_APPLICATION_PROJECT_ID;
const outputPath = "./";

for (var i = 0; i < queries.length; i++) {
	getData(queries[i]);
}

function getData(data) {
	const bigquery = BigQuery({
		projectId: projectId
	});

	// Query options list: https://cloud.google.com/bigquery/docs/reference/v2/jobs/query
	const options = {
		query: data.query,
		useLegacySql: false //set true for standard SQL syntax queries.
	};

	// Runs the query
	bigquery
		.query(options)
		.then((results) => {
			fs.writeFile(outputPath + data.outputFileName, JSON.stringify(results[0]), function(err) {
				if (err) {
					console.log(err);
				}
				console.log("The file " + data.outputFileName + " was saved!");
			});
		})
		.catch((err) => {
			console.error('ERROR:', err);
		});
}