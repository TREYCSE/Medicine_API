import mongoose from "mongoose"; 
mongoose.connect("mongodb://localhost/new_json", { useNewUrlParser: true});
//this URL is supposed to create a database that does not exist - but it is not and is not returning an error - conncected in vs code extension
//mongodb+srv://treyweathers:b5OSB6ReJ7lyt1Gc@cluster0.kkbxh6r.mongodb.net/JSONREST_API (VSCODE)
//npx mongosh "mongodb+srv://cluster0.kkbxh6r.mongonodb.net/JSONREST_API" --apiVersion 1 --username treyweathers (MONGO SHELL)
//b5OSB6ReJ7lyt1Gc

export default mongoose;