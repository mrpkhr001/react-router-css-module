module.exports = function render(locals, callback) {
    console.log(locals.assets);
    callback(null, '<html>Hello!</html>');
};