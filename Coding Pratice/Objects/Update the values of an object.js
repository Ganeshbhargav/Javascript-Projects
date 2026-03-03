let cat = {
    name : "Kitty",
    age:12,
    'Fur Color':"Grey",
    likes: ["catnip","milk"],
    birthday: {
        month:7,
        day:17,
        year:19994
    }
}

function changeValue(obj, key, value) {
    const keys = key.split(".");
    let current = obj;

    for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
    }

    current[keys[keys.length - 1]] = value;
    console.log(obj);
}

changeValue(cat,"name","sassy")
changeValue(cat,"birthday.year","2003")