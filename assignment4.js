$(document).ready(function() {
    $("#area1").offset({left: 220, top: 180});
    $("#area2").offset({left: 360, top: 190});
    $("#area3").offset({left: 320, top: 260});
    $("#area4").offset({left: 740, top: 300});
    $("#area5").offset({left: 740, top: 330});
    $("#area6").offset({left: 740, top: 450});

    $("button").css("background-color", "blue");
    $("button").css("font-size", "16px");
    $("button").css("color", "white");

    $("#area4").click(function() {
        var scrollPosUp = $("#area3").scrollTop();
        $("#area3").scrollTop(scrollPosUp-50);
    });

    $("#area5").click(function() {
        var scrollPosDown = $("#area3").scrollTop();
        $("#area3").scrollTop(scrollPosDown+50);
    });

    $("#area6").click(function() {
        $("#area3").toggleClass("newFont");
    });

})