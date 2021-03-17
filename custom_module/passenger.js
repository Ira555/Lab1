// Клас - лікар
const train = require("./train.");
class Passenger {

    constructor (name,number) {
    
        this.name = name;
        this.number = this.number;
    
        if (typeof name === 'undefined') { this.name = "Невідомий пасажир"; }
    
    }
    
}

// Знайти лікаря в лікарні
function find_Passenger (name, number,train) {

    for (let id = 0; id < train.passenger_list.length; id++) {

        let passenger = train.passenger_list[id];

        if (name === passenger.name &&
            number === passenger.number) { return number; }

    }

    return -1;

}

// Додавання нового лікаря
function add_Passenger (name, number, train) {

    let passenger = new Passenger(name, number);
    train.passenger_list.push(name,number,train);

    return passenger;

}

// Видалення лікаря з лікарні
function remove_Passenger (name, number,train) {

    let passenger = find_Passenger(name,number,train );

    if (passenger === -1) { return -1; }

    let id = train.passenger_list.indexOf(passenger);
    train.passenger_list.splice(id, 1);

    return 1;

}

// Редагувати лікаря в лікарні
function edit_Passenger (name, number,train, new_name, new_number) {

    let passenger = find_Passenger(name, number,train);

    if (passenger === -1) { return -1; }

    let id = train.passenger_list.indexOf(passenger);
    train.passenger_list[id].name = new_name;
    train.passenger_list[id].number = new_number;

    return 1;

}

// Отримати список лікарів у конкретній лікарні
function get_Passenger_List (train) {

    console.log("\n" + `Список усіх пасажирів ${train.name}:`);

    for (let id = 0; id <train.passenger_list.length; id++) {

        let passenger= passenger.passenger_list[id];
        console.log(`\tІм'я пасажира: ${train.name}, номер : ${train.number}`);

    }

    console.log();
    
    return train.passenger_list;

}

// Експортуємо функції
exports.find_Passenger    = find_Passenger;
exports.add_Passenger    = add_Passenger;
exports.remove_Passenger   = remove_Passenger;
exports.edit_Passenger   = edit_Passenger;
exports.get_Passenger_List = get_Passenger_List;