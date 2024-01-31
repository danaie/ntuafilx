const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

/* Import routes */
//const sampleRoutes = require('./routes/sample');
const adminRoutes = require('./routes/admin');
const uploadRoutes = require('./routes/upload');
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');

const authMiddleware = require('./middlewares/auth');
//const jsonToCsvMiddleware = require('./middlewares/jsonTOcsv');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded( {extended: true }));
app.use(cookieParser());
//app.use(jsonToCsvMiddleware);

const base_url = '/ntuaflix_api'
/* Routes used */
//app.use('/api/samples', sampleRoutes);
app.use(base_url+'/admin',adminRoutes);
app.use(base_url+'/admin/upload', authMiddleware.authAdmin, uploadRoutes);
app.use(base_url+'/', userRoutes);
app.use(base_url+'/', authRoutes);



app.use((req, res, next) => {
    res.status(404).json({ error: 'Endpoint not found'})
});

module.exports = app;