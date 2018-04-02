var getLists = document.getElementsByTagName('ul');
var getListsNum = document.getElementsByTagName('ul').length;
var x = getListsNum;

//var getListChilds = getLists.childNodes;

var showListNumber = document.getElementById("info");
var showListNumber2 = document.getElementById("info2");









function displayInfo(){
    showListNumber.innerHTML = "There are " + getListsNum +" tag lists on this page.";
}






function createArr(){

    var tagGenres = []; //Create parent array to contain other arrays

    var fetchList;

    for(i = 0; i < x; i++){

        //tagGenres[i] = [];
        alert(i); //Should detect 5 UL tags
        fetchList = getLists.item([i]);
        //var getChildren = fetchList.childNodes;
        showListNumber2.innerHTML = getChildren[i];

        //if(fetchList.hasChildNodes === true)
    }

    return tagGenres;

}

//function accessArr(tagGenres){


//}







function runAll(){
    displayInfo();
    createArr();
    accessArr();
}

window.onload = runAll;
