var divTags;
var divBorders;
var tagList1 = ["assassin's creed", "bioshock infinite", "dai", "dota 2", "dxmd", "fallout", "infamous", "lol", "mass effect", "me", "mec", "nmh", "off", "portal", "remember me", "saints row", "skyrim", "sonic", "ssb", "superbrothers", "tf2", "the division", "tlou", "twau", "undertale", "watch_dogs"];
var iconLoc = '<img src="http://cquickdesign.com/misc/tmblr/';

var x = tagList1.length;

//Show icons of all the tags. "document.write" needs to be changed to innerHTML. 5 icons per row.


function splitTags(){

    divTags = document.getElementById("tags1");

    for(i=0; i<x; i++){

        var addSpan = document.createElement("span");
        divTags.appendChild(addSpan);
        //spanItem must be declared outside of function
        var spanItem;

        //alert(i % 5);
        tagList1.sort();

        //If the remainder of i % 5 = 4, start a new line
        if(i % 5 === 4){
            //divTags.innerHTML = iconLoc + gameTags[i] + '.jpg" /><br/>';
            spanItem = document.getElementsByTagName('span').item([i]);
            spanItem.innerHTML = iconLoc + tagList1[i] + '.jpg" /><br/>';
        } else {
            //divTags.innerHTML = iconLoc + gameTags[i] + '.jpg" />';
            spanItem = document.getElementsByTagName('span').item([i]);
            spanItem.innerHTML = iconLoc + tagList1[i] + '.jpg" />';
        }
    }
}

function borders(){

    for(i=0; i<x; i++){

        if(i % 5 === 4){
            divGame.innerHTML = iconLoc + 'bord.png" /><br/>';
        } else {
            divGame.innerHTML = iconLoc + 'bord.png" />';
        }

    }

}


function tagpage(){
    splitTags();
    borders();
}

window.onload = tagpage;
