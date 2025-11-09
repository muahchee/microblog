import multer from "multer";


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, process.cwd() + "/public/uploads");
  },
  filename: function (req, file, cb) {
    const filetype = file.mimetype;

    let ext;

    if (filetype === "image/jpeg") {
      ext = ".jpeg";
    } else if (filetype === "image/png") {
      ext = ".png";
    } else if (filetype === "image/gif") {
      ext = ".gif";
    }

    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.originalname + "-" + uniqueSuffix + ext);
  },
});

export const upload = multer({ storage: storage });