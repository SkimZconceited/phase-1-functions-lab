// Code your solution in this file!
function distanceFromHqInBlocks(pick) {
    let block = 42;
    let diff = pick >= block ? pick - block : block - pick;
    return diff;
}

function distanceFromHqInFeet(pick2) {
    let diff2 = distanceFromHqInBlocks(pick2);
    let feet = 264;
    let inFeet = diff2 * feet;
    return inFeet;
}

function distanceTravelledInFeet(st, dt) {
    let dist = st >= dt ? st - dt : dt - st;
    let feet = 264;
    let distanceTrvld = dist * feet;
    return distanceTrvld;
}

function calculatesFarePrice(st2, dt2) {
    let trvlFeet = distanceTravelledInFeet(st2, dt2);
    let trvl = trvlFeet;
    let msg = 0;
    if (trvl <= 400) {
        msg = 0;
        // console.log(msg);
    } else if (trvl <= 2000) {
        msg = 2.56;
        // console.log(msg);
    } else if (trvl <= 2500) {
        msg = 25;
        // console.log(msg);
    } else {
        msg = 'cannot travel that far'
        // return msg;
        // console.log(msg);
    }
    // console.log(msg);
    return msg;
}

let x = 43;
let y = 50;
let z = 34;

distanceFromHqInBlocks(x);
distanceFromHqInBlocks(y);
distanceFromHqInBlocks(z);
console.log("");
console.log("");
distanceFromHqInFeet(x);
distanceFromHqInFeet(y);
distanceFromHqInFeet(z);
console.log("");
console.log("");
distanceTravelledInFeet(x, 48);
distanceTravelledInFeet(y, 60);
distanceTravelledInFeet(z, 28);
console.log("");
console.log("");
calculatesFarePrice(x, 44);
calculatesFarePrice(z, 32);
calculatesFarePrice(y, 58);
calculatesFarePrice(z, 24);