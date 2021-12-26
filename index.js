//program to find nth number of geometric progression

//an=arn−1

var a = 4;//let a be the first term of g.p
var r = 2;//let r be the common ratio
var n = 10;//n be the nth number we want to find of our g.p,, so 
var c = (a * Math.floor(Math.pow(r, n - 1)));//math floor is used if in anycase we have decimal value than we can get a whole number and math.power is used towrite it in power form
console.log(c)