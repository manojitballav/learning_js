/*Declaring functions in js*/
function functionname(){
	console.log("Hello from the function");
}
functionname();

/*using return type with a function*/
function retFunction(){
	return "Hello";
}
var var3 = retFunction();
alert(var3);

/*passing parameters using functions*/
function register(firstname,lastname){
	var name = alert("Hello "+firstname+" " + lastname);
}
register("Manojit", "Ballav");
register("Melissa", "Pereira");


/*Creating an object*/
var obj = {
	name : "Manojit",
	age : 12,
	profession : "developer"
};
alert(obj.name);

/*creating an object for an object*/


var obj3 = {
	name : "Manojit",
	age : 12,
	profession : "developer"
};
var obj4 = Object.create(obj3);
alert(obj4.name);

/*Objects and prototype*/
var obj5 = {
	os : "Windows",
	architec : 64,
	proc : "intel"
};
var obj6 = Object.create(obj5);
console.log(obj6.os);

/*Prototyping*/

var phones = {
	manuf : "",
	os : "",
	archite : 0,

	describe: function(){
		var description = "This is a phone manufactured by " + this.manuf + " running "+ this.os + " and is based on "+ this.archite + ".";
		return description;
	}
};
var Nokia = Object.create(phones);
Nokia.manuf = "Nokia";
Nokia.os = "Symbian";
Nokia.archite = 32;


var Samsung = Object.create(phones);
Samsung.manuf = "Samsung";
Samsung.os = "BADA";
Samsung.archite = 64;
console.log(Samsung.description);
console.log(Nokia.description);

/*Init function*/
/*the above code can be made smaller using function*/
var phones = {
	init: function(manuf,os,price){
		this.manuf = manuf;
		this.os = os;
		this.price = price;
	},
	describe : function(){
		var description = "This is a phone manufactured by " + this.manuf + " running " +this.os+ " and is priced at "+this.price+" .";
		return description;
	}
};
var Nokia = Object.create(phones);
Nokia.init("Nokia","Symbian","₹5000");
var Samsung = Object.create(phones);
Samsung.init("Samsung","BADA","₹10000");
var Apple = Object.create(phones);
Apple.init("Apple","ios","₹50000");
console.log(Nokia.describe());
console.log(Samsung.describe());
console.log(Apple.describe());

/*Arrays*/
var arrayName = {
	eleName1 : "ele1",
	eleName2 : "ele2",
	eleName3 : "ele3"
};
console.log(arrayName.eleName3);

/*Manipulating array*/
/*creating an array*/
var films = ["Windows Mobile","Android","Linux","Firefox OS", "Debian","OpenSuse","Elementary OS"];
console.log((films).length);

/*creating an empty array*/
var emptyArray = [];
console.log((emptyArray).length);

/*to print all the elements of an array we will use loop*/
var phones = ["Windows Mobile","Android","Linux","Firefox OS", "Debian","OpenSuse","Elementary OS"];
for (var i = 0; i < (phones.length)-1; i++){
	console.log(phones[i]);
}

/*to add an element in an array*/
var phones = ["Windows Mobile","Android","Linux","Firefox OS", "Debian","OpenSuse","Elementary OS"];
phones.push("Arch Linux");
for (var i = 0; i < (phones.length); i++){
	console.log(phones[i]);
}

/*creating a object and adding arrays to it*/
var opsystem = {
	init: function(name,rate){
		this.name = name;
		this.rate = rate;
	},

	describe : function(){
		var description = this.name + " is rated as " + this.rate;
		return description;
	}
};

var os1 = Object.create(opsystem);
os1.init("Windows","OS of the masses");
var os2 = Object.create(opsystem);
os2.init("Appple","OS of the rich");
var os3 = Object.create(opsystem);
os3.init("Linux","OS of the coders");

var oss = [];
oss.push(os1);
oss.push(os2);
oss.push(os3);

oss.forEach(function(opsystem){
	console.log(opsystem.describe());
});