// Dummy server untuk Vite di Replit
const { exec } = require("child_process");

exec("npm install && npm run dev", (err, stdout, stderr) => {
  if (err) {
    console.error(`Error: ${err.message}`);
    return;
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    return;
  }
  console.log(`Output: ${stdout}`);
});
