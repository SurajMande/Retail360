const { PythonShell } = require('python-shell');
const path = require('path');

const runPython = (script, args = []) => {
  return new Promise((resolve, reject) => {
    PythonShell.run(path.join(__dirname, '../python_scripts/', script), { args }, (err, results) => {
      if (err) return reject(err);
      try {
        const output = JSON.parse(results[0]);
        resolve(output);
      } catch (parseError) {
        reject(parseError);
      }
    });
  });
};

module.exports = runPython;
