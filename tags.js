var getLists = document.getElementsByTagName('ul');
var getListsNum = document.getElementsByTagName('ul').length;
var x;


var showListNumber = document.getElementById("info");
var showListNumber2 = document.getElementById("info2");



function getListItems(){  //Retrieve <li> items within a <ul> tag

    alert("Running function 'getListItems'");

    var childListItem = this.childNodes;

    var x = getListsNum;

//Debugging
    for(i = 0; i < x; i++){

        alert("Creating a span element");

        var addSpan = document.createElement("span");

        alert("Appending a span");
        showListNumber.appendChild(addSpan);

        spanItem = document.getElementsByTagName("span").item([i]);
        spanItem.innerHTML = "This is a generated span.<br/>";

        //showListNumber.innerHTML = childListItem;
        showListNumber2.innerHTML = 'There are ' + x + ' &lt;ul&gt; items';



    }

    alert("Ending function 'getListItems'");

}

//var func1 = getListItems();


function createArr(func1){

    alert("Running function 'createArr'");

    var tagGenres = []; //Create parent array to contain other arrays

    for(i = 0; i < x; i++){

        tagGenres[i] = getLists.item([i]);

    } alert("Ending for loop");

    return tagGenres;

alert("Ending function 'createArr'");
}


function displayInfo(y){

    alert("Running function 'displayInfo'");

    showListNumber2.innerHTML = "There are " + getListsNum +" tag lists on this page.";
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
