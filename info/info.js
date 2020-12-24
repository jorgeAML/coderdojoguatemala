function time () {
    console.log('SERVER INFORMATION:');
    console.log('------------------------');
    const info = [
        { id: 'superUser', name: 'JorgeAML'},
        { updated: 'JorgeAML'},
        { day: 23, month: 'December', year: 2020},
        { localhost: 1703, server: 'NODES'}
    ];
    console.log('User info: ' + info[0].id + ", " + info[0].name);
    console.log('Updater info: ' + info[1].updated);
    console.log('Last serius commit: ' + info[2].day + "." + info[2].month + "." + info[2].year);
    console.log('localhost: ' + info[3].localhost + ", " + info[3].server);
    console.log('------------------------');
};
time();
