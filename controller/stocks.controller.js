const {PythonShell} = require('python-shell')
const fs = require('fs')
exports.stocksDelivery = async(req, res, next)=>{
    const {symbol} = req.body; 
    console.log(symbol)
    let options = {
        scriptPath : 'D:/delivery data stocks/backend/stock/controller',
        args : [symbol]
    }
    PythonShell.run('delivery.py', options).then(messages=>{
        // results is an array consisting of messages collected during execution
        
        fs.writeFileSync('data.csv', messages.join().replaceAll('],', ']#\n').replace('[', '').slice(0,-1).replaceAll('[', '').replaceAll(']', ''))
        fs.readFile('data.csv', 'utf8', function(err, data){
            // Display the file content
            let arr = data.split('#');
            res.status(200).json({
                status : 'success',
                data : arr
            })
        });
         
    });

}