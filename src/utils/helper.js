import { access } from "fs/promises";
import { constants } from "fs/promises";

async function checkFile(filename) {
  try {
    await access(filename, constants.F_OK);
    return true;
  } catch (error) {
    console.error("is not file: ", error);
    return false;
  }
}

export { checkFile };
