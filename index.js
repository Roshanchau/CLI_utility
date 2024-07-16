const fs=require("fs");

module.exports.writehtml5Roshan=writeHTML5;

function writeHTML5(){
    const html5=fs.readFileSync(`${__dirname}/sukuna.html`)

    const filename=process.argv[2]
    fs.writeFileSync(`${process.cwd()}/${filename}` , html5)
}

writeHTML5();