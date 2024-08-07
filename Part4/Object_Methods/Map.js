// key value pairs:-
// map allows key of any type

// What is the difference between map and objects?
/*
In JavaScript, both Map and plain objects ({}) are used to store key-value pairs, but they have different characteristics and use cases. Here's a comparison of the two:

1. Key Types
Objects: Keys are strings or symbols. If you use other types (like numbers or objects) as keys, they are automatically converted to strings.

javascript
Copy code
const obj = {};
obj[1] = 'one';      // Key is converted to '1'
obj[true] = 'true';  // Key is converted to 'true'
Map: Keys can be of any type, including objects, functions, and primitive types. This provides more flexibility in how you can use keys.

javascript
Copy code
const map = new Map();
map.set(1, 'one');
map.set(true, 'true');
map.set({}, 'empty object');
2. Key Order
Objects: The order of keys is not guaranteed, although modern JavaScript engines typically preserve the order of string keys (insertion order for integer keys is somewhat predictable but should not be relied upon).

Map: The order of keys is preserved based on their insertion order. When iterating over a Map, you get the entries in the order they were added.

3. Iteration
Objects: To iterate over keys, values, or entries, you generally use for...in for keys and Object.keys(), Object.values(), or Object.entries() for more specific operations.

javascript
Copy code
const obj = { a: 1, b: 2 };
for (const key in obj) {
  console.log(key, obj[key]); // Output: 'a' 1, 'b' 2
}
Map: Map provides built-in methods for iteration: keys(), values(), and entries(). These methods return iterators, which can be used with for...of loops or other iteration constructs.

javascript
Copy code
const map = new Map();
map.set('a', 1);
map.set('b', 2);

for (const [key, value] of map) {
  console.log(key, value); // Output: 'a' 1, 'b' 2
}
4. Performance
Objects: Generally, objects are optimized for situations where the keys are known to be strings or symbols and where there is a limited number of keys. They can be slower for operations like frequent insertions or deletions compared to Map.

Map: Map is optimized for scenarios involving frequent additions and removals of key-value pairs. It provides better performance for these operations and is designed to handle large numbers of entries efficiently.

5. Default Values
Objects: You can't specify default values for missing keys. Accessing a non-existent key returns undefined.

Map: You can use the has() method to check if a key exists and the get() method to retrieve values. Accessing a non-existent key with get() returns undefined.

6. Size
Objects: The number of properties can be determined using Object.keys(obj).length.

Map: Map has a built-in size property that returns the number of entries.

7. Prototypes
Objects: Have a prototype chain, which means that properties and methods from the prototype may affect the object.

Map: Does not have a prototype chain for its keys and values, so it is free from such interference.

Summary
Use objects when you need simple key-value storage with string keys, when the number of entries is relatively small, and when key order is not important.
Use Maps when you need more flexibility with key types, when you require guaranteed insertion order, when you need built-in iteration methods, or when performance is a critical concern for frequent updates.*/


// create 
// let map= new Map();

// map.set('1', "StringValue");
// map.set(1, "NumberValue");
// map.set(true, "booleanValue");

// console.log(map.get(1));
// console.log(map.get('1'))

// console.log(map);


// let user= {name : "john"}

// let visitMap= new Map()

// visitMap.set(user, 100)
// console.log(visitMap);

// chaining methods:-

// let map= new Map()

// map.set('1', 'strValue')
//    .set(1,'numValue')
//    .set(true, 'boolValue')

// console.log(map)

// Iterators:-

let itemsMap= new Map(
    [
        ['tomatoes',100],
        ['onions',400],
        ['potatoes',500],
    ]
)
console.log(itemsMap.keys());

// for(let item of itemsMap.keys()){
//     console.log(item)
// }

// for(let item of itemsMap.values()){
//     console.log(item)
// }


// for(let item of itemsMap.entries()){
//     console.log(item)
// }

// itemsMap.forEach((value, keys, Map) => {
//     console.log(`${keys} : ${value}`)
// })


// map from object

let user={
    name:'Rakesh',
    age:20
}
// console.log(Object.entries(user))
let map=new Map(Object.entries(user))

console.log(map);