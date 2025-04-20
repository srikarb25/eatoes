const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectMongoDB = require('./config/db');
const { sequelize } = require('./models');

const menuRoutes = require('./routes/menuRoutes');
const orderRoutes = require('./routes/orderRoutes');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to DBs
connectMongoDB();
sequelize.authenticate()
  .then(() => {
    console.log('✅ Connected to PostgreSQL');
    return sequelize.sync(); // Ensure tables are created
  })
  .catch(err => console.error('❌ PostgreSQL connection failed:', err));

// Routes
app.get('/', (req, res) => res.send('Welcome to The Digital Diner API!'));
app.use('/menu', menuRoutes);
app.use('/orders', orderRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
