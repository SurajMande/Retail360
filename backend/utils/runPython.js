const { PythonShell } = require('python-shell');
const path = require('path');

const runPython = (script, args = []) => {
  return new Promise((resolve, reject) => {
    
    let output = '';

    const pyshell = new PythonShell(path.join(__dirname, '../python_scripts/', script), {
      args,
      pythonOptions: ['-u'], // unbuffered output
    });

    pyshell.on('message', (message) => {
      // console.log(' Python Message:', message);
      output += message;
    });

    pyshell.end((err, code, signal) => {
      if (err) {
        console.error('Python Error:', err);
        return reject(err);
      }
      try {
        const result = JSON.parse(output);
        resolve(result);
      } catch (parseError) {
        console.error('JSON Parse Error:', parseError);
        reject(parseError);
      }
    });
  });
};

module.exports = runPython;
