// webpack.config.js
module.exports = {
    entry: [
        './src//top-sales-list/jQueryTopSalesExport.js'
    ],
    output: {
                filename: './dist/TopSalesList/jqueryComponent.js',
                library: ['TopSalesListModule'],
                libraryTarget: 'umd'
            },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loaders: ['babel']
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    externals: {
        "react": "React",
        "react/addons": "React",
        "jQuery": "jQuery"
    },
};