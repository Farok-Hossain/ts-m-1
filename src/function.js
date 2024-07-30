function add(num1, num2) {
    return num1 + num2;
}
var add2 = function (num3, num4) {
    return num3 + num4;
};
var arr = [1, 4, 5, 7];
var newArr = arr.map(function (elem) { return console.log(elem * elem); });
var person = {
    name: "farok",
    balance: 10,
    AddBalance: function (money) {
        return this.balance + money;
    },
};
var myFriends = ["chandler", "joey", "tessa"];
var newFriends = ["monica", "rachel"];
myFriends.push.apply(myFriends, newFriends);
console.log(myFriends);
// rest parameter
var greetFriends = function () {
    var friends = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        friends[_i] = arguments[_i];
    }
    friends.forEach(function (friend) { return console.log("Hi ".concat(friend)); });
};
greetFriends("Hasem", "kashem", "abol", "karim", "jonto");
