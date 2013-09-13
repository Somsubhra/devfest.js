$(function() {
    $('#divRegister').hide();

    $('#registerPopper').click(function() {
        $('#divLogin').hide();
        $('#divRegister').slideDown();
        $('#registerPopper').css('background', 'rgb(94, 92, 92)');
        $('#registerPopper').css('border', '1px solid #4a4848');
        $('#registerPopper').css('border-top', '1px solid #2f2d2d');
        $('#loginPopper').css('background', 'rgb(157, 155, 155)');
        $('#loginPopper').css('border', '1px solid #8c8a8a');
        $('#loginPopper').css('border-top', '1px solid #7e7c7c');
    });

    $('#loginPopper').click(function() {
        $('#divRegister').hide();
        $('#divLogin').slideDown();
        $('#loginPopper').css('background', 'rgb(94, 92, 92)');
        $('#loginPopper').css('border', '1px solid #4a4848');
        $('#loginPopper').css('border-top', '1px solid #2f2d2d');
        $('#registerPopper').css('background', 'rgb(157, 155, 155)');
        $('#registerPopper').css('border', '1px solid #8c8a8a');
        $('#registerPopper').css('border-top', '1px solid #7e7c7c');
    });
});