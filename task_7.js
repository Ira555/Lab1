  
const mod = require("./custom_module");

// Додавання потяга
let tr1 = mod.add_Train("Train_1", "Test direction 1");
let tr2= mod.add_Train("Train_2", "Test direction  2");
let tr3 = mod.add_Train("Train_3", "Test direction  3");

// Список потягів
mod.get_Train_List();

// Видалення потяга
console.log("Видалення потяга: Train_2");
mod.remove_Train(tr2);

// Список потягів
mod.get_Train_List();

// Зміна потяга
console.log("Зміна потяга: Train_3");
mod.edit_Train("Train_3", "Test direction 3", "New train name", "New direction");

// Список потягів
mod.get_Train_List();

// Пошук потягів
let tra1 = mod.find_Train("Train_1", "Test direction 1");
console.log(`Пошук потяга Train_1: ${tra1 !== -1 ? "знайдено" : "не знайдено"}`);
let tra2 = mod.find_Train("Train_7", "Test direction 7");
console.log(`Пошук потяга Train_7: ${tra2 !== -1 ? "знайдено" : "не знайдено"}`);
////////////////////////////////////////////////////////////////////////////////////

// Додавання лікарів
mod.add_Passenger("Петро Іванович", 87, tra1);
mod.add_Passenger("Андрій Богданович", 43, tra1);
mod.add_Passenger("Оксана Петрівна", 19, tra1);

// Список лікарів у лікарні Hospital_1
mod.get_Passenger_List(tra1);

// Видалення лікарів
console.log("Видалення лікарів: Андрій Богданович");
mod.remove_Passenger("Андрій Богданович", 43, tra1);

// Список лікарів у лікарні Hospital_1
mod.get_Passenger_List(tra1);

// Редагування лікарів
console.log("Редагування лікарів: Петро Іванович");
mod.edit_Passenger("Петро Іванович", 87, tra1, "Ігор Олегович", 37);

// Список лікарів у лікарні Hospital_1
mod.get_Passenger_List(tra1);

// Пошук лікарів
let pas1 = mod.find_Passenger("Оксана Петрівна", 19, tra1);
console.log(`Пошук лікаря - Оксана Петрівна: ${tra1 !== -1 ? "знайдено" : "не знайдено"}`);
let pas2 = mod.find_Passenger("Ольга Михайлівна", 24, tra1);
console.log(`Пошук лікаря - Ольга Михайлівна: ${tra2 !== -1 ? "знайдено" : "не знайдено"}`);