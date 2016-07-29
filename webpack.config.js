var path = require('path');
module.exports = {
    entry: path.resolve(__dirname, 'app/main.js'),
    output: {
        filename: "app.js"
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style!css'
        }]
    }
};