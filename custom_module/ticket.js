class Ticket {

    constructor (place,vagon,is_sold) {
      this.place = place;
      this.vagon = vagon;
      this.is_sold = is_sold;
      if (typeof place === 'undefined') { this.place = "Невідомий пасажир"; }
      if (typeof vagon=== 'undefined') { this.vagon = "Невідомий пасажир"; }
    }
   
  }

  
  function add_Ticket (place,vagon,train) {

    let tickets =  new Ticket (place,vagon,train);
    train.tickets_list.push(tickets);

    return tickets;

}

 

function get_Ticket_List (train) {

  console.log("\n" + `Список усіх квитків ${train.name}:`);

  for (let id = 0; id <train.tickets_list.length; id++) {

      let tickets = train.tickets_list[id];
      console.log(`\t номер  місця: ${tickets.place},номер вагону: ${tickets.vagon}`);

  }

  console.log();
  
  return train.tickets_list;

}

exports.add_Ticket = add_Ticket;

exports.get_Ticket_List = get_Ticket_List;
