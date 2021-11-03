

    let x = 101;

    let firstObject = {
        'id': 1,
        'name': 'Anton',
        'alive': true,
        'sleeped': null,
        'coffee': undefined
    }

    let firstArray = [
        'first',
        1,
        false,
        null,
        undefined,
        firstObject,
        'qwe',
        [
            {
                'alive': false,
                'name': 'Bob',
                'sex': 'trans'
            }
        ]
    ];

    x = 1


    if (x === 101) {
        console.log('work')
    } else if (x === 1) {
        console.log('work')
    } else {
        console.log('ne work')
    }

    x === 101 || x === 1 ? console.log('work') : console.log('ne work');

    x = 'SOME_GET_REQUEST';

    switch (x) {
        case 'SOME_GET_REQUEST':
            console.log('SOME_GET_REQUEST');

            break;
        case 'SOME_POST_REQUEST':
            console.log('SOME_POST_REQUEST');

            break;
        case 'SOME_DELET_REQUEST':
            console.log('SOME_DELET_REQUEST');

            break;

        default:
            console.log('ERROR NO REQUEST');

            break;
    }


    if (x) {
        console.log('x work!');
    }

    let myPerfectArray = [];


    for (let i = 0; i < 5; i++) {
        myPerfectArray.push(prompt(`Enter item ${i}`));
    }

    let j = 0
    while (j < myPerfectArray.length) {
        console.log(myPerfectArray[j]);
        j++
    }
