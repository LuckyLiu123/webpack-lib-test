if(process.env.NODE_ENV !== 'production'){
    module.exports = require('./umd/add-number.min.js');
}else{
    module.exports = require('./umd/add-number.js');
}