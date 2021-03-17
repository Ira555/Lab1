const train = require("./train.");
const passenger = require("./passenger");

exports.find_Train     = train.find_Train;
exports.add_Train      = train.add_Train;
exports.get_Train_List = train.get_Train_List;
exports.remove_Train   = train.remove_Train;
exports.edit_Train =     train.edit_Train;

exports.find_Passenger    = passenger.find_Passenger;
exports.add_Passenger    = passenger.add_Passenger;
exports.remove_Passenger   = passenger.remove_Passenger;
exports.edit_Passenger   = passenger.edit_Passenger;
exports.get_Passenger_List = passenger.get_Passenger_List;