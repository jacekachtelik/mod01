var os = require('os');
// Funckja pobierajaca dane środowiska
function getOsInfo() {
    var type = os.type();
    console.log(type);
    if (type === 'Darwin') {
        type = 'OSX';
    } else if (type === 'Windows_NT') {
        type = 'Windows';
    } else if (type === 'Linux') {
        // Nic nie rób. nazwa jest ok.
    } else {
        type = 'Typ nieznany';
    }
    var release = os.release();
    var uptime = os.uptime();
    console.log('System: ' + type);
    console.log('Release: ' + release);
    console.log('CPU: ' + os.cpus()[0]['model']);
    console.log('Uptime: ~', (uptime / 60).toFixed(0), 'min');
    console.log('User name:', os.userInfo().username);
    console.log('Home dir:', os.userInfo().homedir);
}

// Proces obsługi interakcji z użytkownikiem z poziomu konsoli
process.stdin.setEncoding("utf-8");
process.stdin.on('readable', function() {
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/hello':
                process.stdout.write('Hello ;-)\n');
                break;
            case '/getOsInfo':
                getOsInfo();
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
                break;
        }  
    }
});