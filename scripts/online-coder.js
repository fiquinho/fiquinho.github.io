$("#code-section").css("height", $(window).height() - $("#top-bar").height() - 6);



var numberWindows = 4;
var windowsWidth = 100/numberWindows + "%";

$(".button").click(function(){

    var buttonID = $(this).attr("id");
    var areaID = "#area-" + buttonID;

    if ($(this).hasClass("on")) {
        $(this).addClass("off");
        $(this).removeClass("on");

        $(areaID).css("display", "none");
        numberWindows -= 1;
        windowsWidth = 100/numberWindows + "%";
        $("textarea").css("width", windowsWidth);
        $("#area-Output").css("width", windowsWidth);
    }

    else {
        $(this).addClass("on");
        $(this).removeClass("off");

        $(areaID).css("display", "initial");
        numberWindows += 1;
        windowsWidth = 100/numberWindows + "%";
        $("textarea").css("width", windowsWidth);
        $("#area-Output").css("width", windowsWidth);
    }
    
});


var iframeStyle = $("#area-CSS").val();
var iframeHtml = $("#area-HTML").val();
var iframeScript = $("#area-JavaScript").val();

 function iframeCodeUpdate() {

    $("iframe").contents().find("html").html(iframeHtml);

    $("iframe").contents().find("head").html("<style type='text/css'>" + iframeStyle + "</style>");

    document.getElementById("area-Output").contentWindow.eval(iframeScript);
 }

$('#area-HTML').on('change keyup paste', function() {
    iframeHtml = $(this).val();
    iframeCodeUpdate();
});

$('#area-CSS').on('change keyup paste', function() {
    iframeStyle = $(this).val();
    iframeCodeUpdate();
});

$('#area-JavaScript').on('change keyup paste', function() {
    iframeScript = $(this).val();
    iframeCodeUpdate();
});

iframeCodeUpdate();