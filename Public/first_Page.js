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
                document.querySelector('div#Welcome-Page > h2').style.fontSize = "10vh";
                document.querySelector('div#Welcome-Page > h2').innerHTML = "A Traditional game of India";
                setTimeout(function () {
                    document.querySelector('div#Welcome-Page > h2').classList.remove("Welcome-LtoR");
                }, 1100);
                setTimeout(function () {
                    document.querySelector('div#Welcome-Page > h2').classList.add("unfade");
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

}


