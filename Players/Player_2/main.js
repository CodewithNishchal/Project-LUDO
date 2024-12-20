let dice_beads = document.querySelector('.dice-numbers>div').classList;
var play = document.querySelector("button#play");
var main_box = document.querySelector("#main-box");
var interrupt = document.querySelector(".interrupt");
var player = document.querySelectorAll(".color-pallete > .color-box");
var player1 = null;
let player1_point = [0,0,0,0];
var player2 = null;
let player2_point = [0,0,0,0];
var Dice_value = 0;
var Player_turn = -1;
var count_of_six = 0;
var prev_value = 0;
var random = 0;

setTimeout(function () {
    interrupt.style.visibility = "visible";
}, 1000);



//Choode Player 1 and Player 2
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



// Main game logic

// Base logic
function start_base() {
    var base1 = document.querySelectorAll('div.B_' + player1 + '> div.B-indexes > div');
    var base2 = document.querySelectorAll('div.B_' + player2 + '> div.B-indexes > div');


    //Player 1 logic for base
    {
        for (let i = 0; i < base1.length; i++) {
            base1[i].addEventListener('click', function () {
                if (Player_turn % 2 === 0)
                    if (Dice_value === 1 || Dice_value === 6)
                    {
                        if(base1[i].classList.contains(player1 + '-' + '0' + (i + 1)))
                            {
                                base1[i].classList.remove(player1 + '-' + '0' + (i + 1));
                                document.querySelector("div.area > ." + player1 + '-1').classList.add(player1 + '-' + '0' + (i + 1));
                                player1_point[i] = 1;
                                Dice_value = 0;
                            }
                    }
            });
        }
    }
    
    //Player 2 logic for base
    {
        for (let i = 0; i < base2.length; i++) {
            base2[i].addEventListener('click', function () {
                if(Player_turn % 2 !== 0)
                    if (Dice_value === 1 || Dice_value === 6)
                    {
                        if(base2[i].classList.contains(player2 + '-' + '0' + (i + 1)))
                        {
                            base2[i].classList.remove(player2 + '-' + '0' + (i + 1));
                            document.querySelector("div.area > ." + player2 + '-1').classList.add(player2 + '-' + '0' + (i + 1));
                            player2_point[i] = 1;
                            Dice_value = 0;
                        }
                    }
            });
        }
    }


}


