const express = require('express');

const app = express();
const PORT = 3000;
app.listen(PORT, (error) => {
    if (!error) {
        console.log(`Server is Successfully Running, 
                   and App is listening on port + ${PORT}`)
    }
    else {
        console.log("Error occurred, server can't start", error);
    }
}
);
const logReq = function (req, res, next) {
    console.log('Request Received');
    next();
}

app.use(logReq);

app.use(routes);

app.get('/', (req, res) => {
    res.send('the home page for the weather')
})

app.get('/alerts', (req, res) => {
    res.send('this is the Alert page')
})

app.get('/air-quality', (req, res) => {
    res.send('this is the air-quality page')
})

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
})
