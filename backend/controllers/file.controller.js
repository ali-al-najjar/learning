const File = require("../models/fileModel.js")
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const originalname = file.originalname.replace(/\s/g, '_');
    const new_file_name = Date.now() + "-" + originalname;
    cb(null, new_file_name);
    req.file_url = new_file_name;}

});

const upload = multer({ storage }).single("file");

exports.getAllFiles = async (req, res) => {
  // const { admin } = req.body;
  const files = await File.find().populate("admin","-password -role").select('file file_name');;

  const filesWithUrls = files.map(file => {
    const url = `${req.protocol}://${req.get('host')}/uploads/${file.file_name}`;
    return {
      ...file._doc,
      file: {
        url: url
      },
      file_name: file.file_name
    }
  });

  res.json(filesWithUrls);
};

exports.createFile = (req, res) => {
  
upload(req, res, async (err) => {
  if (err) {
    return res.status(400).json({ error: "Error uploading file" });
  }

  const { admin } = req.body;
  const { buffer, mimetype, originalname } = req.file;

  const file = {
    data: buffer,
    contentType: mimetype,
    filename: originalname
  };

  const newFile = new File({ admin, file, file_name:req.file_url.replace(/\s+/g, "_")});

  try {
    await newFile.save();
    res.json({ message: "File uploaded successfully" });
  } catch (err) {
    res.status(500).json({ error: "Error saving file to database" });
  }
})

}
