let objectsToCrete = [
    {
        model: 'prop_veg_crop_03_cab',
        position: {
            x: 2218.777, 
            y: 5598.235, 
            z: 57.865
        }
    },
    {
        model: 'ex_prop_adv_case_sm_03',
        position: {
            x: 2220.777, 
            y: 5598.235, 
            z: 57.865
        }
    },
    {
        model: 'ex_prop_adv_case_sm_03',
        position: {
            x: 2215.777, 
            y: 5598.235, 
            z: 57.865
        }
    }
];

let i = 0;
RegisterCommand("co", () => {
    let o = objectsToCrete[i];
    let id = exports['object-manager'].createObject(o.model, o.position.x, o.position.y, o.position.z);

    console.log(id);
    i++;
    if (i > objectsToCrete.length - 1) {
        i = 0;
    }
}, false)

RegisterCommand("do", (source, args) => {
    for (let id in exports['object-manager'].getObjects()) {
        exports['object-manager'].deleteObject(id);
    }
}, false);