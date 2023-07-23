const fs = require('fs')
const { version: currentVersion } = require('./package')
const versionSplit = currentVersion.split('-')
let updateVersionName = ""
versionSplit.map((item, index) => {
  if (index === 0) {
    let newVersionList = item.split(".").map(item => Number(item))
    item = incrementArray(newVersionList).join(".")
  }
  updateVersionName += `${index !== 0 ? '-' : ''}${item}`
})
console.log(updateVersionName)

// 在组件包中引入打包后的样式
updateFile('./package.json', 3, `  \"version\": \"${updateVersionName}\",`)

function updateFile (readFile, row, updateData, outputFile) {
  const data = fs.readFileSync(readFile, 'utf8').split('\n')
  data[row - 1] = updateData
  fs.writeFileSync(outputFile ? outputFile : readFile, data.join('\n'), 'utf8')
}

function incrementArray (arr) {
  const base = 21 // 进制基数
  let carry = true // 进位标志

  for (let i = arr.length - 1; i >= 0; i--) {
    if (carry) {
      arr[i] += 1 // 对当前项进行加一操作

      if (arr[i] === base) {
        if (i !== 0) {
          arr[i] = 0 // 当前项达到基数后归零
        }
        carry = true // 设置进位标志
      } else {
        carry = false // 清除进位标志
      }
    } else {
      break // 如果当前项未进位，则不再继续向前进位
    }
  }

  return arr
}
