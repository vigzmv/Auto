var express = require('express')
var app = express()
var exec = require('exec');
app.get('/exec', (req,res)=>{
    const x = ``;
    exec(['node', '-e' , x], function(err, out, code) {
        if (err instanceof Error)
          throw err;
        process.stderr.write(err);
        process.stdout.write(out);
        process.exit(code);
        res.send('executed')
       });
})

var port = 4000
app.listen(port) 
