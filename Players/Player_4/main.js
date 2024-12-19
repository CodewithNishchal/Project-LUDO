
var random;
let dice_beads = document.querySelector('.dice-numbers>div').classList;
var play = document.querySelector("button#play");
var main_box = document.querySelector("#main-box");
var interrupt = document.querySelector(".interrupt");
var player = document.querySelectorAll(".color-pallete > .color-box");
var player1 = null;
var player2 = null;

setTimeout(function () {
    interrupt.style.visibility = "visible";
}, 1000);

for (let i = 0; i < player.length; i++) { 
    player[i].addEventListener('click', function () {
        
        player[i].classList.add('pressed');
        setTimeout(function () {
            player[i].classList.remove('pressed');
        }, 100);
        if (player1 === null) {
            player1 = this.id;
            document.querySelector('div#interrupt-box > h2').innerHTML = "Choose Player 2";
        }
        else if (this.id === player1) {
            alert("Player 2 cannot be the same as Player 1");
        }
        else {
            player2 = this.id;
            setTimeout(function () {
                main_box.style.display = "grid";
                interrupt.style.display = "none";
                setTimeout(function () {
                    play.style.visibility = "visible";
                }, 1000);
            }, 1000);
        }
    })
}

play.addEventListener("click", function () {
    rotateDice(); 
});

function AddRemove(i,callback)
{
    if (i > 6)
    {
        callback();
        return;
    }
    dice_beads.add('bead_' + i);

    setTimeout(function () {
        dice_beads.remove('bead_' + i);
        AddRemove(i + 1,callback);
    }, 100);
}

function rotateDice()
{
    random = Math.floor(Math.random() * 6) + 1;
    for (var i = 1; i <= 6; i++)
        if (dice_beads.contains("bead_" + i))
            dice_beads.remove("bead_" + i);

    AddRemove(1, function ()
    {
        AddRemove(1, function ()
        {
            dice_beads.add("bead_" + random);
    })
});
}