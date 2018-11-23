var userJsonArr = ''

/**
 * 매칭 된 결과를
 * */
function matchingSearch() {
    var myJSON = JSON.stringify({
        company:'삼성전자',
        city:'서울특별시',
        town:'제기동',
        major:'SW개발'
    });

    // 매칭 요청
    $.ajax({
        type: 'PUT',
        url: "http://ec2-54-244-72-128.us-west-2.compute.amazonaws.com:5000/getMemberInfo",
        contentType: 'application/json; charset=UTF-8',
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
            alert("매칭 결과를 불러오지 못했습니다. 검색 옵션을 다시 확인해주세요.");
        }
    });

    // 요청(PUT) 결과를 카드뷰로 그리기
    var myHTML = '';

    for(i = 0; i < userJsonArr.length; i++) {
        myHTML += '<div class="card">' +
            '<img src="../resources/img_avatar.png">' +
            '<div class="container2">' +
            '<h4><b>' + userJsonArr[i]['username'] + '</b></h4>' +
            '<p>' + userJsonArr[i]['city'] + ' ' + userJsonArr[i]['town'] + '</p>' +
            '<p>' + userJsonArr[i]['userInfo'] + '</p>' +
            '</div>' +
            '</div>';
    }

    var user_card = document.getElementById('user_card')
    user_card.innerHTML = myHTML;
}