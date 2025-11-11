require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./src/models');
const app = express();
app.use(bodyParser.json());

// Routes will be mounted dynamically
const routeFiles = require('fs').readdirSync(__dirname + '/src/routes').filter(f=>f.endsWith('.js'));
routeFiles.forEach(f=>{
  const name = f.replace('.js','');
  app.use('/api/' + name, require('./src/routes/' + f));
});

const PORT = process.env.PORT || 3000;
db.sequelize.authenticate().then(()=>{
  console.log('DB connected');
  return db.sequelize.sync(); // use migrations in production
}).then(()=>{
  app.listen(PORT, ()=> console.log('Server running on', PORT));
}).catch(err=>{
  console.error('DB connection error', err);
});
