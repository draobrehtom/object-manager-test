// let id;

// setInterval(() => {
//     console.log(
//         Object.keys(exports['vehicle-manager'].getVehicles()).length
//     );
    
//     exports['vehicle-manager'].createVehicle("rebel", 2218.777, 5598.235, 53.865);
// }, 500);

on("vehicleDestroyed", (vehicle) => {
    console.log("Vehicle " + vehicle.id + " is destroyed");
});

on("vehicleCreated", (vehicle) => {
    console.log("Vehicle " + vehicle.id + " is created");
    // exports['vehicle-manager'].deleteVehicle(vehicle.id);
});

// on("vehicleSpawned", (vehicle, playerId) => {
//     console.log("Vehicle " + vehicle.id + " is spawned by player " + playerId);
//     exports['vehicle-manager'].deleteVehicle(vehicle.id);
// });

on("playerEnterVehicle", (playerId, vehicle) => {
    console.log("Player " + playerId + " enter vehicle " + vehicle.id);
});

on("playerExitVehicle", (playerId, vehicle) => {
    console.log("Player " + playerId + " exit vehicle " + vehicle.id);
});

RegisterCommand('cv', (source, args) => {
    let id = exports['vehicle-manager'].createVehicle(args[0], parseFloat(args[1]), parseFloat(args[2]), parseFloat(args[3]));
    console.log('Vehicle id ' + id);
}, false);


RegisterCommand('dv', (source, args) => {
    exports['vehicle-manager'].deleteVehicle(args[0]);
}, false);