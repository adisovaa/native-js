let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];


const getNames = (array) => {
    const names = [] // new Array() --> class --> global function constructor
    const getName = el => el.name

    for (let i = 0; i < array.length; i++) {
        names[i] = getName(array[i])
    }
    return names
}

console.log(getNames(students));




const addScore = (array) => {
    const result = new Array()
    const addScore = el => ({...el, scores: el.scores + 10})

    for (let i = 0; i < array.length; i++) {
        result[i] = addScore(array[i])
    }
    return result
}

console.log(addScore(students));



const getMappedArray = (arr, mapFunc) => {
    const result = new Array()
    for (let i = 0; i < arr.length; i++) {
        result[i] = mapFunc(arr[i])
    }
    return result
}

console.log(getMappedArray(students, st => st.name));
console.log(getMappedArray(students, el => el.scores));


const getFilteredArray = (array,  filterFunc) => {
    const result = new Array()
    for (let i = 0; i < array.length; i++){
        if (filterFunc(array[i]) === true){
            result[result.length]= array[i]
        }
    }
    return result
}

console.log(getFilteredArray(students, st => st.age >= 21));
console.log(students.filter(st => st.age >= 21));



//find, push, indexOf, includes

const getFind = (array, findFunc) => {
    for (let i = 0; i < array.length; i++) {
        if(findFunc(array[i]) === true){
            return array[i]
        }  
    }
}

const getPush = (array, el) => {
    array[array.length] = el
    return array.length
}


const getIndexOf = (array, el, start = 3) => {
    let param = start || 0
    for (let i = param; i < array.length; i++) {
        if(array[i] === el) {
            return i
        }
    }
    return -1
}


const  isIncluded = (array, el, start = 0) => {
    for (let i = start; i < array.length; i++) {
        if(array[i] === el){
            return true
        }
    }
    return false
}

console.log(isIncluded(students, 23, 3));


function getLength() {
    return `the array length is ${this.length}`
}

Array.prototype.getLength = getLength

console.log([].getLength());
console.log([1,2,3,4,5].getLength());


