const fs = require("fs");

const newrecipes = [
	{
		id: "1",
		https: "https://somedomainname",
		name: "name",
		categories: ["vegan", "healthy"],
		content: {
			ingredients: ["some", "more", "ingredients"],
			method: "Some Text"
		}
	},
	{
		id: "2",
		https: "https://anotherdomainname",
		name: "name2",
		categories: ["healthy", "vegan"],
		content: {
			ingredients: ["some", "more", "ingredients"],
			method: "Some Other Text"
		}
	},
	{
		id: "3",
		https: "https://another2domainname",
		name: "name3",
		categories: ["healthy", "vegan"],
		content: {
			ingredients: ["some", "more", "ingredients"],
			method: "Some More Text"
		}
	}
];

//var data = JSON.stringify(myrecipes);

function writeFile(data) {
	const newObj = data.concat(newrecipes);
	const newObjstr = JSON.stringify(newObj);
	fs.writeFile("./config.json", newObjstr, function (err) {
		if (err) {
			console.log("There has been an error saving your config");
			console.log("err.message");
			return;
		}
		console.log("configuration saved succesfully");
	});
}

function loadFile() {
	const file = fs.readFileSync("./config.json");
	try {
		dataObj = JSON.parse(file);
		return dataObj;
	} catch (err) {
		console.log("there has been an error parsing your json");
		console.log(err);
	}
}
function getRandomIndex() {
	const index = Math.floor(Math.random() * 3);
	return index;
}

function getUserInput(name) {
	return name;
}

/*function deleteObj(data) {
    data.findIndex((currentValue, index, arr) => {
        const userInput = getUserInput('name2');

        const name = currentValue.name ///whyyyy is currentValue undefined??
        if( userInput == name) {
            data.splice(index,1)
            const newObjstr = JSON.stringify(data);
            fs.writeFile('library.json', newObjstr, (err) => {
                if (err) {
                    console.log('There has been an error saving your config');
                    console.log('err.message');
                    return;
                }
                console.log('configuration saved succesfully')
            })
        }
        else {
            console.log('name doesnt match')
        }
        /*console.log('id ' + currentValue.name);
        console.log('index: ' + index);
        console.log('arr: ' + arr);
    })
}*/

const data = loadFile();
//deleteObj(data)
//writeFile(data);

//const index  = getRandomIndex()
//console.log(index)
//console.log(dataObj[0].name)
