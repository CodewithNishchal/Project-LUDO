// Checking the resolution of mobile or PC
const mediaQuery = window.matchMedia('(min-width: 600px)');

var mediaCheck = 0;

function handleMediaQueryChange(event) {
    if (event.matches)
    {
        mediaCheck = 1;
    }
    else {
        mediaCheck = 0;
    }
}

handleMediaQueryChange(mediaQuery);


setTimeout(function () {
    document.querySelector('div#Welcome-Page > h2').innerHTML = "Welcome";
    document.querySelector('div#Welcome-Page > h2').classList.add('Welcome-LtoR');
    setTimeout(function () {
        document.querySelector('div#Welcome-Page > h2').classList.remove('Welcome-LtoR');
        setTimeout(function () {
            document.querySelector('div#Welcome-Page > h2').classList.add('Welcome-LtoR');
            document.querySelector('div#Welcome-Page > h2').innerHTML = "To";
            setTimeout(function () {
                document.querySelector('div#Welcome-Page > h2').classList.remove('Welcome-LtoR');
            }, 1200);
            setTimeout(function () {
                document.querySelector('div#Welcome-Page > h2').classList.add('Welcome-LtoR');

                if (mediaCheck)
                    document.querySelector('div#Welcome-Page > h2').style.fontSize = "13vh";
                
                document.querySelector('div#Welcome-Page > h2').innerHTML = "A Traditional game of India";
                setTimeout(function () {
                    document.querySelector('div#Welcome-Page > h2').classList.remove("Welcome-LtoR");
                }, 1100);
                setTimeout(function () {
                    document.querySelector('div#Welcome-Page > h2').classList.add("unfade");
                    
                    if (mediaCheck)
                        document.querySelector('div#Welcome-Page > h2').style.fontSize = "20vh";

                    document.querySelector('div#Welcome-Page > h2').innerHTML = "Chausar";
                        
                    setTimeout(function () {
                        document.querySelector('div#Welcome-Page').classList.add('justify');
                        document.querySelector('div#Welcome-Page > h2').classList.remove("unfade");
                        setTimeout(function () {
                            document.querySelector('div#Welcome-Page > h2').classList.remove("Welcome-heading-1");
                            document.querySelector('div#Welcome-Page > h2').classList.add("Welcome-heading-2");
                        }, 100);
                        setTimeout(function () {
                            document.querySelector('div#Welcome-Page > .Instruction-buttons').style.visibility = "visible";
                            document.querySelector('div#Welcome-Page > .Instruction-buttons').classList.add('unfade');
                        }, 2500);
                    }, 1000);
                }, 2000)
            }, 1300);
        }, 100);
    }, 1300);
}, 500);
    

function getItStarted()
{
    document.querySelector('div#Welcome-Page > .Instruction-buttons').classList.remove('unfade');
    document.querySelector('div#Welcome-Page > .Instruction-buttons').classList.add('fade');
    document.querySelector('.instructions-1').classList.remove('unfade');
    document.querySelector('.instructions-1').classList.add('fade');
    setTimeout(function () {
        document.querySelector('.Instruction-Set').classList.remove('unfade');
        document.querySelector('.Instruction-Set').classList.add('fade');
        document.querySelector('.Instruction-Set').style.visibility = "hidden";
        document.querySelector('div#Welcome-Page > .Instruction-buttons').style.visibility = "hidden";
        document.querySelector('div#center_stage').classList.add('unfade');
        document.querySelector('div#center_stage').style.visibility = "visible";
    }, 800);
}


function Goto_inst()
{
    if (!mediaCheck)
        alert("Please rotate your phone for better understanding.")

    document.querySelector('div#Welcome-Page > .Instruction-buttons').classList.remove('unfade');
    document.querySelector('div#Welcome-Page > .Instruction-buttons').classList.add('fade');

    setTimeout(function () {
        document.querySelector('div#Welcome-Page > h2').style.display = 'none';
        document.querySelector('div#Welcome-Page > .Instruction-buttons').style.display = 'none';
        document.querySelector('.instructions-1').classList.add('unfade');
        document.querySelector('.instructions-1').style.display = "grid";
        
        //Move to next Instruction
        document.querySelector('button.move-next').addEventListener('click', instruction_2);
    },1000);
}

