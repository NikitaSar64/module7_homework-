// task2

let obj2 = {
    name: 'nik',
    age: 23
};

function checkProperty (obj, property){
    for (let key in obj){
        if (key === property){
            return true;
        } 
    }
    return false;
}

console.log(checkProperty(obj2, 'name'));
