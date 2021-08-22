const path = require('path')

console.log(path.basename(__filename)) // file name [path_refs]
console.log(path.dirname(__filename)) // dir name [******/refs]
console.log(path.extname(__filename)) // ext name [js]

console.log(path.parse(__filename)) // obj file info

console.log(path.join(__dirname, 'test', 'second.html')) // path to

console.log(path.resolve(__dirname, './test', '/second.html')) //

