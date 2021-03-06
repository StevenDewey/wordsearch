//import main

//#actual wordSearch puzzle organized by 50 rows with 50 chars or 50x50
var wordSearch = [
    ['l','g','q','u','z','u','u','x','v','v','o','h','f','q','j','a','j','o','r','t','s','m','n','y','c','g','k','c','a','n','q','j','v','z','k','y','g','f','c','u','b','v','c','c','g','w','i','z','m','o'],
    ['k','z','j','n','q','e','h','i','m','h','x','r','o','j','x','v','r','q','f','r','v','x','t','k','q','r','l','m','j','s','y','x','r','o','x','d','l','j','o','p','d','h','j','k','w','b','o','m','b','t'],
    ['c','c','i','s','k','v','x','a','g','x','s','w','m','n','v','v','z','y','j','z','o','l','t','m','y','u','q','x','u','c','q','x','r','g','i','n','a','e','h','y','p','l','v','z','n','q','b','i','x','a'],
    ['l','b','s','s','j','o','p','x','z','o','o','z','g','b','r','l','f','n','q','g','x','w','p','b','q','n','o','o','h','s','d','r','h','o','c','w','f','k','f','i','x','o','j','k','s','l','m','l','n','m'],
    ['z','h','n','a','c','c','f','w','m','z','w','h','p','k','b','n','n','f','e','t','n','p','f','s','i','l','j','k','r','u','e','r','e','c','v','e','r','x','j','d','a','c','m','w','a','t','y','l','d','q'],
    ['s','z','j','e','l','j','k','c','o','q','b','r','u','n','w','o','c','u','s','y','z','b','x','g','s','d','b','z','v','o','b','j','w','k','n','p','r','c','i','h','o','p','y','g','s','u','u','p','e','d'],
    ['f','z','p','l','m','e','i','m','p','c','j','v','k','v','x','i','e','n','l','p','f','v','c','y','v','v','x','j','l','p','g','w','a','h','o','p','e','q','x','y','v','u','p','f','i','u','h','m','l','b'],
    ['r','g','c','t','z','a','h','l','d','j','i','f','l','h','s','g','y','w','o','j','n','q','c','k','r','f','u','e','m','f','g','p','p','y','a','b','v','t','n','i','v','k','g','l','o','n','p','h','i','i'],
    ['i','w','m','a','m','b','i','e','o','n','w','p','t','u','w','k','u','g','c','n','y','n','y','y','s','p','j','e','t','w','u','h','y','w','x','y','q','t','i','u','g','c','b','z','e','g','p','x','v','a'],
    ['r','v','v','c','p','t','m','l','z','s','i','x','s','p','h','m','d','e','e','g','m','i','w','n','f','l','w','h','d','n','n','y','g','t','h','e','b','j','b','q','l','w','a','w','p','u','y','p','e','n'],
    ['a','a','z','q','q','z','z','d','z','o','g','r','r','o','i','s','z','v','x','q','l','n','z','b','d','o','v','j','i','m','l','c','e','m','t','k','x','q','i','d','l','k','n','n','i','r','y','s','r','b'],
    ['q','k','s','f','e','i','e','z','a','m','p','v','m','f','k','x','l','j','r','n','q','y','t','b','y','s','s','i','a','w','v','u','t','f','l','z','a','a','p','d','f','p','f','a','g','o','e','e','a','l'],
    ['a','w','r','g','u','c','x','d','b','f','l','q','w','u','m','k','b','a','i','v','n','u','u','m','o','y','u','p','n','z','t','a','a','m','y','c','r','j','b','u','h','b','q','b','h','o','o','b','b','d'],
    ['g','h','x','f','e','l','d','m','n','f','g','a','x','x','p','e','x','h','i','g','b','s','w','d','a','c','p','n','w','v','n','a','r','j','q','k','m','h','r','c','o','f','i','e','c','y','o','q','l','r'],
    ['s','c','b','a','u','w','o','x','o','l','r','t','y','k','m','b','p','x','y','h','a','c','k','d','h','a','q','v','c','v','j','n','t','v','y','s','x','z','r','x','z','v','a','l','s','y','x','l','e','a'],
    ['x','x','c','b','w','v','r','f','z','x','y','o','u','i','u','l','i','o','h','j','w','g','g','c','w','n','u','l','u','q','h','y','s','p','x','s','i','d','c','j','w','h','e','d','n','b','w','a','v','n'],
    ['u','w','m','i','h','u','o','l','p','u','s','j','d','p','o','k','p','l','w','x','z','m','g','t','i','a','k','k','e','w','n','u','o','e','z','a','u','p','j','j','a','x','w','t','g','k','m','g','s','p'],
    ['z','m','l','h','e','x','o','z','c','t','k','l','p','d','p','b','e','u','j','f','h','u','d','d','d','g','u','m','y','u','t','f','h','o','a','a','h','t','j','v','z','k','h','d','q','e','n','y','m','b'],
    ['k','r','g','t','j','i','e','x','y','u','o','a','f','t','d','t','a','s','a','z','v','s','a','u','k','o','k','g','p','u','m','m','r','c','s','l','s','b','g','x','f','l','o','l','j','l','x','u','m','l'],
    ['a','e','r','d','p','w','x','m','n','u','z','c','d','e','c','g','z','u','t','h','e','p','n','w','x','l','e','k','r','k','r','j','q','k','g','d','b','q','r','b','g','w','s','h','a','z','c','v','k','o'],
    ['z','t','m','e','u','l','c','h','r','t','g','b','a','v','p','i','j','l','s','y','b','h','m','b','r','k','u','q','p','r','k','q','k','t','r','h','g','j','t','m','r','g','m','q','o','i','z','s','n','m'],
    ['r','u','e','l','z','h','i','h','g','d','v','d','w','b','p','g','o','w','w','u','z','b','a','l','b','p','p','j','y','g','l','c','c','j','q','d','y','k','g','a','m','l','v','a','n','d','j','c','s','i'],
    ['a','p','j','u','l','g','o','d','n','x','l','u','x','r','n','z','v','r','c','n','r','e','h','n','i','b','i','z','e','o','f','w','k','k','k','x','d','m','b','l','v','l','f','n','e','k','z','k','g','r'],
    ['e','m','x','g','b','b','q','b','o','s','y','z','v','f','z','c','t','a','a','e','u','w','g','j','m','x','z','i','o','s','j','n','e','b','g','i','i','z','c','c','a','c','n','o','r','e','u','f','t','y'],
    ['a','o','z','k','e','a','f','c','u','v','q','t','f','l','m','g','h','x','i','f','p','w','r','c','y','m','z','r','h','v','a','x','n','z','j','c','i','j','s','e','v','r','m','d','p','a','n','c','v','h'],
    ['q','c','s','i','o','b','a','h','v','g','i','y','v','q','s','p','r','b','a','b','f','g','o','a','h','b','r','p','f','h','j','w','u','e','f','k','o','v','t','b','b','h','z','c','h','k','o','a','a','e'],
    ['u','f','k','o','w','e','p','d','h','l','m','p','k','v','x','y','k','l','g','t','r','j','g','j','m','v','z','z','y','a','e','s','b','j','i','d','u','a','n','a','b','t','x','x','u','m','z','k','u','o'],
    ['i','t','w','x','p','x','e','q','y','l','x','d','v','g','w','t','i','e','x','e','r','h','d','y','e','l','w','a','u','y','q','s','b','m','x','m','m','h','p','b','t','b','o','x','y','q','h','r','u','c'],
    ['d','f','y','z','f','c','x','i','s','b','n','j','t','n','w','r','q','u','i','g','a','s','q','e','t','s','z','q','q','a','d','e','m','q','q','n','j','m','k','q','p','t','l','v','f','m','b','k','n','s'],
    ['v','r','c','i','p','b','l','w','a','i','x','y','s','j','n','a','t','d','m','t','g','m','a','u','n','k','l','t','i','a','y','t','d','c','h','i','l','j','j','k','z','g','e','e','e','f','n','a','u','b'],
    ['g','p','s','y','y','x','i','a','e','f','f','b','g','y','k','t','x','x','z','n','t','z','j','h','c','z','n','k','y','b','f','i','n','n','e','a','u','s','w','i','x','m','c','f','h','b','z','c','r','a'],
    ['l','z','c','s','b','b','e','l','k','l','t','m','r','r','a','z','k','z','b','u','j','x','o','o','v','j','p','o','w','e','u','c','h','t','f','b','c','r','n','p','v','h','k','f','p','e','o','p','m','x'],
    ['y','a','w','i','b','z','r','t','n','q','i','s','i','y','h','p','n','j','r','q','c','j','v','l','a','d','x','s','i','c','l','e','i','n','p','n','y','c','h','v','x','m','x','b','b','e','u','h','k','g'],
    ['b','c','d','j','i','l','l','y','e','d','r','b','u','u','b','q','c','l','z','j','e','l','j','n','f','d','o','y','d','j','i','d','f','k','d','g','y','e','i','g','y','q','u','s','i','j','v','o','t','o'],
    ['n','r','m','y','e','s','u','l','r','c','m','n','o','i','v','n','b','p','s','f','i','l','x','u','z','r','w','u','u','v','n','h','h','s','b','k','n','d','z','j','a','e','j','i','s','g','y','y','b','f'],
    ['c','a','j','b','k','j','b','e','p','o','c','f','y','m','b','x','g','p','r','o','s','x','r','l','n','x','n','f','y','g','i','g','j','d','i','u','a','v','i','u','x','r','q','x','u','x','y','t','j','l'],
    ['b','k','a','z','d','g','o','y','w','l','i','s','k','a','p','x','p','t','r','u','n','p','t','u','r','s','z','m','p','a','i','x','a','g','e','t','x','z','b','h','x','f','g','l','p','t','f','v','i','g'],
    ['y','a','e','d','d','i','c','i','w','o','c','w','r','i','d','j','f','z','u','m','d','e','y','p','j','h','f','v','n','l','j','p','s','q','o','x','v','f','x','z','k','z','n','g','s','g','g','a','u','o'],
    ['r','n','x','s','s','a','l','a','o','g','d','l','d','d','b','y','y','s','c','w','k','p','f','d','w','k','z','h','x','t','d','a','e','z','o','q','t','u','r','e','m','m','a','r','g','o','r','p','r','a'],
    ['u','k','u','v','x','m','x','t','p','p','d','r','x','y','b','y','q','e','b','p','w','r','n','a','a','b','a','n','r','v','u','y','a','j','j','h','g','y','h','p','g','v','m','n','g','n','k','n','k','c'],
    ['i','x','t','b','w','c','u','k','y','w','j','q','w','y','d','f','m','t','v','q','r','d','s','d','r','d','w','u','b','d','y','x','w','i','g','z','w','z','u','w','s','u','h','t','o','w','v','d','k','p'],
    ['w','f','x','q','z','x','w','w','t','f','w','j','x','u','g','u','e','n','l','v','r','l','h','d','z','l','w','b','z','w','t','l','t','i','d','q','u','n','k','u','t','a','k','p','p','f','l','o','a','c'],
    ['z','z','y','z','g','i','m','o','b','h','k','i','p','s','u','e','u','p','n','g','k','y','d','y','w','v','f','d','e','w','f','g','d','l','l','o','a','m','v','i','v','z','j','p','p','s','w','y','x','c'],
    ['h','v','n','k','r','h','f','n','j','i','q','t','u','z','u','t','e','z','x','v','y','x','a','m','p','b','u','v','s','a','s','m','s','o','l','y','q','i','z','v','x','b','b','r','l','b','o','x','u','d'],
    ['e','y','l','r','q','q','e','d','e','z','f','h','p','q','g','g','k','u','c','c','i','a','n','x','o','f','y','z','d','x','m','s','i','e','l','b','o','w','r','g','t','s','b','j','m','p','g','q','t','y'],
    ['m','l','w','k','j','x','q','n','g','f','t','u','e','e','u','w','b','i','o','c','h','b','s','p','r','q','z','z','c','b','j','l','c','c','r','y','w','t','h','d','p','b','r','v','m','b','r','p','h','f'],
    ['s','n','o','d','b','s','i','m','z','r','y','d','g','c','s','j','b','m','i','n','j','f','e','n','t','b','c','p','y','i','i','g','d','i','f','e','d','t','k','k','j','g','g','h','r','r','o','h','q','y'],
    ['p','m','r','j','q','o','v','t','k','y','n','c','m','x','r','f','k','t','p','g','e','y','j','o','a','d','l','e','s','r','n','x','o','r','f','v','b','o','j','s','w','u','d','a','t','k','v','k','f','l'],
    ['e','v','s','l','s','i','m','c','d','m','s','f','s','x','b','u','p','w','o','x','v','l','x','g','l','v','d','d','i','o','g','z','c','n','y','h','v','b','w','p','r','o','p','j','e','l','z','o','k','j'],
    ['e','f','m','e','i','e','b','m','e','u','s','s','x','h','m','z','i','u','r','p','x','o','u','w','w','b','r','y','u','v','j','i','a','z','t','p','s','y','y','a','w','e','a','a','b','g','x','x','i','m']
]

