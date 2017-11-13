var fs = require('fs');

exports.upload = function(request,response) {
    console.log('Rozpoczynam obsługę żądania upload');
    fs.readFile('templates/start.html', function(err, html) {
        response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        response.write(html);
        response.end();
    });
    response.end()
}

exports.welcome = function(request,response) {
    console.log('Rozpoczynam obsługę żądania welcome');
    response.write('Witaj na stronie startowej');
    response.end();
}

exports.error = function(request,response) {
    console.log('Kurza twarz :( Nie wiem, co robić');
    response.write('404 :( Kurza twarz, nie wiem, co robić.');
    response.end();
}