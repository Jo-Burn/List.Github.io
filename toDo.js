let todAry = [];
let weAry = [];
let moAry = [];
let toEn = document.getElementById('toEn').addEventListener('click', printTo);
//let weEn = document.getElementById('WeEn').addEventListener('click', pushFun()); wouldn't work idk why;
let moEn = document.getElementById('moEn').addEventListener('click', printMo);
let toRe = document.getElementById('toRe').addEventListener('click', clearTo);
let weRe = document.getElementById('weRe').addEventListener('click', clearWe)
let moRe = document.getElementById('moRe').addEventListener('click', clearMo);
let today = document.getElementById('today').value;
let week = document.getElementById('week');
let month = document.getElementById('month');   
toEn
document.getElementById('weEn').onclick = function() {printWe()};
moEn
toRe
weRe
moRe
function pushFun() {
todAry.push(document.getElementById('today').value);
weAry.push(document.getElementById('week').value)
moAry.push(document.getElementById('month').value)
//document.getElementById('test').innerHTML = todAry;
console.log(todAry);
//console.log(weAry);
//console.log(moAry)
 printTo();
 printWe();
}
function printTo() {
    todAry.push(document.getElementById('today').value);
    let toSet = todAry.filter((element, index) => {
        return todAry.indexOf(element) === index;
    });
    for(let i = 0; i < toSet.length; i++) {
        for(let j = 0; j < toSet.length; j++) {
         if(toSet[i] == toSet[j]) {
           if(toSet[i] == '') {
               console.log('sorry')
           } else {
               (function () {
                   let olT = document.getElementById('olT')
               let li = document.createElement('li')
               li.appendChild(document.createTextNode(toSet[i]))
               olT.appendChild(li);
    
                let bu = document.createElement('button');
                bu.appendChild(document.createTextNode('remove'))
                li.appendChild(bu);
                let yes = bu.addEventListener('click', click)
                yes
                function click() {
                 li.replaceChildren();
                }
               })();              
           }
         }
        }
        toSet = [];
        todAry = [];
       }
}
function printWe() {
    weAry.push(document.getElementById('week').value)
    let toSet = weAry.filter((element, index) => {
        return weAry.indexOf(element) === index;
    });
    for(let i = 0; i < toSet.length; i++) {
        for(let j = 0; j < toSet.length; j++) {
         if(toSet[i] == toSet[j]) {
           if(toSet[i] == '') {
               console.log('sorry')
           } else {
               (function () {
                   let olT = document.getElementById('olW')
               let li = document.createElement('li')
               li.appendChild(document.createTextNode(toSet[i]))
               olT.appendChild(li);

               let bu = document.createElement('button');
                bu.appendChild(document.createTextNode('remove'))
                li.appendChild(bu);
                let yes = bu.addEventListener('click', click)
                yes
                function click() {
                 li.replaceChildren();
                }
               })();
           }
         }
        }
        toSet = [];
        weAry = [];
       }
}
function printMo() {
    todAry.push(document.getElementById('today').value);
    moAry.push(document.getElementById('month').value)
    let toSet = moAry.filter((element, index) => {
        return moAry.indexOf(element) === index;
    });
    for(let i = 0; i < toSet.length; i++) {
        for(let j = 0; j < toSet.length; j++) {
         if(toSet[i] == toSet[j]) {
           if(toSet[i] == '') {
               console.log('sorry')
           } else {
               (function () {
                   let olT = document.getElementById('olM')
               let li = document.createElement('li')
               li.appendChild(document.createTextNode(toSet[i]))
               olT.appendChild(li);

               let bu = document.createElement('button');
                bu.appendChild(document.createTextNode('remove'))
                li.appendChild(bu);
                let yes = bu.addEventListener('click', click)
                yes
                function click() {
                 li.replaceChildren();
                }
               })();
           }
         }
        }
        toSet = [];
        moAry = [];
       }
}
function clearTo() {
    console.log('yes');
    var all = document.getElementById('olT');
    all.replaceChildren();
}
function clearWe() {
    console.log('yes');
    var all = document.getElementById('olW');
    all.replaceChildren();
}
function clearMo() {
    console.log('yes');
    var all = document.getElementById('olM');
    all.replaceChildren();
}