//#words hidden in wordSearch puzzle
var wordBank = [
    'dolphin',
    'finneaus',
    'deliverable',
    'programmer',
    'email',
    'computer',
    'mobile',
    'portal',
    'strategy',
    'jorts'
]

// var startingLetters = [
//     {'d':},
//     {'f'},
//     {'p'},
//     {'e'},
//     {'c'},
//     {'m'},
//     {'s'},
//     {'j'}
// ];

function makeWordSearchElements(){
    var board = document.getElementById('wordSearch');
    for(var y = 0; y < 50; y++) {
        var row = document.createElement('div');
        for(var x = 0; x < 50; x++) {
            var letter = document.createElement('div');     
            letter.innerText = wordSearch[y][x];
            letter.setAttribute('class', 'letter');
            letter.setAttribute('id', y + '-' + x);
            row.appendChild(letter);
        }
        board.appendChild(row);
    }
}

var directions = ['left', 'upLeft', 'up', 'upRight', 'right', 'downRight', 'down', 'downLeft'];

makeWordSearchElements();
iterateOverWords();

// function paintCoord(coord){

// }

function iterateOverWords() {
    var i = 0;
        var interval = setInterval(function() {
            document.getElementById('current-word').innerText = 'Current Word: ' + wordBank[i];
            var coord = findWord(wordBank[i]);
            if (i >= wordBank.length -1) { 
                clearInterval(interval);
                document.getElementById('current-word').innerText = 'Solved!';
            }
            i++;
            }, 1000, i);
    // for (var i = 0; i < wordBank.length; i++) {
    //     var coord = findWord(wordBank[i]);
    //     //paintCoord(coord);
    //     //console.log(wordBank[i], ' direction: ', coord.direction, ' startY: ', coord.startY, ' startX: ', coord.startX, ' endY: ', coord.endY, ' endX: ', coord.endX)
    // }
}


