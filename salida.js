var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("Hello World");
//types 
var myString = "Hello World";
myString = 22 + "";
var myNumber = 4;
var myBool = false;
var myVar = "hello";
myVar = false;
//arrays
var StringArray = ["item1", "item2", ""];
var NumberArray = [1, 2, 3, 4];
var BooleanArray = [true, false, false];
var AnyArray = [1, 2, true, "hello", []];
//tuple
var StrNumTuple;
StrNumTuple = ["hello", 22];
//void, undefined, null
var myNull = null;
var myUndefined = undefined;
//functions
function getSum(num1, num2) {
    return num1 + num2;
}
var mySum = function (num1, num2) {
    if (typeof (num1) === 'string') {
        num1 = parseInt(num1);
    }
    if (typeof (num2) === 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
function getName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
function showToDo(toDo) {
    console.log(toDo.title + ' - ' + toDo.text);
}
showToDo({
    title: 'WPT',
    text: ' Madrid'
});
//clases
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    User.prototype.register = function () {
        console.log(this.name + ' is registered');
    };
    User.prototype.payInvoice = function () {
        console.log(this.name + ' paid invoice');
    };
    return User;
}());
var Toni = new User('Toni', 'toni@upc.edu', 22);
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Member;
}(User));
var Agustín = new Member(1, 'Agustín', 'tapia@wpt.com', 24);
Agustín.payInvoice();
//
console.log(Toni.register());
document.write(Toni.name);
