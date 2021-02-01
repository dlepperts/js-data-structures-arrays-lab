const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
    drivers.push(name);
}

function destructivelyPrependDriver(name) {
    drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
    drivers.pop();
}

function destructivelyRemoveFirstDriver(name) {
    drivers.shift();
}

function appendDriver (name) {
    return [...drivers, name];
  }

function prependDriver (name) {
    return [name, ...drivers];
}

function removeLastDriver() {
    return drivers.slice(-1);
}

function removeFirstDriver() {
    drivers.push;
}