let title = document.querySelector(".title")

let turn = 'x'
let squars = []
function end(num1,num2,num3) {
    title.innerHTML = `${squars[num1]} winner`
    document.getElementById("item"+num1).style.backgroundColor ="#000"
    document.getElementById("item"+num2).style.backgroundColor ="#000"
    document.getElementById("item" +num3).style.backgroundColor = "#000"
    setInterval(() => { title.innerHTML += "." }, 1000)
    setTimeout(() => {location.reload()},4000)
}
function winner() {
    for (let i = 1; i < 10; i++){
        squars[i] = document.getElementById("item" + i).innerHTML;
    }
    if (squars[1] == squars[2] && squars[2] == squars[3] && squars[1] !== "") {
        end(1,2,3)
    } else if (squars[4] == squars[5] && squars[5] == squars[6]&& squars[4] !== "") {
        end(4,5,6)
    } else if (squars[7] == squars[8]  &&squars[8]== squars[9] && squars[7] !== "") {
        end(7,8,9)
    }
    else if (squars[1] == squars[4] && squars[7] && squars[1] !== "") {
        end(1,4,7)
    }
    else if (squars[2] == squars[5] &&squars[5]== squars[8] && squars[2] !== "") {
        end(2,5,8)
    }
    else if (squars[3] == squars[6] && squars[9] && squars[3] !== "") {a
        end(3,6,9)
    }
    else if (squars[1] == squars[5] && squars[9] && squars[1] !== "") {
        end(1,5,9)
    }
    else if (squars[3] == squars[5] && squars[7] && squars[3] !== "") {
        end(3,5,7)
    }
}
function gem(id) {
    let element = document.getElementById(id);
    if (turn === 'x' && element.innerHTML == '') {
        element.innerHTML = 'x';
        turn = 'o'
        title.innerHTML = turn
    } else if (turn === "o" && element.innerHTML == "") {
        element.innerHTML = "o"
        turn = "x"
        title.innerHTML = turn
    }
    winner()
}