function instruction_2()
{
    document.querySelector('.instructions-1 > .heading > h1').innerHTML = "Move your Player";
    document.querySelector('.instructions-1 > .heading').classList.add('unfade');
    document.querySelector('.instructions-1 > .details > p').innerHTML = "To move your bead in the game, <b>CLICK</b> the bead.";
    document.querySelector('.instructions-1 > .details > p').classList.add('unafade');
    document.querySelector('.instructions-1 > .video > video').setAttribute('src', "./ludo images/Video content/Move Player.mp4");
    document.querySelector('.instructions-1 > .video > video').classList.add('unfade');
    document.querySelector('button.move-next').removeEventListener('click', instruction_2);
    document.querySelector('button.move-next').addEventListener('click', instruction_3);
}

function instruction_3()
{
    document.querySelector('.instructions-1 > .heading').classList.remove('unfade');
    document.querySelector('.instructions-1 > .heading').classList.remove('unfade');
    document.querySelector('.instructions-1 > .heading').classList.remove('unfade');

    setTimeout(function () {
        document.querySelector('.instructions-1 > .heading > h1').innerHTML = "Start from the House";
        document.querySelector('.instructions-1 > .heading').classList.add('unfade');
        document.querySelector('.instructions-1 > .details > p').innerHTML = "Players will be able to unlock their beads only at <b>1</b> or <b>6</b>";
        document.querySelector('.instructions-1 > .heading').classList.add('unfade');
        document.querySelector('.instructions-1 > .video > video').setAttribute('src', "./ludo images/Video content/Start from House.mp4");
        document.querySelector('.instructions-1 > .heading').classList.add('unfade');
        document.querySelector('button.move-next').removeEventListener('click', instruction_3);
        document.querySelector('button.move-next').addEventListener('click', instruction_4);
    }, 200);
    
}

function instruction_4()
{
    document.querySelector('.instructions-1 > .heading').classList.remove('unfade');
    document.querySelector('.instructions-1 > .heading').classList.remove('unfade');
    document.querySelector('.instructions-1 > .heading').classList.remove('unfade');

    setTimeout(function () {
        document.querySelector('.instructions-1 > .heading > h1').innerHTML = "Clash with other Players";
        document.querySelector('.instructions-1 > .heading').classList.add('unfade');
        document.querySelector('.instructions-1 > .details > p').innerHTML = "Players can remove other Players' bead from the game by <b>Occupying</b> their spot.";
        document.querySelector('.instructions-1 > .heading').classList.add('unfade');
        document.querySelector('.instructions-1 > .video > video').setAttribute('src', "./ludo images/Video content/Remove other player.mp4");
        document.querySelector('.instructions-1 > .heading').classList.add('unfade');
        document.querySelector('button.move-next').removeEventListener('click', instruction_4);
        document.querySelector('button.move-next').addEventListener('click', instruction_5);
    }, 200);
}


function instruction_5()
{
    document.querySelector('.instructions-1 > .heading').classList.remove('unfade');
    document.querySelector('.instructions-1 > .heading').classList.remove('unfade');
    document.querySelector('.instructions-1 > .heading').classList.remove('unfade');
    document.querySelector('.instructions-1 > .details > button.move-next').classList.remove('unfade');

    setTimeout(function () {
        document.querySelector('.instructions-1 > .heading > h1').innerHTML = "Getting more Chance than One";
        document.querySelector('.instructions-1 > .heading').classList.add('unfade');
        document.querySelector('.instructions-1 > .details > p').innerHTML = "Players will get <b>repeated chance</b> either on a <b>6</b> or <b>removing other player from game</b>";
        document.querySelector('.instructions-1 > .heading').classList.add('unfade');
        document.querySelector('.instructions-1 > .video > video').setAttribute('src', "./ludo images/Video content/Repeated Chance.mp4");
        document.querySelector('.instructions-1 > .heading').classList.add('unfade');
        document.querySelector('.instructions-1 > .details > button.move-next').innerHTML = "Start Game";
        document.querySelector('.instructions-1 > .details > button.move-next').classList.add('unfade');
        document.querySelector('button.move-next').removeEventListener('click', instruction_5);
        document.querySelector('button.move-next').addEventListener('click', getItStarted);
    }, 200);
}
