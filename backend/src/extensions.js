import mongoose from 'mongoose';
import config from '@/config';

const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

// Connect to mlab database
const connectDb = async () => {
  try {
    return await mongoose.connect(config.app.dbURL, dbOptions);
  } catch (error) {
    console.log('error: ' + error);
    //return handleError(error);
  }
};

mongoose.connection.once('open', function() {
  // we're connected!
  console.log('Yo we are connect!');
});

mongoose.connection.on('error', function() {
  // we're connected!
  console.log('Connection error!');
});

//connectDb.connection.on('error', console.error.bind(console, 'connection error:'));

export {connectDb}
