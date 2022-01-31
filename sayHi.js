const sayHi =(req, res, next) => {console.log('hello from the first middleware'); next()}


module.exports = sayHi;