// Anonymous literals types & object
let student: {
  stdid: number;
  stdname: string;
  fname: string;
} = {
  stdid: 1234,
  stdname: "Alice",
  fname: "John Smith"
};
console.log(student);

type countryname = "USA" | "Canada" | "UK";
let country: countryname;
country = "USA";
country = "Canada";
country = "UK";
country = "Australia"; // error

// Index signature
interface employe {
  employeID: number;
  employeName: string;
  employeSalary: number;
}
let collectionemploye: employe[] = [
  {
    employeID: 2345,
    employeName: "Alice",
    employeSalary: 50000
  }
];
console.log(collectionemploye);

// Type assertion
let somevalue: unknown = "hello";
let strlength: number = (somevalue as string).length;
console.log(strlength);
