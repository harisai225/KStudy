var cp = require("child_process");
var child = cp.spawn('clip');
child.stdin.write("\n");
child.stdin.end();