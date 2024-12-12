
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://salonijuneja93:Abc1234@saloni09.6xpr2.mongodb.net/?retryWrites=true&w=majority&appName=Saloni09', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('Database connection failed', err);
    process.exit(1);
  }
};

module.exports = connectDB;
