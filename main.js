function out1(a,b){
    a  =  document.getElementById('a').value;
    b  =  document.getElementById('b').value;
    let c=a*b
    document.getElementById('result1').innerHTML = c;
}

function out2(a){
    var a, c;
    a  =  document.getElementById('d').value;
    if(a%4==0){
        c="Число кратное 4";
    }
    else{
        c="Число не кратно 4";
    }
    document.getElementById('result2').innerHTML = c;
}

function out3(a){
    var a, c;
    a  =  document.getElementById('e').value;
    if(a%4==0){
        c="Год высокосный";
    }
    else{
        c="Год не высокосный";
    }
    document.getElementById('result3').innerHTML = c;
}


function out5(a,b){
    for (let i=a; i<=b; i++){
        console.log(i);
    }
}
let xx=out5(1,10);

function block4(){
    let elem = document.createElement('p');
    elem.style.cssText  = "display: inline-block;margin: 5px; border: 1px dotted black; width:100px; height:100px; background:blue;";
    some_div.append(elem);
}
block4();
block4();
block4();
block4();