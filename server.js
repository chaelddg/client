let express = require('express');

let app = express();

app.use(express.static('./app'));

app.listen(3000, function () {
   console.log('[WEB LISTENING ON PORT - %s]', 3000);
});