// Main logic for Bead in game

    //Player 1 logic for bead in game
    function move_player()
    {
        var pointer = document.querySelectorAll("div.area > div.game-area");
        var moveTo = document.querySelectorAll("div.area");


        {        
            for (let i = 1; i < pointer.length; i++) {
                    pointer[i].addEventListener('click', function () {
                        if (Player_turn % 2 === 0)
                            if (pointer[i].classList.contains(player1 + '-0' + 1)) 
                            {
                                player1_point[0] = player1_point[0] + Dice_value;
                                if (player1_point[0] < 44)
                                {
                                    pointer[i].classList.remove(player1 + '-0' + 1);
                                    document.querySelector('div.area >.' + player1 + '-' + player1_point[0]).classList.add(player1 + '-0' + 1);
                                    Dice_value = 0;
                                }
                            }
                    });
            }
        
            for (let i = 1; i < pointer.length; i++) {
                    pointer[i].addEventListener('click', function () {
                        if (Player_turn % 2 === 0)
                            if (pointer[i].classList.contains(player1 + '-0' + 2)) 
                            {
                                player1_point[1] = player1_point[0] + Dice_value;
                                if (player1_point[1] < 44)
                                {
                                    pointer[i].classList.remove(player1 + '-0' + 2);
                                    document.querySelector('div.area >.' + player1 + '-' + player1_point[1]).classList.add(player1 + '-0' + 2);
                                    Dice_value = 0;
                                }
                            }
                    });
            }
        
            for (let i = 1; i < pointer.length; i++) {
                    pointer[i].addEventListener('click', function () {
                        if (Player_turn % 2 === 0)
                            if (pointer[i].classList.contains(player1 + '-0' + 3)) 
                            {
                                player1_point[2] = player1_point[2] + Dice_value;
                                if (player1_point[2] < 44)
                                {
                                    pointer[i].classList.remove(player1 + '-0' + 3);
                                    document.querySelector('div.area >.' + player1 + '-' + player1_point[2]).classList.add(player1 + '-0' + 3);
                                    Dice_value = 0;
                                }
                            }
                    });
            }
        
            for (let i = 1; i < pointer.length; i++) {
                    pointer[i].addEventListener('click', function () {
                        if (Player_turn % 2 === 0)
                            if (pointer[i].classList.contains(player1 + '-0' + 4)) 
                            {
                                player1_point[3] = player1_point[3] + Dice_value;
                                if (player1_point[3] < 44)
                                {
                                    pointer[i].classList.remove(player1 + '-0' + 4);
                                    document.querySelector('div.area >.' + player1 + '-' + player1_point[3]).classList.add(player1 + '-0' + 4);
                                    Dice_value = 0;
                                }
                            }
                    });
            }
        

                
            console.log(player1_point[2]);
            
            
            //Player 2 logic for bead in game
            
            for (let i = 1; i < pointer.length; i++) {
                pointer[i].addEventListener('click', function () {
                    if (Player_turn % 2 !== 0)
                        if (pointer[i].classList.contains(player2 + '-0' + 1)) 
                        {
                            player2_point[0] += Dice_value;
                            if (player2_point[0] < 44)
                            {
                                pointer[i].classList.remove(player2 + '-0' + 1);
                                document.querySelector('div.area >.' + player2 + '-' + player2_point[0]).classList.add(player2 + '-0' + 1);
                                Dice_value = 0;
                            }
                        }
                });
            }
            
            for (let i = 1; i < pointer.length; i++) {
                pointer[i].addEventListener('click', function () {
                    if (Player_turn % 2 !== 0)
                        if (pointer[i].classList.contains(player2 + '-0' + 2)) 
                        {
                            player2_point[1] += Dice_value;
                            if (player2_point[1] < 44)
                            {
                                pointer[i].classList.remove(player2 + '-0' + 2);
                                document.querySelector('div.area >.' + player2 + '-' + player2_point[1]).classList.add(player2 + '-0' + 2);
                                Dice_value = 0;
                            }
                        }
                });
            }
            for (let i = 1; i < pointer.length; i++) {
                pointer[i].addEventListener('click', function () {
                    if (Player_turn % 2 !== 0)
                        if (pointer[i].classList.contains(player2 + '-0' + 3)) 
                        {
                            player2_point[2] += Dice_value;
                            if (player2_point[2] < 44)
                            {
                                pointer[i].classList.remove(player2 + '-0' + 3);
                                document.querySelector('div.area >.' + player2 + '-' + player2_point[2]).classList.add(player2 + '-0' + 3);
                                Dice_value = 0;
                            }
                        }
                });
            }
            for (let i = 1; i < pointer.length; i++) {
                pointer[i].addEventListener('click', function () {
                    if (Player_turn % 2 !== 0)
                        if (pointer[i].classList.contains(player2 + '-0' + 4)) 
                        {
                            player2_point[3] += Dice_value;
                            if (player2_point[3] < 44)
                            {
                                pointer[i].classList.remove(player2 + '-0' + 4);
                                document.querySelector('div.area >.' + player2 + '-' + player2_point[3]).classList.add(player2 + '-0' + 4);
                                Dice_value = 0;
                            }
                        }
                });
            }

    }

        
    }




// Dice rotation logic
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
    prev_value = random;
    random = Math.floor(Math.random() * 6) + 1;
    Dice_value = random;
    for (var i = 1; i <= 6; i++)
        if (dice_beads.contains("bead_" + i))
            dice_beads.remove("bead_" + i);

    AddRemove(1, function ()
    {
        AddRemove(1, function ()
        {
            dice_beads.add("bead_" + random);
            if (prev_value !== 6)
            {
                Player_turn++;
            }
            start_base();
            move_player();
    })
});
}

