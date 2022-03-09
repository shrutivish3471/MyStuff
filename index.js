const express = require('express');
const Datastore = require('nedb');

const app = express();
app.listen(3000, () => console.log('listening to 3000'));
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));

const database = new Datastore('databse.db');
database.loadDatabase();
//database.insert({name:'Shruti', status: 'happy'});

app.post('/api', (request, response) => {
console.log('New GeoFence Created and Data Received');
const data = request.body;
const timestamp = Date.now();
data.timestamp = timestamp;
database.insert(data);
response.json({
    status: 'success',
    latitude: data.latitude,
    longitude: data.longitude,
    timestamp: timestamp
});
});




