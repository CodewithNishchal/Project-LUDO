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
var player3 = null;
let player3_point = [0,0,0,0];
var player4 = null;
let player4_point = [0,0,0,0];
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



//Choose Player 1 Player 2 Player 3 and Player 4 
for (let i = 0; i < player.length; i++) { 
    player[i].addEventListener('click', function () {
        
        player[i].classList.add('pressed');
        // setTimeout(function () {
        //     player[i].classList.remove('pressed');
        // }, 100);
        if (player1 === null) {
            player1 = this.id;
            setTimeout(function () {
                document.querySelector('div#interrupt-box > h2').innerHTML = "Choose Player 2";
            }, 300);
        }

        else if (this.id === player1) {
            alert("Player 2 cannot be the same as Player 1");
        }
        
        else if (player2 === null)
        {
            player2 = this.id;
            setTimeout(function () {
                document.querySelector('div#interrupt-box > h2').innerHTML = "Choose Player 3";
            }, 300);
        }
        
        else if (this.id === player1 || this.id === player2)
        {
            if (this.id === player1)
                alert("Player 3 cannot be the same as Player 1");

            else
                alert("Player 3 cannot be the same as Player 2")
        }
            
        else if (player3 === null)
        {
            player3 = this.id;
            setTimeout(function () {
                document.querySelector('div#interrupt-box > h2').innerHTML = "Choose Player 4";
            }, 300);
        }
            
        else if (this.id === player1 || this.id === player2 || this.id === player3)
        {
            if (this.id === player1)
                alert("Player 4 cannot be the same as Player 1");

            else if (this.id === player2)
                alert("Player 4 cannot be the same as Player 2");
                
            else
                alert("Player 4 cannot be the same as Player 3")
        }
            
        else {
            player4 = this.id;
            setTimeout(function () {
                main_box.style.display = "grid";
                interrupt.classList.add('make_it_disappear');
                setTimeout(function () {
                    interrupt.style.display = "none";
                    test.style.display = "flex"
                    play.setAttribute('id', 'play');
                    test.classList.add('make_it_appear');
                    setTimeout(function () {
                        for (let i = 0; i < 4; i++)
                        {
                            document.querySelectorAll("div.safe-star")[i].classList.remove('make_it_appear');
                            document.querySelectorAll("div.start-it")[i].classList.remove('make_it_appear');
                        }
                    }, 2000);
                }, 850);
            }, 1000);
        }
    }) 
}



// Main game logic

