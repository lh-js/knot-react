const fs = require('fs')

const data = fs.readFileSync('./dist/index.js', 'utf8').split('\n')
data[0] = "import './umd/lh-ui-react.min.css'"
fs.writeFileSync('./dist/index.js', data.join('\n'), 'utf8')