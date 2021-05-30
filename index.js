import Elevator from './Elevator.js';
import Passenger from './Passenger.js';

const elevator = new Elevator(5);

const roma = new Passenger('Roman', 1);
const lera = new Passenger('Lera', 2);
const vlad = new Passenger('Vlad', 7);
const gena = new Passenger('Gena', 5);

roma.callElevator(5, elevator);
elevator.start();   

setTimeout(() => {
    lera.callElevator(9, elevator);
}, 3000);

setTimeout(() => {
    vlad.callElevator(1, elevator);
}, 6000);

setTimeout(() => {
    gena.callElevator(1, elevator);
}, 5000);