function findWord(word){
    for(var y = 0; y < 49; y++) {
        // var y = 0;
        // var interval = setInterval(function() {
            // document.getElementById('current-word').innerText = 'Current Word: ' + word;
            for(var x = 0; x < 50; x++) {
                if (wordSearch[y][x] === word.substring(0,1)){
                    checkPaths(word, y, x);
                }
            }
            // if (y >= 49) { 
            //     clearInterval(interval);
            //     document.getElementById('current-word').innerText = 'Solved!';
            // }
            // y++;
            // }, 1000, y);
        //     if (wordSearch[y][x] === word.substring(0,1)){
        //         // setTimeout(checkPaths(word, y, x), 1000);
        //         // var result = checkPaths(word, y, x);
        //         // if (result !== -1) {
        //         //     return result;
        //         // }
        //     }
    }
}

function checkPaths(word, y, x){
    for(var i = 0; i < directions.length; i++) {
        var result = checkDirection(word, y, x, directions[i]);
        if(result !== -1) {
            return result;
        }
    }
    return -1;
}

function checkDirection(word, y, x, direction){
    var coord = {x: x, y: y};
    var tempCells = [];
    tempCells.push(coord);
    paintTempCell(coord);
    for(var i = 1; i < word.length; i++) {
        coord = getCoord(coord.y, coord.x, direction);
        if(coord.x < 0 || coord.y < 0 || coord.x > 49 || coord.y > 49) {
            clearTempCells(tempCells);
            tempCells = [];
            return -1;
        }
        tempCells.push(coord);
        paintTempCell(coord);
        if(word[i] !== wordSearch[coord.y][coord.x]){
            clearTempCells(tempCells);
            tempCells = [];
            return -1;
        }
        if(i === word.length - 1) {
            finalizeTempCells(tempCells);
            tempCells = [];
            return {direction: direction, startY: y, startX: x, endY: coord.y, endX: coord.x};
        }
        console.log('test: ', word[i] === wordSearch[coord.y][coord.x]);
    }

}

