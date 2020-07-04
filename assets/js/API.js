var http = require("https");

var options = {
	"method": "GET",
	"hostname": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
	"port": null,
	"path": "/recipes/quickAnswer?q=How%20much%20vitamin%20c%20is%20in%202%20apples%253F",
	"headers": {
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
		"x-rapidapi-key": "4bc1af1580msh149729642200a8dp125316jsn18d224cad471",
		"useQueryString": true
	}
};

var req = http.request(options, function (res) {
	var chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		var body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();