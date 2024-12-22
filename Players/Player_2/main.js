let dice_beads = document.querySelector('.dice-numbers>div').classList;
var play = document.querySelector("button.dice_roll");
var test = document.querySelector("#play-button");
var main_box = document.querySelector("#main-box");
var interrupt = document.querySelector(".interrupt");
var player = document.querySelectorAll(".color-pallete > .color-box");
let colors = ['red', 'blue', 'green', 'yellow'];
var Player_winning = [0, 0, 0, 0];
var player1 = null;
let player1_point = [0,0,0,0];
var player2 = null;
let player2_point = [0,0,0,0];
var Dice_value = 0;
var Player_turn = -1;
var count_of_six = 0;
var prev_value = 0;
var random = 0;
var base_validate = 0;

setTimeout(function () {
    interrupt.style.visibility = "visible";
    interrupt.classList.add('make_it_appear');
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
                interrupt.classList.add('make_it_disappear');
                setTimeout(function () {
                    interrupt.style.display = "none";
                    test.style.display = "flex"
                    play.setAttribute('id', 'play');
                    test.classList.add('make_it_appear');
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
                                setTimeout(function () {
                                base1[i].classList.remove(player1 + '-' + '0' + (i + 1));
                                document.querySelector("div.area > ." + player1 + '-1').classList.add(player1 + '-' + '0' + (i + 1));
                                }, 200);
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
                            setTimeout(function () {
                                base2[i].classList.remove(player2 + '-' + '0' + (i + 1));
                                document.querySelector("div.area > ." + player2 + '-1').classList.add(player2 + '-' + '0' + (i + 1));
                            }, 200);
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
        var pointer = document.querySelectorAll("div.game-area");
        var moveTo = document.querySelectorAll("div.area");


        {     
            
            //logic for player 1 bead 1
            for (let i = 0; i < pointer.length; i++) {
                    pointer[i].addEventListener('click', function () {
                        if (Player_turn % 2 === 0)
                            if (pointer[i].classList.contains(player1 + '-0' + 1)) 
                            {
                                moveBead(0, i, pointer, player1_point, player1);
                            }
                    });
            }

            
            //logic for player 1 bead 2
            for (let i = 0; i < pointer.length; i++) {
                    pointer[i].addEventListener('click', function () {
                        if (Player_turn % 2 === 0)
                            if (pointer[i].classList.contains(player1 + '-0' + 2)) 
                            {
                                moveBead(1, i, pointer, player1_point, player1);
                            }
                    });
            }
        
            //logic for player 1 bead 3
            for (let i = 0; i < pointer.length; i++) {
                    pointer[i].addEventListener('click', function () {
                        if (Player_turn % 2 === 0)
                            if (pointer[i].classList.contains(player1 + '-0' + 3)) 
                            {
                                moveBead(2, i, pointer, player1_point, player1);
                            }
                    });
            }
        
            //logic for player 1 bead 4
            for (let i = 0; i < pointer.length; i++) {
                    pointer[i].addEventListener('click', function () {
                        if (Player_turn % 2 === 0)
                            if (pointer[i].classList.contains(player1 + '-0' + 4)) 
                            {
                                moveBead(3, i, pointer, player1_point, player1);
                            }
                    });
            }
            




                
            console.log(pointer.length);
            
            
            //Player 2 logic for bead in game
            
            //logic for player 2 bead 1
            for (let i = 0; i < pointer.length; i++) {
                pointer[i].addEventListener('click', function () {
                    if (Player_turn % 2 !== 0)
                        if (pointer[i].classList.contains(player2 + '-0' + 1)) 
                        {
                            moveBead(0, i, pointer, player2_point, player2);                          
                        }
                });
            }
            
            //logic for player 2 bead 2
            for (let i = 0; i < pointer.length; i++) {
                pointer[i].addEventListener('click', function () {
                    if (Player_turn % 2 !== 0)
                        if (pointer[i].classList.contains(player2 + '-0' + 2)) 
                        {
                            moveBead(1, i, pointer, player2_point, player2);                           

                        }
                });
            }

            //logic for player 2 bead 3
            for (let i = 0; i < pointer.length; i++) {
                pointer[i].addEventListener('click', function () {
                    if (Player_turn % 2 !== 0)
                        if (pointer[i].classList.contains(player2 + '-0' + 3)) 
                        {
                            moveBead(2, i, pointer, player2_point, player2);                            
                        }
                });
            }

            //logic for player 2 bead 4
            for (let i = 0; i < pointer.length; i++) {
                pointer[i].addEventListener('click', function () {
                    if (Player_turn % 2 !== 0)
                        if (pointer[i].classList.contains(player2 + '-0' + 4)) 
                        {
                            moveBead(3, i, pointer, player2_point, player2);                             
                        }
                });
            }

        }
        

        //Supporting Fucntions

        // Check Winner Logic
        function checkWinner(player_chosen)
        {
            if (player_chosen === 4)
            {
                alert("Player 1 Wins");
                location.reload();
            }
        }

        // Move Bead Logic
        function moveBead(playerNo, i, pointer, player_point, playerName)
        {
            var topCheck = document.querySelector('div.area >.' + playerName + '-' + (player_point[playerNo] + Dice_value));
            var initial_distance = player_point[playerNo];
            
            if (Dice_value !== 0)
            {
                player_point[playerNo] += Dice_value;

                if (player_point[playerNo] < 52) {

                    //check for bead on top 
                    if (!topCheck.classList.contains("start-it"))
                        beadOnTop(playerName, topCheck);

                    //Show Bead motion
                    document.querySelector('div.area >.' + playerName + '-' + initial_distance).classList.remove(playerName + '-' + '0' + (playerNo + 1));
                    document.querySelector('div.area >.' + playerName + '-' + (initial_distance + 1)).classList.add(playerName + '-' + '0' + (playerNo + 1));
                    initial_distance++;
                    bead_motion(initial_distance, player_point[playerNo], playerName, playerNo);

                    //make dice value 0
                    Dice_value = 0;
                }
                
                else if (player_point[playerNo] < 57) {

                    //Base motion
                    console.log(player_point[playerNo]);
                    document.querySelector('div.game-area.' + playerName + '-' + initial_distance).classList.remove(playerName + '-' + '0' + (playerNo + 1));
                    document.querySelector('div.game-area.' + playerName + '-' + (initial_distance + 1)).classList.add(playerName + '-' + '0' + (playerNo + 1));
                    initial_distance++;
                    bead_motion(initial_distance, player_point[playerNo], playerName, playerNo);


                    //make dice value 0
                    Dice_value = 0;
                }
                    
                else if (player_point[playerNo] === 57) {
                    Dice_value = 0;
                    pointer[i].classList.remove(playerName + '-0' + (playerNo + 1));
                    Player_winning[playerNo]++;
                    checkWinner(Player_winning[playerNo]);
                }
            }
        }


        //Check for overlapping of beads Logic
        function beadOnTop(playerName, topCheck)
        {
            var skip = colors.indexOf(playerName);
            console.log(skip); 
            for (let i = 1; i <= 4; i++)
                for (let j = 0; j < colors.length; j++)
                {
                    if (j === skip)
                        continue;

                    if (topCheck.classList.contains(colors[j] + '-0' + i))
                    {
                        topCheck.classList.remove(colors[j] + '-0' + i);
                        setTimeout(function () {
                            document.querySelectorAll('div.B_' + colors[j] + '> div.B-indexes > div')[i-1].classList.add(colors[j] + '-0' + i);
                         },300);
                        return;
                    }
                }
        }

        
    }

    
        //Bead as well as Base motion over iteration logic
        function bead_motion(initial_distance, final_distance,playerName,playerNo)
        {
            if (initial_distance >= final_distance)
                return;

            else if(initial_distance < final_distance) {
                setTimeout(function () {
                        document.querySelector('div.game-area.' + playerName + '-' + initial_distance).classList.remove(playerName + '-' + '0' + (playerNo + 1));
                        document.querySelector('div.game-area.' + playerName + '-' + (initial_distance + 1)).classList.add(playerName + '-' + '0' + (playerNo + 1));
                        initial_distance++;
                        bead_motion(initial_distance, final_distance, playerName, playerNo);
                }, 500);
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

