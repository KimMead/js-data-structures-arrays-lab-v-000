// Write your solution here!
const drivers = ['Milo', 'Otis', 'Gardfield'];

function destructivelyAppendDriver(name){
  drivers.push(name);
  return drivers;
};

function destructivelyPrependDriver(name){
  drivers.pop(name); 
  return drivers;
}
