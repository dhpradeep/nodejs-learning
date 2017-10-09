function printHelp(){
	console.log("index.js (c) pradeep");
	console.log("");
	console.log("usage:");
	console.log	("--help print this help");
	console.log	("--name say hello to {name}");
	console.log("");
}

var args = require('minimist')(process.argv.slice(2), { string: "name" });

if (args.help || !args.name) {
	printHelp();
	process.exit(1);
}

var name = args.name;

console.log("hello " + name);

//to run type = node index.js --name=world