function paintTempCell(coord) {
    var letter = document.getElementById(coord.y + '-' + coord.x);
    if(letter.className.includes('final-highlight')){
        return;
    }
    letter.className += " temp-highlight";
}
function clearTempCells(tempCells) {
    for (var i = 0; i < tempCells.length; i++) {
        var letterCoord = tempCells[i];
        if(document.getElementById(letterCoord.y + '-' + letterCoord.x).className.includes('final-highlight')){
            continue;
        }
        document.getElementById(letterCoord.y + '-' + letterCoord.x).className = "letter";
    }
}
function finalizeTempCells(tempCells) {
    clearTempCells(tempCells);
    for (var i = 0; i < tempCells.length; i++) {
        var letterCoord = tempCells[i];
        document.getElementById(letterCoord.y + '-' + letterCoord.x).className += " final-highlight";
    }
}
function getCoord(y, x, direction){
    switch(direction) {
        case 'left':
            x--;
            break;
        case 'upLeft':
            x--;
            y--;
            break;
        case 'up':
            y--;
            break;
        case 'upRight':
            y--;
            x++;
            break;
        case 'right':
            x++;
            break;
        case 'downRight':
            x++;
            y++;
            break;
        case 'down':
            y++
            break;
        case 'downLeft':
            y++;
            x--;
            break;
    }
    return {x: x, y: y};
}

function getInverseDirection(direction) {
    switch(direction) {
        case 'left':
            return 'right';
        case 'upLeft':
            return 'downRight';
        case 'up':
            return 'down';
        case 'upRight':
            return 'downLeft';
        case 'right':
            return 'left';
        case 'downRight':
            return 'upLeft';
        case 'down':
            return 'up';
        case 'downLeft':
            return 'upRight';
    }
}











