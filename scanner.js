#!/usr/bin/env node 

import path from "path"
import { checkFile } from "./src/utils/helper.js";
import { readFile } from "fs/promises";

const args = process.argv.slice(2);
console.log("arguments are: ",  args)


async function stream() {
    const jsFile = args[0];
    console.log("js file is: ", jsFile)

    const currectPath = path.resolve(jsFile);
    console.log("currectPath is: ", currectPath)

    const isFile = await checkFile(jsFile);
    console.log("file path is: ", isFile)

    if (isFile === false){
        return console.error("This is not file")
    }

    const rawData = await readFile(jsFile, "utf8");
    console.log("data of file is: ", rawData)

}

stream()