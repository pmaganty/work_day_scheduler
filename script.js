/*********************************************************************************************************/
/*                                      AUTHOR: Pranitha Maganty                                         */
/*                                          TITLE: script.js                                             */
/*                                    PROJECT: Work Day Scheduler                                        */
/*********************************************************************************************************/

//
//

/******************************START: VARIABLE DEFINITIONS AND INTITIALIZATIONS***************************/
var date = moment().format('dddd, MMMM Do');
var currentHour = moment().format('h') + moment().format('a');
var userEntry = [];
if(!localStorage.getItem("userEntry")){
    localStorage.setItem("userEntry", JSON.stringify(userEntry));
}
/******************************END: VARIABLE DEFINITIONS AND INTITIALIZATIONS*****************************/


//
//
//
//
//


/****************************************START: FUNCTION DEFINITIONS***************************************/

//Function Description: appends current date to DOM by using moment.js API
function appendDateToDom() {
    $("#currentDay").text(date);
}

//Function Description: iterates through all rows. applies logic to figure out if current hour,
//                      past hour, or future hour. current hour will get styled with red background,
//                      past with grey, and future with green
function colorTheRows() {
    var count = 0;
    var currentFound = 0;
    //currentHour = "12pm"; //FOR DEBUG
    $("table tbody tr").each(function () {
        if (this.id == currentHour) {
            $(this).find("td").eq(1).addClass("red");
            currentFound = 1;
        } else if (currentFound != 1) {
            $(this).find("td").eq(1).addClass("grey");
        } else {
            $(this).find("td").eq(1).addClass("green");
        }

    });
}

//Function Description: iterates through array of objects containing user text entries and appends 
//                      each text entry to appropriate text box based on id provided in object
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

/*****************************************END: FUNCTION DEFINITIONS****************************************/


//
//
//
//
//


/******************************************START: EVENT LISTENERS******************************************/

//Event Listener Description: every time a save button is clicked, corresponding row's id and text
//                            content inside text box is saved to object which is appended to array
//                            inside local storage
$(".save_button").click(function() {
    var currentId = this.id;
    var currentEntry = $("#" + currentId).find("td").eq(1).find("textarea")[0].value; 
    var currentStorage = JSON.parse(localStorage.getItem('userEntry'));
    var userEntry = {id: currentId, entry: currentEntry};
    if (userEntry.id == "9am") {
        currentStorage[0] = userEntry;
    } else if (userEntry.id == "10am") {
        currentStorage[1] = userEntry;
    } else if (userEntry.id == "11am") {
        currentStorage[2] = userEntry;
    } else if (userEntry.id =="12pm") {
        currentStorage[3] = userEntry;
    } else if (userEntry.id == "1pm") {
        currentStorage[4] = userEntry;
    } else if (userEntry.id == "2pm") {
        currentStorage[5] = userEntry;
    } else if (userEntry.id == "3pm") {
        currentStorage[6] = userEntry;
    } else if (userEntry.id == "4pm") {
        currentStorage[7] = userEntry;
    } else if (userEntry.id == "5pm") {
        currentStorage[8] = userEntry;
    }
    localStorage.setItem("userEntry", JSON.stringify(currentStorage));
});
/*******************************************END: EVENT LISTENERS*******************************************/



//
//
//
//
//


/**********************************************************************************************************/
/*********************************************EXECUTING CODE***********************************************/

appendDateToDom();
colorTheRows();
appendTextFromStorageToDom()

/**********************************************************************************************************/

