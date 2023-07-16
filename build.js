const fs = require('fs')

//在组件包中引入打包后的样式
updateFile('./dist/index.js', 1, "import './umd/lh-ui-react.min.css'")

const fileObjects = [
  { filePath: './dist/umd', fileType: 'js' },
  { filePath: './dist', fileType: 'less' }
]
//删除多余文件
deleteFilesByType(fileObjects)

function updateFile (readFile, row, updateData, outputFile) {
  const data = fs.readFileSync(readFile, 'utf8').split('\n')
  data[row - 1] = updateData
  fs.writeFileSync(outputFile ? outputFile : readFile, data.join('\n'), 'utf8')
}

function deleteFilesByType (fileObjects) {
  fileObjects.forEach((fileObject) => {
    const { filePath, fileType } = fileObject

    // 删除指定类型的文件
    deleteFilesRecursive(filePath, fileType)
  })
}

function deleteFilesRecursive (folderPath, fileType) {
  // 读取文件夹中的所有文件和文件夹
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error('无法读取文件夹内容:', err)
      return
    }

    // 遍历文件和文件夹
    files.forEach((file) => {
      const filePath = `${folderPath}/${file}`

      // 检查文件的状态
      fs.stat(filePath, (err, stat) => {
        if (err) {
          console.error('无法获取文件状态:', filePath, err)
          return
        }

        if (stat.isFile() && file.endsWith(`.${fileType}`)) {
          // 如果文件类型匹配，则删除文件
          fs.unlink(filePath, (err) => {
            if (err) {
              console.error('无法删除文件:', filePath, err)
            } else {
              console.log('已删除文件:', filePath)
            }
          })
        } else if (stat.isDirectory()) {
          // 如果是文件夹，则递归调用删除文件函数
          deleteFilesRecursive(filePath, fileType)
        }
      })
    })
  })
}
