const fs = require('fs');

exports.read = (req, res) =>{
fs.readFile('./src/specification/tradelicense/apply.json', (err, data) => {
    if (err) throw err;
    let obj = JSON.parse(data);
    console.log(obj)
    res.send(obj);
});
}