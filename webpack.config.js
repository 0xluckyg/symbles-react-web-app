module.exports = {
    entry: './src',
    output:{
        filename: 'bundle.js'
    },
    module:{
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel-loader']
            },
            {
                test: /\.css$/,
                loaders: [
                    'style?sourceMap',
                    'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
                ]
            },
            {
                test: /\.(jpg|png)$/,
                loader: 'url-loader'                
            }, 
            {
                test: /\.json$/,                 
                loader: 'json-loader'
            }
        ]
    },    
}
