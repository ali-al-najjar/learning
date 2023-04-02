const mongoose = require("mongoose")

const FileSchema = new mongoose.Schema({
  admin:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  file: {
    data: Buffer,
    ContentType: String
  },
  file_name: {
    type: String,
    required: true,
  },
})




const File = mongoose.model("File", FileSchema);

module.exports = File