var divGame;
var gameTags = ["assassin's creed", "bioshock infinite", "dai", "dota 2", "dxmd", "fallout", "infamous", "lol", "mass effect", "me", "mec", "nmh", "off", "portal", "remember me", "saints row", "skyrim", "sonic", "ssb", "superbrothers", "tf2", "the division", "tlou", "twau", "undertale", "watch_dogs","assassin's creed", "bioshock infinite", "dai", "dota 2", "dxmd", "fallout", "infamous", "lol", "mass effect", "me", "mec", "nmh", "off", "portal", "remember me", "saints row", "skyrim", "sonic", "ssb", "superbrothers", "tf2", "the division", "tlou", "twau", "undertale", "watch_dogs"];
var iconLoc = '<img src="http://cquickdesign.com/misc/tmblr/';

var x = gameTags.length;

//Show icons of all the tags. "document.write" needs to be changed to innerHTML. 5 icons per row.


function splitTags(){
    
    divGame = document.getElementById("g");

    for(i=0; i<x; i++){
        
        var addSpan = document.createElement("span");
        divGame.appendChild(addSpan);
        //spanItem must be declared outside of function
        var spanItem;
        
        //alert(i % 5);
        gameTags.sort();
        
        //If the remainder of i % 5 = 4, start a new line
        if(i % 5 === 4){
            //divGame.innerHTML = iconLoc + gameTags[i] + '.jpg" /><br/>';
            spanItem = document.getElementsByTagName('span').item([i]);
            spanItem.innerHTML = iconLoc + gameTags[i] + '.jpg" /><br/>';
        } else {
            //divGame.innerHTML = iconLoc + gameTags[i] + '.jpg" />';
            spanItem = document.getElementsByTagName('span').item([i]);
            spanItem.innerHTML = iconLoc + gameTags[i] + '.jpg" />';
        }
    }
}

/*function borders(){
    
    for(i=0; i<x; i++){
        
        if(i % 5 === 4){
            divGame.innerHTML = iconLoc + 'bord.png" /><br/>';
        } else {
            divGame.innerHTML = iconLoc + 'bord.png" />';
        }
        
    }
    
}*/


function tagpage(){
    splitTags();
    //borders();
}

window.onload = tagpage;