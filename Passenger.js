import { UP, DOWN } from './directions.js';

class Passenger {
    constructor (name, floor) {
        this.name = name;
        this.floor = floor;
    }

    callElevator (floorNumber, elevator) {
        elevator.addFloorToQueue(this.floor, floorNumber, this.name);
        console.log('Passenger', this.name, 'called elevator from floor', this.floor, 'to', floorNumber);
    }
}

export default Passenger;