// FOREACH LOOP

let frnd: string[] = ["John", "Mary", "Sarah", "David"];
frnd.forEach(function(frnd) {
    console.log(frnd);
});

for(let i = 1; i < 6; i++) {
    console.log(i + " - Exams will come!");
}


// WHILE LOOP
let i = 0;
while(i <= 10) {
    console.log(`5x${i}=${i*5}`);
    i++;
}

// DO WHILE LOOP
let j = 0;
do {
    console.log("bus starting now");
    j++;
} while(j < 4);

// FOR IN
let bioData = {
    name: "John",
    age: 28,
    Quarter: "one"
};

for(let key in bioData) {
    console.log(key);
    console.log(bioData[key]);
}

