let packager = require('electron-packager');
let options = {
    'arch': 'ia32',
    'platform': 'win32',
    'dir': './',
    'appCopyright': 'Copyright © 2018 Amin Rasouli . All rights reserved.',
    'appVersion': '1.5',
    'icon': './src/assets/img/arabic2.ico',
    'name': 'Arabic2',
    'ignore': ['./builds', './.git', './.idea'],
    'out': './builds',
    'overwrite': true,
    'prune': true,
    'win32metadata': {
        'CompanyName': 'Amin Rasouli',
        'FileDescription': 'Arabic2',
        'OriginalFilename': 'Arabic2',
        'ProductName': 'Arabic2',
        'InternalName': 'Arabic2'
    }
};
packager(options, function done_callback(err, appPaths) {
    console.log(err);
    console.log(appPaths);
});