var userJsonArr = [
    {"name":"이찬주", "location":"경기도 고양시", "text_info": "2019 취뽀!!"},
    {"name":"이병주", "location":"경기도 광주시", "text_info": "힘을 냅시다"},
    {"name":"이찬주", "location":"경기도 고양시", "text_info": "2019 취뽀!!"},
    {"name":"이찬주", "location":"경기도 고양시", "text_info": "2019 취뽀!!"},
    {"name":"이찬주", "location":"경기도 고양시", "text_info": "2019 취뽀!!"},
    {"name":"이찬주", "location":"경기도 고양시", "text_info": "2019 취뽀!!"},
    {"name":"이찬주", "location":"경기도 고양시", "text_info": "2019 취뽀!!"}
]
var myHTML = '';
for(i = 0; i < userJsonArr.length; i++) {
    myHTML += '<div class="card">' +
        '<img src="../resources/img_avatar.png">' +
        '<div class="container2">' +
        '<h4><b>' + userJsonArr[i]['name'] + '</b></h4>' +
        '<p>' + userJsonArr[i]['location'] +'</p>' +
        '<p>' + userJsonArr[i]['text_info'] + '</p>' +
        '</div>' +
        '</div>';
}

var user_card = document.getElementById('user_card')
user_card.innerHTML = myHTML;
