/////// JavaScript 2
// by:Grady Mellin
//

function validateForm() {
    var uName = document.forms["submissionForm"]["uName"].value;
    var bType = document.forms["submissionForm"]["bType"].value;
    var bName = document.forms["submissionForm"]["bName"].value;
    var bPic = document.forms["submissionForm"]["bPic"].value;
    var bTalk = document.forms["submissionForm"]["bTalk"].value;
    var bFact = document.forms["submissionForm"]["bFact"].value;
    if (uName == "Users Name") {
        document.forms["submissionForm"]["uName"].value = ""
        return false;
    }
    if (bType == "Species of Bug") {
        document.forms["submissionForm"]["bType"].value = ""
        return false;
    }
    if (bName == "Bugs Name") {
        document.forms["submissionForm"]["bName"].value = ""
        return false;
    }
    if (bPic == "Source of Picture of Bug") {
        document.forms["submissionForm"]["bPic"].value = ""
        return false;
    }
    if (bTalk == "Bug Talk") {
        document.forms["submissionForm"]["bTalk"].value = ""
        return false;
    }
    if (bFact == "Bug Fact") {
        document.forms["submissionForm"]["bFact"].value = ""
        return false;
    }

}