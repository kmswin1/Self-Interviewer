var userJsonArr = ''

function matchingSearch() {
    var myJSON = JSON.stringify({
        company:'삼성전자',
        city:'고양시',
        town:'행신동',
        major:'SW개발'
    });

    // 등록된 사람 불러오기
    $.ajax({
        type: 'PUT',
        url: "http://ec2-54-244-72-128.us-west-2.compute.amazonaws.com:5000/getMemberInfo",
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        async: false,
        data: myJSON,
        success: function (data) {
            //console.log(data);
            userJsonArr = JSON.parse(data)
            // select = userJsonArr;
        },
        error: function (xhr) {
            console.log ("실패");
            console.log(xhr)
        }
    });

    // 카드뷰 그리기
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
}
