var express = require('express'),
    app     = express();




var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
var ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

console.log("This is the dirname");

// app.get('/', (req, res) => {
//     res.sendFile('index.html', {
//         root: path.join(__dirname, './')
//     })
// })

app.get('/', function(req, res) {
    res.sendFile('views/index.html', {root: __dirname })
});

// error handling
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500).send('Something bad happened!');
  });
  
 
  
app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

module.exports = app ;
