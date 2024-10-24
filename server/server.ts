import mongoose from 'mongoose';

mongoose.set('strictQuery', false);

const uri = `mongodb+srv://colackalpha:${process.env.MONGODB_PASSWORD}@cluster0.kklrh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');
}