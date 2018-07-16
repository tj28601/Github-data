 let data = require('./data')

let LAtotal = 0
for (let i = 0; i < data.length; i++) {
  if (data[i].owner == 'LaunchAcademy') {
    LAtotal ++;
  }

};
console.log(LAtotal)
console.log(`The total number of repositories owned by Launch Academy is: ${LAtotal}`)

  //let sizes = []
 let sizesort = (object) => {
for (let i = 0; i < data.length; i++) {
   //data.forEach(object[i].size => {
     return `${object[i].size}`;
   }
   }
 //}
 let repSize = {
 	  amount: 0,
 	  name: []
 	};

 data.forEach ((object) =>{
	  if (object.size > repSize.amount){
	    repSize.amount = object.size;
	    repSize.name = [object.name];
	  } else if (object.size === repSize.amount){
	    repSize.name.push(object.name);
	  }
	});

  console.log(`\ndiscourse has the largest repository size -- ${repSize.amount}.`)

  let newestDate = {
	  date: ``,
	  name: []
	};
		data.forEach ((repository) =>{	  if (repository.created_at > newestDate.date){
    newestDate.date = repository.created_at;
    newestDate.name = [repository.name];
	  } else if (repository.created_at === newestDate.date){
	    maxSize.name.push(repository.name);
	  }
});

	console.log(`\nThe most recently created repository was ${newestDate.name.join(`, `)}, created on ${newestDate.date}`);

  let descriptions = data.map(repository=>{
	  if (repository.description === null) {
	    return `No Description Provided`;
	  }
	  return repository.description;
	});
	console.log(`\nA list of repository descriptions is:`);
	console.log(descriptions);


 // return quotes[crewMembers.indexOf(name)].sort(function(a, b) {
 //    return b.length - a.length;})[0];


// for (let i = 0; i < data.length; i++) {
//         (this.sizearray.data[i].size.push(size);
//       }
//
//   console.log(sizearray);


//  return quotes[crewMembers.indexOf(name)].sort(function(a, b) {
  //   return b.length - a.length;})[0];
//  for (let i = 0; i < data.length.sort(function(a, b); i++) {
//  return (b.length - a.length)
//  }


// let ship = {
//   name: 'Serenity',
//   captain: 'Malcolm Reynolds',
//   captainsAnnouncement() {
//     return `${this.name} will be captained by ${this.captain} for the flight.`;
//   },
//   launchShip() {
//     return `${this.name} has launched into orbit!`;
//   }
// }

// console.log(ship.captainsAnnouncement())
// console.log(ship.launchShip())
//
// let authors = [
//   { firstName: "Jules", lastName: "Verne" },
//   { firstName: "Agatha", lastName: "Christie" },
//   { firstName: "Mary", lastName: "Shelley" }
// ];
//
// let fullNames = authors.map(author => {
//   return author.firstName +" "+ author.lastName;
// });
//
// console.log(fullNames);
// ["Jules Verne", "Agatha Christie", "Mary Shelley"]
