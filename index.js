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

function prependDriver(name) {
    drivers.push(name);
}

function removeLastDriver() {
    drivers.push;
}

function removeFirstDriver() {
    drivers.push;
}