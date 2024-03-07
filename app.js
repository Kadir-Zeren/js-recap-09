const mayislar = [5500, 8000, 6500, 9000, 10000, 15000, 25000];

const toplamMayis = mayislar.reduce((toplam, deger) => toplam + deger, 0);

console.log("TOPLAM MAYIS:", toplamMayis);

const zamliMaasToplami = mayislar
  .filter((m) => m >= 6000 && m <= 10000)
  .map((m) => m * 1.1)
  .reduce((t, m) => t + m);

console.log("ZAMLI MAASLAR:", zamliMaasToplami);

console.log("*********");

const ages = [18, 22, 78, 34, 78, 79, 15];
const check = ages.every((age) => age >= 18);
check ? console.log("All ages are over 18") : console.log("Sum are under 18");

const over80 = ages.some((a) => a >= 80);
console.log(over80);

const ageBigThan30First = ages.find((age) => age >= 30);
const ageBigThan30Last = ages.findLast((age) => age >= 30);
console.log(ageBigThan30First, ageBigThan30Last);

console.log(ages.find((age) => age >= 80));

const foundIndex = ages.findIndex((age) => age > 18);
console.log(foundIndex);

let car = {
  brand: "Mercedes",
  model: 2020,
  engine: 2000,
  speed: 5,
  color: ["pink", "black", "blue", "green"],
};

console.log(car);

console.log(car.brand);
console.log(car.brand[0]);

console.log(car.brand);
car.color.forEach((c) => console.log(c));

console.log(car.engine);

car.speed = 7;
car.color = "Morcivert";
car.class = "E";

console.log(car);

console.log("ENGINE:", car["engine"]);

// const myKey = prompt(
//   "Araba ile ilgili neyi ogrenmek isteriniz: speed, color,engine..."
// );
// alert(car[myKey]);

const myCar = new Object();
myCar.brand = "Mercedes";
myCar.model = 2022;
myCar.speed = 7;

console.log(myCar.speed);
console.log(myCar["model"]);

console.log(myCar);

function Personel(id, name, age, salary) {
  this.id = id;
  this.name = name;
  this.age = age;
  this.salary = salary;
}

const person1 = new Personel("1234567890", "Ahmet Can", 33, 30000);
const person2 = new Personel("123456745454", "Mehmet Veli", 23, 10000);

const personel = {
  name: "Ahmet",
  surname: "Canan",
  dob: 1990,
  salary: 30000,
  drivingLicense: true,
  calculateAge: function () {
    return new Date().getFullYear() - this.dob;
  },
};

console.log(personel.name + " " + personel.surname);

console.log("AGE:", personel.calculateAge());

const team = [
  {
    name: "Ahmet",
    surname: "Can",
    job: "Developer",
    age: 30,
  },
  {
    name: "Mary",
    surname: "Bary",
    job: "tester",
    age: 22,
  },
  {
    name: "Hazel",
    surname: "Nut",
    job: "Developer",
    age: 20,
  },
];

console.log(team);
console.log(team[1]);
console.log(team[1].name);
console.log(team[2].age);

team.forEach((p) => console.log(p.job));

const personelAges = team.map((person) => person.age + 1);
console.log(personelAges);

const teamFullName = team.map((p) => {
  return {
    fullName: p.name.toUpperCase() + " " + p.surname.toUpperCase(),
    age: p.age + 5,
  };
});

const teamFullName1 = team.map((p) => ({
  fullName: p.name.toUpperCase() + " " + p.surname.toUpperCase(),
  age: p.age + 5,
}));

console.log(teamFullName);
console.log(teamFullName1);
