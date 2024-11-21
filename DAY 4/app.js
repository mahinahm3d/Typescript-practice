// FOREACH LOOP
var frnd = ["John", "Mary", "Sarah", "David"];
frnd.forEach(function (frnd) {
    console.log(frnd);
});
for (var i_1 = 1; i_1 < 6; i_1++) {
    console.log(i_1 + " - Exams will come!");
}
// WHILE LOOP
var i = 0;
while (i <= 10) {
    console.log("5x".concat(i, "=").concat(i * 5));
    i++;
}
// DO WHILE LOOP
var j = 0;
do {
    console.log("bus starting now");
    j++;
} while (j < 4);
// FOR IN
var bioData = {
    name: "John",
    age: 28,
    Quarter: "one"
};
for (var key in bioData) {
    console.log(key);
    console.log(bioData[key]);
}
