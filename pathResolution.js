import path from "path";

const __filename = new URL(import.meta.url).pathname
const __dirname = path.dirname(__filename)
// const __dirname = __filename.split('/').slice(0, -1).join('/')
const route = path.join(__dirname, 'index.js')
console.log(route)
