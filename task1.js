// task 1

let parentObj = {
    parent: 'no',
    show() {
        console.log('hi');
    }
};

let obj = Object.create(parentObj);

obj.name = 'nikita';
obj.age = 25;

function showProperty (obj){
    for (let key in obj){
        if (obj.hasOwnProperty(key)){
        console.log(key);
        }
    }
}

showProperty(obj);