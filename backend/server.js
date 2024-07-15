const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const studentRoutes = require('./routes/studentsRoute');
const teacherRoutes = require('./routes/teachersRoute');
const receivingRoutes = require('./routes/receivingRoute');


const app = express();
const port = 3000;


app.use(cors());
app.use(bodyParser.json());



app.use('/students', studentRoutes);
app.use('/teachers', teacherRoutes);
app.use('/schedules', receivingRoutes);


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
