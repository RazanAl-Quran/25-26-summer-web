console.log("ALIVEEEEE");


function clickmefunc() {
    // let ele = document.getElementById("demo");
    // console.log(ele);
    // ele.innerHTML="You just clicked me!!!";

    document.getElementById('demo').innerHTML = "You just clicked me!!!";
    // document.querySelector('#demo').innerHTML = "You just clicked me!!!";
}

function evenOdd() {
    let n1 = parseInt(prompt("add number"));

    let evenodd = document.getElementById("evenOddResult");


    if (n1 % 2) {
        // odd
        evenodd.innerHTML = "odd"
    } else {
        // even
        evenodd.innerHTML = "even"

    }
}


function changeBackground() {
    // let allPs = document.getElementsByTagName('p');
    // let allPs = document.getElementsByClassName("matrix");
    let allPs = document.querySelectorAll("#news .matrix");

    console.log(allPs);

    allPs[0].style.backgroundColor = 'aqua';
    allPs[1].style.backgroundColor = 'blue';
    allPs[2].style.backgroundColor = 'yellow';

}

function reset() {
     let allPs = document.getElementsByTagName('p');
    console.log(allPs);

    allPs[0].style.backgroundColor = '';
    allPs[1].style.backgroundColor = '';
    allPs[2].style.backgroundColor = '';
}