let timerId;

class Device {
    constructor(name, model, consumption, width, height){
        this.name = name;
        this.model = model;
        this.consumption = consumption;
        this.width = width + 'см';
        this.height = height + 'см';
        this._counter = 0;
    }

    turnOn() {
        let consumption = this.consumption;
        console.log('Вкл.');
        timerId = setInterval(() => {
            this._counter += consumption;
            console.log(this._counter);
        }, 2500);    
    }

    turnOff() {
        clearTimeout(timerId);
        console.log('Выкл.');
    }

    checkConsumption() {
        console.log(`Потребление электроэнергии прибором ${this.name} составило ${this._counter}квт`);
    }
}

class Electronics extends Device{
    constructor(name, model, consumption, diagonal, OS, CPU, memory){
        super(name, model, consumption);
        this.diagonal = diagonal;
        this.OS = OS;
        this.CPU = CPU;
        this.memory = memory;
    }
    
    playMusic() {
        console.log(`${this.name} включил музыку`);
    }

    stopMusic() {
        console.log(`${this.name} выключил музыку`);
    }
}

let refrigerator = new Device ('Hotpoint-Ariston', 'HTS 5200 W', 5, 140, 50);

let smartTv = new Electronics('Samsumg', 'ULI5560', 3, 55, 'Android', 'Intel', '4gb');
