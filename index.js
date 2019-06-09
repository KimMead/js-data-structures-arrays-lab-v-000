// Write your solution here!
const drivers = ['Milo', 'Otis', 'Gardfield'];

function destructivelyAppendDriver(name){
  drivers.push(name);
  return drivers;
};

function destructivelyPrependDriver(name){
  drivers.unshift(name);
  return drivers;
}

function destructivelyRemoveLastDriver(name){
  drivers.pop(name);
  return drivers;
}

function destructivelyRemoveFirstDriver(name){
  drivers.shift(name);
  return drivers;
}

function appendDriver(name){
  const newDrivers = [...drivers, name];
  return newDrivers;
};

function prependDriver(name)
  const newDrivers = [...drivers, name];
  return newDrivers;
}
