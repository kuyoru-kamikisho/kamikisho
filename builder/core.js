const fs = require('fs')
const path = require('path')
const {
    getOSInfo, writeLine, getJavaVersion,
    getNodeVersion, getYarnVersion, buildWeb,
    buildService, moveProjects,deleteDirectoryContents
} = require('./utils')

console.clear();
writeLine('构建开始：')
writeLine('工作目录：' + __dirname)
writeLine('当前系统：' + getOSInfo())
writeLine('检测java版本：' + getJavaVersion('17'))
writeLine('检测node版本：' + getNodeVersion())
writeLine('检测yarn版本：' + getYarnVersion())
writeLine('构建前端程序', 2)
buildWeb(path.resolve(__dirname, '../webapp/webk5'))

const b = moveProjects(
    path.resolve(__dirname, '../webapp/webk5/dist'),
    path.resolve(__dirname, '../built-core/web-core'));

if (b) {
    writeLine('构建后端程序', 2)
    const src = path.resolve(__dirname, '../target/webk5.jar');
    const trp = path.resolve(__dirname, '../built-core/render-core');
    const tgf = path.join(trp, 'webk5.jar')
    buildService()
    if (!fs.existsSync(trp)) {
        fs.mkdirSync(trp, {recursive: true})
    }
    deleteDirectoryContents(trp)
    fs.renameSync(src, tgf);
}
writeLine('构建结束')

