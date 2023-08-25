enum CarStatus {
    Parked = "Parked",
    Running = "Running",
    Stopped = "Stopped"

}

interface Car {
    make : string;
    model:string;
    status: CarStatus
}

const myCar : Car ={
    make:"Ford",
    model:'Mustang',
    status:CarStatus.Running,
}

console.log(`My ${myCar.make} ${myCar.model} is ${myCar.status}`)