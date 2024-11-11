import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";
import fs from "fs/promises";

const webpConverter = async () => {
  try {
    await imagemin(["images/*.{jpg,png}"], {
      destination: "build/images",
      plugins: [imageminWebp({ quality: 50 })],
    });

    console.log("Images optimized");
    console.log("완료!");
  } catch (e) {
    console.log(e);
  }
};

// webpConverter();

const getFileNames = async (path) => {
  try {
    const files = await fs.readdir(path);

    const fileNamesWithoutWebp = files.map(
      (fileName) => fileName.split(".")[0]
    );
    console.log(fileNamesWithoutWebp);
    return files;
  } catch (err) {
    console.log(err);
  }
};

getFileNames("./build/images");
