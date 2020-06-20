function init() {
}
let onePercent = 0;
$('#onePercent').click(function() {
    onePercent = onePercent + 1;
    $('#progress').attr("style", "width: " + onePercent + "%");
});
$(document).ready(init);




function init() {
}
let threePercent = 1;
$('#threePercent').click(function() {
    threePercent = threePercent + 3;
    $('#progress').attr("style", "width: " + threePercent + "%");
});
$(document).ready(init);




function init() {
}
let sevenPercent = 3;
$('#sevenPercent').click(function() {
    sevenPercent = sevenPercent + 7;
    $('#progress').attr("style", "width: " + sevenPercent + "%");
});
$(document).ready(init);