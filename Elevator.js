import { UP, DOWN } from './directions.js';

class Elevator {
    constructor(currentFloorNumber) {
        this.callQueue = [];
        this.currentFloorNumber = currentFloorNumber;
        this.currentTask;
        this.passengerState = false;
        console.log('Elevator created on floor', currentFloorNumber);
    }

    start() {
        this.checkTasks();
        this.doTask();
    }

    checkTasks() {
        setInterval(() => {
            if (this.currentTask === undefined) {
                this.currentTask = this.callQueue.shift();
            }
        }, 100);
    }

    doTask() {
        setInterval(() => {
            if (this.currentTask !== undefined) {
                if (this.currentFloorNumber !== this.currentTask.floorNumberFrom && this.passengerState === false) {
                    const direction = this.currentFloorNumber < this.currentTask.floorNumberFrom ? UP : DOWN;
                    console.log('Elevator is moving', direction,
                        'from', this.currentFloorNumber,
                        'to', this.currentFloorNumber + (direction === UP ? 1 : -1),
                        'to get', this.currentTask.passengerName);
                    this.currentFloorNumber = this.currentFloorNumber + (direction === UP ? 1 : -1);
                } else {
                    if (!this.passengerState) {
                        console.log(this.currentTask.passengerName, 'has enterted elevator');
                    }

                    this.passengerState = true;

                    const direction = this.currentFloorNumber < this.currentTask.floorNumberTo ? UP : DOWN;
                    console.log('Elevator is moving', direction, 'from', this.currentFloorNumber, 'to', this.currentFloorNumber + (direction === UP ? 1 : -1));
                    this.currentFloorNumber = this.currentFloorNumber + (direction === UP ? 1 : -1);
                    if (this.currentFloorNumber === this.currentTask.floorNumberTo) {
                        console.log('Passenger', this.currentTask.passengerName, 'arrived');
                        this.currentTask = undefined;
                        this.passengerState = false;
                    }
                }
            }
        }, 1000);
    }

    goForPassenger() {

    }

    addFloorToQueue(floorNumberFrom, floorNumberTo, passengerName) {
        this.callQueue = [...this.callQueue, {
            floorNumberFrom,
            floorNumberTo,
            passengerName
        }];
    }
}

export default Elevator;
