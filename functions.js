function focusinput(){
    alert("Please Enter Your Username !")
}

function keyupinput(event) {
    if (event.keyCode != 8 && event.keyCode >= 65 && event.keyCode <= 90 || event.keyCode >= 32){
        document.getElementById('counter').innerHTML = eval(document.getElementById('counter').innerHTML) + 1
    }
    else if (event.keyCode == 8 && eval(document.getElementById('counter').innerHTML) != 0){
        document.getElementById('counter').innerHTML = eval(document.getElementById('counter').innerHTML) - 1
    }
    
}

function keydowninput() {
    alert("use alpha numeric!!!")
}

function mouseover(elm){
    document.getElementById('hoverme_txt').innerHTML="hello"
    elm.style.color="navy"
    elm.style.borderRadius="20%"
}
function mouseout(elm){
    document.getElementById('hoverme_txt').innerHTML = "bye"
    elm.style.color="purple"
    elm.style.borderRadius="50%"
}

function blurinput() {
    alert("Are You Sure ?")
}

function txtclickinput() {
    alert("Write about yourself !")
}

function signupblur() {
    alert("You'r Account has been created.")
}

function mouseoverimg(elm) {
    elm.src = "./files/s21-2.jpg"
}
function mouseoutimg(elm) {
    elm.src = "./files/s21.jpg"
}



















