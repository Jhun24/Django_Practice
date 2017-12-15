/**
 * Created by janghunlee on 2017. 12. 15..
 */

$(document).ready(function () {
    $(".translate-input").keydown(function (event) {
        console.log(event.originalEvent.key);
        var originalText = $(this).val() + event.originalEvent.key;

        $.ajax({
            method:"POST",
            url:"https://openapi.naver.com/v1/papago/n2mt",
            data:{"source":"ko","target":"en","text":originalText},
            headers:{
                "X-Naver-Client-Id":"w8jNL_8tpe3VNJE5niW5",
                "X-Naver-Client-Secret":"AYwqUVgB_V",
            },
            success:function (data) {
                console.log(data);
                $(".translate-return").text(data);
            },
            error:function (err) {
                console.log(err);
            }
        });
    });
});