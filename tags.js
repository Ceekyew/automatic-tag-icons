var getLists = document.getElementsByTagName('ul');
var getListsNum = document.getElementsByTagName('ul').length;


var showInfo = document.getElementById("info");
var showInfo2 = document.getElementById("info2");
var showInfo3 = document.getElementById("info3");



function getListItems(){  //Retrieve <li> items within a <ul> tag

    alert("Running function 'getListItems'");

    var x = getListsNum; //Number of <ul> elements

    console.log("There are " + x + " ul tags on this page.");
    console.log(getLists[0]); //Undefined, because there isn't a 6th <ul> tag.

    for(i = 0; i < x; i++){

        //alert("Creating a span element");
        var newArray = [];
        newArray[i] = getLists.item([i]);

        console.log(newArray[0]);


    }

    alert("Ending function 'getListItems'");

}


function createArr(){

    alert("Running function 'createArr'");

    var childListItem = this.childNodes;

    var list= [];
    list[i] =

alert("Ending function 'createArr'");
}


function displayInfo(y){

    alert("Running function 'displayInfo'");

    showInfo2.innerHTML = "There are " + getListsNum +" tag lists on this page.";
    if(tagGenres === true){
        alert("True");
    }
}








function runAll(){
    getListItems();
    //createArr();
    //displayInfo();
}

window.onload = runAll;
