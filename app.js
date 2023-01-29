let personsName = [
    {
        name: "shako",
        age: "21",
        address: "g.tabidzis 3/5"
    },
    {
        name: "salome",
        age: "18",
        address: "saguramo"
    },
    {
        name: "saba",
        age: "22",
        address: "avlabari"
    },
];

let index = 0
console.log ('my name is ${personsName[index].name}  my age is ${personsName[index].age} my address is ${personsName[index].address}');
let numbers = [18,21,22,34,24];
console.log (numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4]);

if (personsName [1].age < 19) {
    console.log ("i am a teenager")
} else {
    console.log ("i am an adult")
}

let s = 14;
switch (s) {
    case 14:
        console.log ("this is fourteen");
        break;
    case 7:
        console.log ("this is seven");
        break;
    default:
        console.log ("this is another number");
        break;       
}

const weekDays = new Date().getDate; 
switch (weekDays) {
    case 0:
        console.log("sunday");
        break;
    case 1:
        console.log("monday");
         break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4: 
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    default:
        console.log("wrong day");
        break;                         
}