const os = require('os');
const fs = require('fs');
const chp = require('child_process')
const path = require('path')

function getOSInfo() {
    const platform = process.platform;

    switch (platform) {
        case 'win32':
            return 'Windows ' + os.release()
        case 'darwin':
            return 'macOS ' + os.release()
        case 'linux':
            const linuxInfo = getLinuxInfo();
            return linuxInfo.distro + ' ' + linuxInfo.release
        default:
            return 'Unsupported OS'
    }
}

function getLinuxInfo() {
    const releaseInfo = os.release().toLowerCase();

    if (releaseInfo.includes('centos')) {
        return {distro: 'CentOS', release: releaseInfo};
    } else if (releaseInfo.includes('ubuntu')) {
        return {distro: 'Ubuntu', release: releaseInfo};
    } else if (releaseInfo.includes('redhat')) {
        return {distro: 'Red Hat', release: releaseInfo};
    } else {
        return {distro: 'Linux', release: releaseInfo};
    }
}

function writeLine(any, num = 1) {
    console.log('■'.repeat(num) + ' ' + any)
}

function getJavaVersion(expect) {
    try {
        const output = chp.execSync('java -version 2>&1').toString();
        const versionLine = output.split('[\n\r]')[0]; // 获取输出的第一行

        const versionMatch = versionLine.match(/(\d+\.\d+\.\d+)/);
        if (versionMatch) {
            const javaVersion = versionMatch[1];
            if (javaVersion.startsWith(expect)) {
                return javaVersion
            } else {
                throw new Error('JAVA_HOME或bin指向的JDK版本不正确，请将JDK版本修改为17以构建本项目')
            }
        } else {
            return 'Unable to determine Java version'
        }
    } catch (error) {
        throw error
    }
}

function getNodeVersion() {
    const nodeVersion = process.version;
    return nodeVersion;
}

function getYarnVersion() {
    try {
        const output = chp.execSync('yarn --version', {stdio: 'pipe'});
        const version = output.toString().trim();
        return version;
    } catch (error) {
        throw new Error('[x] yarn not found!');
    }
}

function buildWeb(path = './') {
    try {
        chp.execSync('yarn build', {cwd: path, encoding: 'utf-8'});
    } catch (e) {
        throw e;
    }
}

function buildService() {
    try {
        chp.execSync(path.resolve(__dirname, '../mvnw') + ' clean package')
    } catch (e) {
        throw e
    }
}

function moveProjects(A, B) {
    try {
        if (!fs.existsSync(A)) {
            writeLine(`目录${A}不存在`)
            return false;
        }

        if (!fs.existsSync(B)) {
            writeLine(`目录${B}不存在`)
            fs.mkdirSync(B, {recursive: true});
        }

        deleteDirectoryContents(B);
        projects = fs.readdirSync(A);

        projects.forEach((project) => {
            const sourcePath = path.join(A, project);
            const destinationPath = path.join(B, project);

            fs.renameSync(sourcePath, destinationPath);
        });
        return true;
    } catch (error) {
        throw '移动项目出错:\n' + error
    }
}

function deleteDirectoryContents(directoryPath) {
    const fileStat = fs.statSync(directoryPath);

    if (fileStat.isDirectory()) {
        const files = fs.readdirSync(directoryPath);

        files.forEach(file => {
            const filePath = path.join(directoryPath, file);
            const fileStat = fs.statSync(filePath);

            if (fileStat.isDirectory()) {
                deleteDirectoryContents(filePath);
                fs.rmdirSync(filePath);
            } else {
                fs.unlinkSync(filePath);
            }
        });
    } else {
        fs.unlinkSync(directoryPath);
    }
}

module.exports = {
    getOSInfo,
    getJavaVersion,
    writeLine,
    getNodeVersion,
    getYarnVersion,
    buildWeb,
    buildService,
    moveProjects,
    deleteDirectoryContents
}