module.exports = {
    entry: "./index.tsx",
    output: {
        filename: "./bundle.js"
    },
    module: {
        loaders: [
            // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
            //注意一点，当使用webpack命令调用ts-loader时会去当前目录找tsconfig.json中的配置。如果当前目录没有找到，则一直向上找。
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};