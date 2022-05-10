function myEach(collection, callback) {
    if (typeof collection === 'object') {
        Object.values(collection).forEach((c) => callback(c))  
    }
    else {collection.forEach((c) => callback(c))
    }
    return collection
}

function myMap(collection, callback) {
    if (typeof collection === 'object') {
        return Object.values(collection).map((c) => callback(c))
    }
    else {
        return collection.map((c) => callback(c))
    }
}


function myReduce(collection, callback, acc) {
    let val = collection
    if (typeof collection === 'object') {
        val = Object.values(collection)
    }
    if (acc === undefined) {
        acc = val[0]
        val = val.slice(1)
    }
    let value = val.reduce((previousValue, currentValue) => {
        return previousValue + currentValue})
    return callback(acc, value, collection)
}

function myFind(collection, predicate) {
    return collection.find(predicate)
}

function myFilter(collection, predicate) {
    let array = []
    let val = collection
    if (typeof collection === 'object') {
        val = Object.values(collection)
    }
    val.forEach((e) => {
        if (predicate(e)) {
            array.push(e)
        }
    })
    return array
}

function mySize(collection) {
    let val = collection
    let total = 0
    if (typeof collection === 'object') {
        val = Object.values(collection)
    }
    for (const v in val) {
        total++
    }
    return total
}

function myFirst(array, n) {
    if (n) {
        return array.slice(0,n)
    }
    return array[0]
}

function myLast(array, n) {
    console.log(array)
    console.log(n)
    if (n){
        console.log(array.slice(n,array[array.length - 1]))
        return array.slice(-n)
        // let newArray = array.slice(n,array[array.length-1])
        // newArray.unshift(n)
        // console.log(newArray)
    }
    console.log(array[array.length - 1])
    return array[array.length - 1]
}

function myKeys(object) {
    return Object.keys(object)
}

function myValues(object) {
    return Object.values(object)
}