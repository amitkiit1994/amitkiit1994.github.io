const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send",
	"method": "POST",
	"headers": {
		"content-type": "application/json",
		"x-rapidapi-key": "14d7a0ce65msha97b6f418d8486dp172f26jsn22d76e015d93",
		"x-rapidapi-host": "rapidprod-sendgrid-v1.p.rapidapi.com"
	},
	"processData": false,
	"data": {
		"personalizations": [
			{
				"to": [
					{
						"email": "john@example.com"
					}
				],
				"subject": "Hello, World!"
			}
		],
		"from": {
			"email": "from_address@example.com"
		},
		"content": [
			{
				"type": "text/plain",
				"value": "Hello, World!"
			}
		]
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});