var date = moment().format('dddd, MMMM Do');
var currentHour = moment().format('h') + moment().format('a');

function appendDateToDom() {
    $("#currentDay").text(date);
}

var num = 9;
function showCurrentHour() {
    console.log(currentHour); //FOR DEBUG
}

showCurrentHour();
appendDateToDom();

var count = 0;
var currentFound = 0;
currentHour = "2pm"; //FOR DEBUG
$("table tbody tr").each(function () {
    if (this.id == currentHour) {
        //console.log("current hour"); //FOR DEBUG
        //console.log(currentHour); //FOR DEBUG
        //console.log($(this).find("td").eq(1)); //FOR DEBUG
        $(this).find("td").eq(1).addClass("red");
        currentFound = 1;
    } else if (currentFound != 1) {
        $(this).find("td").eq(1).addClass("grey");
    } else {
        $(this).find("td").eq(1).addClass("green");
    }

})

var userEntry = [];
if(!localStorage.getItem("userEntry")){
    localStorage.setItem("userEntry", JSON.stringify(userEntry));
}


//localStorage.setItem('userEntry', JSON.stringify(userEntry));
$(".save_button").click(function() {
    //console.log(this.id); //FOR DEBUG
    var currentId = this.id;
    var currentEntry = $("#" + currentId).find("td").eq(1).find("textarea")[0].value; 
    //console.log(currentEntry); //FOR DEBUG
    var currentStorage = JSON.parse(localStorage.getItem('userEntry'));
    var userEntry = {id: currentId, entry: currentEntry};
    //console.log(userEntry); //FOR DEBUG
    currentStorage.push(userEntry);
    localStorage.setItem("userEntry", JSON.stringify(currentStorage));
});

function appendTextFromStorageToDom() {
    var currentStorage = JSON.parse(localStorage.getItem('userEntry'));
    console.log(currentStorage); //FOR DEBUG
    for (var i = 0; i < currentStorage.length; i++) {
        console.log("GOING INTO FOR LOOP"); //FOR DEBUG
        var currentId = currentStorage[i].id;
        console.log(currentId); //FOR DEBUG
        var currentText = currentStorage[i].entry;
        console.log(currentText); //FOR DEBUG
        console.log($("#" + currentId).find("td").eq(1).find("textarea")[0].value); //FOR DEBUG
        $("#" + currentId).find("td").eq(1).find("textarea")[0].value = currentText;
    }
}

appendTextFromStorageToDom()

