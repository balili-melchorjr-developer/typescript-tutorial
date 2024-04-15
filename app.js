var Access;
(function (Access) {
    Access[Access["ADMIN"] = 0] = "ADMIN";
    Access[Access["MODERATOR"] = 1] = "MODERATOR";
    Access[Access["USER"] = 2] = "USER";
})(Access || (Access = {}));
var student = {
    name: 'Juan',
    age: 19,
    interest: ["Basketball", "Reading"],
    access: [1, "admin"],
    accessType: Access.MODERATOR
};
if (student.accessType === 1) {
    console.log("is admin");
}
console.log(student);
