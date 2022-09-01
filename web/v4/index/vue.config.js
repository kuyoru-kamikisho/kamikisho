const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
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
            ],
        }
    }

})
