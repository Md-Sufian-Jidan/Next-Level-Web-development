const course1 = { name: "Programming Hero" };
const course2 = { name: "Next Level Web Development" };

// const obj = {};

// obj[course2] = { courseId: "Level2" };
// obj[course1] = { courseId: "Level1" }

// console.log(obj);

const courses = [
    [course1, "Level1"],
    [course2, "Level2"]
]

const map = new Map(courses);

// map.set(course1, { courseId: "Level1" });
// map.set(course2, { courseId: "Level2" });
// map.clear();
// map.delete(course1);
// map.has(course2);

// map.forEach((value, key) => (key.name = "Shohoz Shorol Simple " + key.name));

// for(let key of map.keys()){
//     key.name = "Shohoz Shorol Simple " + key.name
// }

console.log(map);