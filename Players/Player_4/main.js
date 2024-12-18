
var random;
let dice_beads = document.querySelector('.dice-numbers>div').classList;
var play = document.querySelector("button#play");

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