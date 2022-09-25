const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    outputDir: 'E:\\Acode\\java\\spring_ref\\src\\main\\resources\\static',
    transpileDependencies: [
        'vuetify'
    ],
    publicPath: process.env.NODE_ENV === 'production'
        ? '/v4/'
        : '/',

    pages: {
        index: {
            entry: 'src/index.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: '玖夜ちゃん～',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        subpage: 'src/subpage/subpage.js'
    },

    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.(txt)$/i,
                    use: 'raw-loader'
                },
                {
                    test: /\.(pdf|docx|ppt)$/i,
                    use: 'file-loader'
                },
            ],
        }
    }

})
