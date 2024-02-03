// first lesson

// примитивы: number, string, boolean, null, undefined, NaN, Infinity, Symbol
// Объекты: array, function, object

// differences
// 1. сложная структура
// 2. имеют свойства и методы
// 3. ссылочный тип данных


const num = 5

const obj = {}  // new Object ()
const num_2 = num
const obj_2 = obj

obj_2.name = 'Alex'
console.log(obj)

const arr = []  // new Array ()

class Student {

}

const st = new Student()

const user = {
    name: 'Alexa',
    age: 23,
    isStudent: false
}

const copyUser = {
    ...user,
    // name: 'Alexa',
    // age: 23
    // isStudent: false
    isStudent: true
}

const arr1 = [1, 2, 3, 4, 5]
const arrCopy = [...arr1]

console.log(user === copyUser)  // false

function stateChecker(current, next) {
    if (current === next) {
        console.log('no changes')
    } else {
        console.log('the app has new updates')
    }
}

stateChecker(user, copyUser)


const studentLow = [
    {
        name: 'John',
        age: 34,
        address: {
            city: 'New York',
            country: 'US'
        }
    },
    {
        name: 'Leon',
        age: 56,
        address: {
            city: 'Osh',
            country: 'Kyrgyzstan'
        }
    }
]

//CRUD
// Create
// Read  ---> (filter, sort, search)
// Update
// Delete


// create --> {...user}
const newStudentLow = {
    name: 'Karen',
    age: 19
}

const student_1 = [...studentLow, newStudentLow]
console.log(student_1)


// update
const student_2 = student_1.map(el => el.name === 'john' ? {...el, age: 45} : el)
stateChecker(student_1, student_2)


// delete Bob
const student_3 = student_2.filter(el => el.name !== 'Bob')



const superUser = {
    id: 1,
    name: 'John',
    userName: 'John01',
    email: 'john@gmail.com',
    address: {
        street: '1480 Jefferson St',
        suite: 404,
        city: 'Des Plaines',
        zipcode: 60016,
        geolocation: {
            lat: 41.79038,
            lng: -87.60104
        }
    },
    phone:  '+1 (847) 358-3350',
    website:  'www.website.com',
    company: {
        name:  "SuperCo",
        catchPrase: 'Just do it',
        bs: "Making things happen"
    }
}


const superUserCopy = {...superUser, company: {...superUser.company, catchPrase: 'lorem'}}
console.log(superUserCopy);


const superUserCopy2 = {...superUser, address: {...superUser.address, suite: 505}}
console.log(superUserCopy2);

const superUserCopy3 = {...superUser, address: {...superUser.address, geolocation: {...superUser.address.geolocation, lat: 23.23232323}}}
console.log(superUserCopy3);


