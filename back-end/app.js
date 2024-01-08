const express = require('express');
const cors = require('cors');

/* Import routes */
//const sampleRoutes = require('./routes/sample');
const adminRoutes = require('./routes/admin');
const uploadRoutes = require('./routes/upload');
const userRoutes = require('./routes/user');

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded( {extended: true }));

/* Routes used */
//app.use('/api/samples', sampleRoutes);
app.use('/admin', adminRoutes);
app.use('/admin/upload',uploadRoutes);
app.use('/', userRoutes);

app.use((req, res, next) => {
    res.status(404).json({ message: 'Endpoint not found'})
});

module.exports = app;