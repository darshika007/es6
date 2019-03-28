// console.log('Hello World');

"use strict";
//  var a = 'Test1';
//  var b = 'Test2';

//  console.log(a);
//  console.log(b);

/*
function testVar(){
    var a = 30;
    if(true){
        var a = 50;
        console.log(a);
    }
    console.log(a);
}
testLet();
function testLet(){
    let a = 30;
    if(true){
        let a = 50;
        console.log(a);
    }
    console.log(a);
}

for(let i=0;i<10;i++){
    console.log(i);
}

console.log(i);
*/

// const colors = [];

// colors.push('Pink');
// colors.push('Purple');

// colors = 'Black';

// console.log(colors);

class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;

    }

    static countUsers(){
        console.log('There are 50 users');
    }

    register(){
        console.log(this.username+' is now registered');
    }
}

// let bob = new User('Bob', 'bob@gmail.com', '1234');

// bob.register();

// User.countUsers();

class Member extends User{
    constructor(username, email, password, memberPackage){
        super(username, email, password);
        this.package = memberPackage;
    }

    getPackage(){
        console.log(this.username+' is subscribed to the '+this.package+' package');
    }
}

let mike = new Member('Mike', 'mike@gmail.com', '123', 'Standard');
// mike.getPackage();
mike.register();

let name='John';

function makeUpperCase(word){
    return word.toUpperCase();
}

let template = 
`<h1>${makeUpperCase('Hello')}, ${name}</h1>
<p>This is a simple template in Javascript.</p>`;
document.getElementById('template').innerHTML = template;


let args1 = [1,2,3];
let args2 = [4,5,6];

function test(){
    console.log(args1+','+args2);
}

// test.apply(null,args);
test(...args1,...args2);


let myArray = [11,22,33,44,45];
let mySet = new Set(myArray);

mySet.add('100');
mySet.add({a:1,b:2});
mySet.delete(33);
mySet.add('100');
mySet.add('200');

mySet.forEach(function(val){
    console.log(val);
})



let myMap = new Map([['a1', 'Hello'], ['a2', 'Wassup?']]);
myMap.set('a3','Foo');

console.log(myMap);



let carWeakSet = new WeakSet();

let car1 = {
    make: 'Honda ',
    model: 'City'
}

console.log(carWeakSet);



function Prefixer(prefix){
    this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function(arr){
   
        return arr.map((x) => {
        console.log(this.prefix + x);

    });
}

let pre = new Prefixer('Hello ');
pre.prefixArray(['Brad', 'Jeff']); 


//Immediately Resolved
var myPromise = Promise.resolve('Foo');

myPromise.then((res) => console.log(res));


function *g1(){
    console.log('Hello');
    yield 'Yield 1 Ran..';
    console.log('World');
    yield 'Yield 2 Ran..';
    return 'Returned..';
}

var g = g1();

console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
