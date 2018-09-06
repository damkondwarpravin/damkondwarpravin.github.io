// Onclick event of DropDown
function showPanel(option) {
    if (option == 1) {
        $("#divResult").empty();
        $("#byIdDiv").show();
        $("#byTitleDiv").hide();
        $("#divByIDByTitle").attr('class', 'w3-pale-green');
    }
    else if (option == 2) {
        $("#divResult").empty();
        $("#byIdDiv").hide();
        $("#byTitleDiv").show();
        $("#divByIDByTitle").attr('class', 'w3-pale-green');
    }
    else {
        $("#divResult").empty();
        $("#byIdDiv").hide();
        $("#byTitleDiv").hide();
        $("#divByIDByTitle").removeAttr('class', 'w3-pale-green');
    }
}


$(document).ready(function () {

    //Get Movie by ID 
    $("#btnByID").click(function () {
        let id = $("#idtxt").val();
        let url = "https://www.omdbapi.com/?i=" + id + "&apikey=19a8a7c2";

        $.ajax({
            url: url,
            datatype: 'JSON',
            success: function (result) {
                var htmlNewString = "";
                $.each(result, function (key, value) {
                    if (key == "Poster") {
                        htmlNewString += "</br><span id='" + key + "' name='" + key + "'><b>" + key + ": </b></span>"
                        +"<img src='"+value+"' class='img-fluid' alt='Responsive image'/>";
                    }
                    else if(key == "Ratings"){

                    }
                    else{
                        htmlNewString += "</br><span id='" + key + "' name='" + key + "'><b>" + key + ": </b>" + value + "</span>";
                    }
                });
                $("#divResult").html(htmlNewString);
            },
            error: function (xhr) {
                $("#divResult").html(xhr["Response"] + ": " + xhr["Error"]);
            }
        });
    });

    //Get Movie by Title/Year
    $("#btnByTitle").click(function () {
        let title = $("#titletxt").val();
        let year = $("#yeartxt").val();
        let url = "https://www.omdbapi.com/?t=" + title + "&y=" + year + "&apikey=19a8a7c2";

        $.ajax({
            url: url,
            datatype: 'JSON',
            success: function (result) {
                var htmlNewString = "";
                $.each(result, function (key, value) {
                    if (key == "Poster") {
                        htmlNewString += "</br><span id='" + key + "' name='" + key + "'><b>" + key + ": </b></span>"
                        +"<img src='"+value+"' class='img-fluid' alt='Responsive image'/>";
                    }
                    else if(key == "Ratings"){

                    }
                    else{
                        htmlNewString += "</br><span id='" + key + "' name='" + key + "'><b>" + key + ": </b>" + value + "</span>";
                    }
                });
                $("#divResult").html(htmlNewString);
            },
            error: function (xhr) {
                $("#divResult").html(xhr["Response"] + ": " + xhr["Error"]);
            }
        });
    });
});