var hello = 'world';
console.log(hello);
var getFullName = function (firstName, lastName) {
    return firstName + '' + lastName;
};
console.log(getFullName('Jon', 'Smith'));
var user = {
    name: 'Paul',
    age: 35,
    getMessage: function () {
        return 'Hello ' + user.name;
    }
};
var user2 = {
    name: 'Jack',
    getMessage: function () {
        return 'Hello ' + user2.name;
    }
};
console.log(user.getMessage());
var username = 'Louis';
var pageName = '1';
var errorMessage = null;
