const express = require('express');
const axios = require('axios');
const path = require("path");
const app = express();
const PORT = 3000;

// 设置静态文件目录
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // 允许所有来源
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST'); // 允许的请求方法
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // 允许的请求头
    next();
});

app.get('/fetchPage', async (req, res) => {
    try {
        const response = await axios.get('https://bscscan.com/token/0x387b3ea66b610b48af48ed6fec68409b8cdecde6',{
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36'
            }
        });
        res.send(response.data);
    } catch (error) {
        res.status(500).send('Error fetching page');
    }
});

app.listen(PORT, () => {
    console.log(`Proxy server running at http://localhost:${PORT}`);
});