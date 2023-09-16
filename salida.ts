console.log("Hello World");

//types 

var myString : string = "Hello World";
myString = 22 + "";
var myNumber : number = 4;
var myBool : boolean = false;
var myVar : any = "hello";
myVar = false;

//arrays

var StringArray : string[] = ["item1","item2",""];
var NumberArray : number[] = [1, 2, 3, 4];
var BooleanArray : boolean[] = [true, false, false];
var AnyArray : any[] = [1, 2, true, "hello", []];

//tuple

var StrNumTuple : [string, number];
StrNumTuple = ["hello", 22];

//void, undefined, null

let myNull : null = null;
let myUndefined : undefined = undefined;

//functions

function getSum(num1: number, num2: number): number{
    return num1 + num2;
}

let mySum = function(num1: number | string, num2: number | string): number{
    if(typeof(num1) === 'string'){
        num1 = parseInt(num1);
    }
    if(typeof(num2) === 'string'){
        num2 = parseInt(num2);
    }
    return num1 + num2;
}

function getName(firstName: string, lastName: string): string{
    return firstName +' '+ lastName;
}

//interfaces

interface iToDo{
    title: string;
    text : string;
}

function showToDo(toDo: iToDo){
    console.log(toDo.title + ' - ' + toDo.text);
}
showToDo({
    title: 'WPT',
    text: ' Madrid'
})

//clases

class User{
    name : string;
    public email : string;
    protected age : number;
    
    constructor(name: string, email: string, age: number ){
        this.name = name;
        this.email = email;
        this.age = age;
    }

    register(){
        console.log(this.name + ' is registered');
    }

    payInvoice(){
        console.log(this.name + ' paid invoice');
    }
}

var Toni = new User('Toni', 'toni@upc.edu', 22);

class Member extends User{
    id: number;
    
    constructor(id: number, name: string, email: string, age: number){
        super(name, email, age);
        this.id = id;
    }

    payInvoice() {
        super.payInvoice();        
    }
}

var Agustín = new Member(1, 'Agustín', 'tapia@wpt.com', 24);
Agustín.payInvoice();

//
console.log(Toni.register());

document.write(Toni.name);
