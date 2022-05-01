const http = require('http');

// http.createServer((req,res)=>{
//     res.write('hii');
//     res.end();
// }).listen(2000);

const testfunc = (req,res)=>{
    res.write('<h1>hii testing</h1>');
    res.end();
}

http.createServer(testfunc).listen(1300);