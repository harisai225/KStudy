let fs = require("fs");

let data = fs.readFileSync("./pos.json");
let datajson = JSON.parse(data);
let LocalNewArray = Object.keys(datajson).map((key) => {
    return { ...datajson[key], pk: key }
});

var cp = require("child_process");
var child = cp.spawn('clip');
child.stdin.write(JSON.stringify(LocalNewArray));
child.stdin.end();