// Base logic
function start_base() {
    var base1 = document.querySelectorAll('div.B_' + player1 + '> div.B-indexes > div');
    var base2 = document.querySelectorAll('div.B_' + player2 + '> div.B-indexes > div');
    var base3 = document.querySelectorAll('div.B_' + player3 + '> div.B-indexes > div');
    var base4 = document.querySelectorAll('div.B_' + player4 + '> div.B-indexes > div');


    //Player 1 logic for base
    {
        for (let i = 0; i < base1.length; i++) {
            base1[i].addEventListener('click', function () {
                if (Player_turn % 4 === 0)
                    if (Dice_value === 1 || Dice_value === 6)
                    {
                        if(base1[i].classList.contains(player1 + '-' + '0' + (i + 1)))
                            {
                                setTimeout(function () {
                                    base1[i].classList.remove(player1 + '-' + '0' + (i + 1));
                                document.querySelector("div.area > ." + player1 + '-1').classList.add(player1 + '-' + '0' + (i + 1));
                                }, 100);
                                player1_point[i] = 1;
                            Dice_value = 0;
                            setTimeout(function () {
                                document.querySelector('.dice_roll').innerHTML = "Roll!";
                            }, 500);
                            }
                    }
            });
        }
    }
    
    //Player 2 logic for base
    {
        for (let i = 0; i < base2.length; i++) {
            base2[i].addEventListener('click', function () {
                if(Player_turn % 4 === 1)
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
                            setTimeout(function () {
                                document.querySelector('.dice_roll').innerHTML = "Roll!";
                            }, 500);
                        }
                    }
            });
        }
    }

    //Player 3 logic for base
    {
        for (let i = 0; i < base3.length; i++) {
            base3[i].addEventListener('click', function () {
                if(Player_turn % 4 === 2)
                    if (Dice_value === 1 || Dice_value === 6)
                    {
                        if(base3[i].classList.contains(player3 + '-' + '0' + (i + 1)))
                        {
                            setTimeout(function () {
                                base3[i].classList.remove(player3 + '-' + '0' + (i + 1));
                                document.querySelector("div.area > ." + player3 + '-1').classList.add(player3 + '-' + '0' + (i + 1));
                            }, 200);
                            player3_point[i] = 1;
                            Dice_value = 0;
                            setTimeout(function () {
                                document.querySelector('.dice_roll').innerHTML = "Roll!";
                            }, 500);
                        }
                    }
            });
        }
    }


    //Player 4 logic for base
    {
        for (let i = 0; i < base4.length; i++) {
            base4[i].addEventListener('click', function () {
                if(Player_turn % 4 === 3)
                    if (Dice_value === 1 || Dice_value === 6)
                    {
                        if(base4[i].classList.contains(player4 + '-' + '0' + (i + 1)))
                        {
                            setTimeout(function () {
                                base4[i].classList.remove(player4 + '-' + '0' + (i + 1));
                                document.querySelector("div.area > ." + player4 + '-1').classList.add(player4 + '-' + '0' + (i + 1));
                            }, 200);
                            player4_point[i] = 1;
                            Dice_value = 0;
                            setTimeout(function () {
                                document.querySelector('.dice_roll').innerHTML = "Roll!";
                            }, 500);
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
                        if (Player_turn % 4 === 0)
                            if (pointer[i].classList.contains(player1 + '-0' + 1)) 
                            {
                                moveBead(0, i, pointer, player1_point, player1);
                            }
                    });
            }

            
            //logic for player 1 bead 2
            for (let i = 0; i < pointer.length; i++) {
                    pointer[i].addEventListener('click', function () {
                        if (Player_turn % 4 === 0)
                            if (pointer[i].classList.contains(player1 + '-0' + 2)) 
                            {
                                moveBead(1, i, pointer, player1_point, player1);
                            }
                    });
            }
        
            //logic for player 1 bead 3
            for (let i = 0; i < pointer.length; i++) {
                    pointer[i].addEventListener('click', function () {
                        if (Player_turn % 4 === 0)
                            if (pointer[i].classList.contains(player1 + '-0' + 3)) 
                            {
                                moveBead(2, i, pointer, player1_point, player1);
                            }
                    });
            }
        
            //logic for player 1 bead 4
            for (let i = 0; i < pointer.length; i++) {
                    pointer[i].addEventListener('click', function () {
                        if (Player_turn % 4 === 0)
                            if (pointer[i].classList.contains(player1 + '-0' + 4)) 
                            {
                                moveBead(3, i, pointer, player1_point, player1);
                            }
                    });
            }
            




                
            
            
            //Player 2 logic for bead in game
            
            //logic for player 2 bead 1
            for (let i = 0; i < pointer.length; i++) {
                pointer[i].addEventListener('click', function () {
                    if (Player_turn % 4 === 1)
                        if (pointer[i].classList.contains(player2 + '-0' + 1)) 
                        {
                            moveBead(0, i, pointer, player2_point, player2);                          
                        }
                });
            }
            
            //logic for player 2 bead 2
            for (let i = 0; i < pointer.length; i++) {
                pointer[i].addEventListener('click', function () {
                    if (Player_turn % 4 === 1)
                        if (pointer[i].classList.contains(player2 + '-0' + 2)) 
                        {
                            moveBead(1, i, pointer, player2_point, player2);                           

                        }
                });
            }

            //logic for player 2 bead 3
            for (let i = 0; i < pointer.length; i++) {
                pointer[i].addEventListener('click', function () {
                    if (Player_turn % 4 === 1)
                        if (pointer[i].classList.contains(player2 + '-0' + 3)) 
                        {
                            moveBead(2, i, pointer, player2_point, player2);                            
                        }
                });
            }

            //logic for player 2 bead 4
            for (let i = 0; i < pointer.length; i++) {
                pointer[i].addEventListener('click', function () {
                    if (Player_turn % 4 === 1)
                        if (pointer[i].classList.contains(player2 + '-0' + 4)) 
                        {
                            moveBead(3, i, pointer, player2_point, player2);                             
                        }
                });
            }



            //Player 3 logic for bead in game
            
            //logic for player 3 bead 1
            for (let i = 0; i < pointer.length; i++) {
                pointer[i].addEventListener('click', function () {
                    if (Player_turn % 4 === 2)
                        if (pointer[i].classList.contains(player3 + '-0' + 1)) 
                        {
                            moveBead(0, i, pointer, player3_point, player3);                          
                        }
                });
            }
            
            //logic for player 3 bead 2
            for (let i = 0; i < pointer.length; i++) {
                pointer[i].addEventListener('click', function () {
                    if (Player_turn % 4 === 2)
                        if (pointer[i].classList.contains(player3 + '-0' + 2)) 
                        {
                            moveBead(1, i, pointer, player3_point, player3);                           

                        }
                });
            }

            //logic for player 3 bead 3
            for (let i = 0; i < pointer.length; i++) {
                pointer[i].addEventListener('click', function () {
                    if (Player_turn % 4 === 2)
                        if (pointer[i].classList.contains(player3 + '-0' + 3)) 
                        {
                            moveBead(2, i, pointer, player3_point, player3);                            
                        }
                });
            }

            //logic for player 3 bead 4
            for (let i = 0; i < pointer.length; i++) {
                pointer[i].addEventListener('click', function () {
                    if (Player_turn % 4 === 2)
                        if (pointer[i].classList.contains(player3 + '-0' + 4)) 
                        {
                            moveBead(3, i, pointer, player3_point, player3);                             
                        }
                });
            }


            //Player 4 logic for bead in game
            
            //logic for player 4 bead 1
            for (let i = 0; i < pointer.length; i++) {
                pointer[i].addEventListener('click', function () {
                    if (Player_turn % 4 === 3)
                        if (pointer[i].classList.contains(player4 + '-0' + 1)) 
                        {
                            moveBead(0, i, pointer, player4_point, player4);                          
                        }
                });
            }
            
            //logic for player 4 bead 2
            for (let i = 0; i < pointer.length; i++) {
                pointer[i].addEventListener('click', function () {
                    if (Player_turn % 4 === 3)
                        if (pointer[i].classList.contains(player4 + '-0' + 2)) 
                        {
                            moveBead(1, i, pointer, player4_point, player4);                           

                        }
                });
            }

            //logic for player 4 bead 3
            for (let i = 0; i < pointer.length; i++) {
                pointer[i].addEventListener('click', function () {
                    if (Player_turn % 4 === 3)
                        if (pointer[i].classList.contains(player4 + '-0' + 3)) 
                        {
                            moveBead(2, i, pointer, player4_point, player4);                            
                        }
                });
            }

            //logic for player 4 bead 4
            for (let i = 0; i < pointer.length; i++) {
                pointer[i].addEventListener('click', function () {
                    if (Player_turn % 4 === 3)
                        if (pointer[i].classList.contains(player4 + '-0' + 4)) 
                        {
                            moveBead(3, i, pointer, player4_point, player4);                             
                        }
                });
            }
        }
        

        //Supporting Fucntions

        // Check Winner Logic
        function updateStatus(playerName, Points)
        {
            document.querySelector('.center-DOM').classList.remove('fade');
            document.querySelector('.center-DOM').classList.add('unfade');
            document.querySelector('.center-DOM>h2').innerHTML = "Player " + playerName + " has scored: <br>" + Points + " Points";
            setTimeout(function () {
                document.querySelector('.center-DOM').classList.remove('unfade');
                document.querySelector('.center-DOM').classList.add('fade');
            }, 5000);
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
                    if (!topCheck.classList.contains("start-it") && !topCheck.classList.contains("safe-star"))
                        beadOnTop(playerName, topCheck);

                    //Show Bead motion
                    document.querySelector('div.area >.' + playerName + '-' + initial_distance).classList.remove(playerName + '-' + '0' + (playerNo + 1));
                    document.querySelector('div.area >.' + playerName + '-' + (initial_distance + 1)).classList.add(playerName + '-' + '0' + (playerNo + 1));
                    initial_distance++;
                    bead_motion(initial_distance, player_point[playerNo], playerName, playerNo);

                    //make dice value 0
                    Dice_value = 0;
                    setTimeout(function () {
                        document.querySelector('.dice_roll').innerHTML = "Roll!";
                    }, 500);
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
                    setTimeout(function () {
                        document.querySelector('.dice_roll').innerHTML = "Roll!";
                    }, 500);
                }
                    
                else if (player_point[playerNo] === 57) {
                    
                    // Stop the next player until rotating the dice
                    Dice_value = 0;
                    setTimeout(function () {
                        document.querySelector('.dice_roll').innerHTML = "Roll!";
                    }, 500);

                    //Increase the points of player entering base
                    Player_winning[colors.indexOf(playerName)]++;

                    //Move the bead to final stop
                    bead_motion(initial_distance, 56, playerName, playerNo);

                    //Tell the Player that the bead has reached the home
                    setTimeout(function () {
                        updateStatus(playerName, Player_winning[colors.indexOf(playerName)]);
                    }, 500);
                }
            }
        }


        //Check for overlapping of beads Logic
        function beadOnTop(playerName, topCheck)
        {
            var skip = colors.indexOf(playerName);
            var playerSecond;
            console.log(skip); 
            for (let i = 1; i <= 4; i++)
                for (let j = 0; j < colors.length; j++)
                {
                    if (j === skip)
                        continue;

                    if (topCheck.classList.contains(colors[j] + '-0' + i))
                    {
                        if (player1 === colors[j])
                            playerSecond = player1;

                        else if (player2 === colors[j])
                            playerSecond = player2;

                        else if (player3 === colors[j])
                            playerSecond = player3;

                        else
                            playerSecond = player4;

                        
                        topCheck.classList.remove(colors[j] + '-0' + i);
                        bead_cut = 1;
                        setTimeout(function () {
                            document.querySelectorAll('div.B_' + colors[j] + '> div.B-indexes > div')[i-1].classList.add(colors[j] + '-0' + i);
                            document.querySelector('.center-DOM').classList.remove('fade');
                            document.querySelector('.center-DOM').classList.add('unfade');
                            document.querySelector('.center-DOM').classList.add('sword-fight');
                            document.querySelector('.center-DOM>h2').innerHTML = "Player " + playerName + " has devoured " + "Player " + playerSecond;
                            setTimeout(function () {
                                document.querySelector('.center-DOM').classList.remove('unfade');
                                document.querySelector('.center-DOM').classList.add('fade');
                            }, 5000);
                        }, 300);
                        return;
                    }
                }
        }

        
    }

    
        //Bead as well as Base motion over iteration logic
        function bead_motion(initial_distance, final_distance,playerName,playerNo)
        {
            if (initial_distance >= final_distance)
            {
                setTimeout(function () {
                    document.querySelector('div.game-area.' + playerName + '-' + 56).classList.remove(playerName + '-' + '0' + (playerNo + 1));
                }, 300);
                return;
            }

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

            if (prev_value !== 6 && bead_cut === 0) {
                Player_turn++;
            }
            document.querySelector('.dice_roll').innerHTML = "Player " + ((Player_turn % 4) + 1) + "'s turn";

            bead_cut = 0;
            start_base();
            move_player();
    })
});
}

