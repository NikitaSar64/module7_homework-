// task 4

let timerId;

function Device (name, model, consumption, width, height){
    this.name = name;
    this.model = model;
    this.consumption = consumption;
    this.width = width + 'см';
    this.height = height + 'см';
    this.counter = 0;
}

Device.prototype.turnOn = function () {
    let consumption = this.consumption;
    console.log('Вкл.');
    timerId = setInterval(() => {
        this.counter += consumption;
        console.log(this.counter);
    }, 2500);    
};

Device.prototype.turnOff = function (){
    clearTimeout(timerId);
    console.log('Выкл.');
};

Device.prototype.checkConsumption = function () {
    console.log(`Потребление электроэнергии прибором ${this.name} составило ${this.counter}квт`);
};


function Electronics (name, model, consumption, diagonal, OS, CPU, memory){
    Device.call(this, name, model, consumption);
    this.diagonal = diagonal;
    this.OS = OS;
    this.CPU = CPU;
    this.memory = memory;
}

Electronics.prototype = Object.create(Device.prototype);

Electronics.prototype.playMusic = function(){
    console.log(`${this.name} включил музыку`);
};

Electronics.prototype.stopMusic = function(){
    console.log(`${this.name} выключил музыку`);
};

let refrigerator = new Device ('Hotpoint-Ariston', 'HTS 5200 W', 5, 140, 50);

let smartTv = new Electronics('Samsumg', 'ULI5560', 3, 55, 'Android', 'Intel', '4gb');
