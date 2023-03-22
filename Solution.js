// Solution 

// Checking Is The Number Even 
const Even = (num) => num % 2 === 0;

// Function To Sort The Arrays Via People Even Ages 
function sortFunction(array) {
    array.sort((a, b) => {
        if (Even(a.age) && !Even(b.age)) {
            return -1;
        } else if (Even(a) && Even(b)) {
            return 1;
        }
        return a - b;
    })
}


// Function For vaxTrail
function vaxTrail(arr) {

    let vaccineCenters = {
        A: [],
        B: [],
        C: [],
        D: []
    };

    // Looping The Array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].age >= 20 && arr[i].age <= 30 && arr[i].temperature < 100) {
            vaccineCenters.A.push(arr[i]);
        }
        else if (arr[i].age > 30 && arr[i].age <= 40 && arr[i].temperature < 100) {
            vaccineCenters.B.push(arr[i]);
        }
        else if (arr[i].age > 40 && arr[i].age <= 50 && arr[i].temperature < 100) {
            vaccineCenters.C.push(arr[i]);
        } else if (arr[i].age < 100 && arr[i].temperature >= 100) {
            vaccineCenters.D.push(arr[i]);
        }
    }

    // Sorting The Arrays
    sortFunction(vaccineCenters.A);
    sortFunction(vaccineCenters.B);
    sortFunction(vaccineCenters.C);
    sortFunction(vaccineCenters.D);

    console.log(vaccineCenters);
};

// People Data
const array = [
    {
        name: 'sunil',
        age: 21,
        temperature: 98
    },
    {
        name: 'Biplap',
        age: 22,
        temperature: 98
    },
    {
        name: 'Nayem',
        age: 50,
        temperature: 100
    },
    {
        name: 'Sabnaj',
        age: 51,
        temperature: 101
    },
    {
        name: 'Kabir',
        age: 36,
        temperature: 99
    },
    {
        name: 'Rahul',
        age: 37,
        temperature: 99
    },
    {
        name: 'Paul',
        age: 42,
        temperature: 98
    },
    {
        name: 'Kat',
        age: 41,
        temperature: 98
    }
];

// Calling The Function 
vaxTrail(array);