var userJsonArr = '';

// TODO : 서버에서 데이터 다 가져오는 API 추가
var companyJsonArr = [
    {"company":"삼성전자"},
    {"company":"삼성SDS"},
    {"company":"LG전자"},
    {"company":"LG화학"},
    {"company":"라인"},
    {"company":"SKT"},
    {"company":"네이버"},
    {"company":"한국전력공사"}
];
var majorJsonArr = [
    {"major":"SW개발"},
    {"major":"경영지원"},
    {"major":"마케팅"},
    {"major":"연구직"},
    {"major":"PD"},
    {"major":"영업"}
];
var locationJsonArr = [
    {"location":"서울특별시 강남구"},
    {"location":"서울특별시 성북구"},
    {"location":"서울특별시 서초구"},
    {"location":"서울특별시 마포구"},
    {"location":"서울특별시 서대문구"},
    {"location":"서울특별시 강서구"},
    {"location":"서울특별시 영등포구"},
    {"location":"서울특별시 광진구"},
    {"location":"서울특별시 송파구"},
    {"location":"서울특별시 동작구"},
    {"location":"서울특별시 구로구"},
    {"location":"서울특별시 양천구"},
    {"location":"서울특별시 강북구"},
    {"location":"서울특별시 금천구"},
    {"location":"서울특별시 강북구"},
    {"location":"서울특별시 종로구"},
    {"location":"서울특별시 강동구"},
    {"location":"서울특별시 동대문구"},
    {"location":"수원시 인계동"},
    {"location":"고양시 행신동"}
];

var selectCompany = document.getElementById('sel_company');
var selectMajor = document.getElementById('sel_major');
var selectLocation = document.getElementById('sel_location');
var user_card = document.getElementById('user_card')

// TODO : JSON 파싱해서 select의 option으로 넣어주기
for(var i = 0; i < companyJsonArr.length; i++) {
    selectCompany.innerHTML += '<option>' + companyJsonArr[i]['company'] + '</option>';
}
for(var i = 0; i < majorJsonArr.length; i++) {
    selectMajor.innerHTML += '<option>' + majorJsonArr[i]['major'] + '</option>';
}
for(var i = 0; i < locationJsonArr.length; i++) {
    selectLocation.innerHTML += '<option>' + locationJsonArr[i]['location'] + '</option>';
}

/**
 * 매칭 된 결과를 카드뷰로 화면에 출력.
 * */
function matchingSearch() {
    // select값 가져오기
    var company = selectCompany.options[selectCompany.selectedIndex].text;
    var city = selectLocation.options[selectLocation.selectedIndex].text.split(' ')[0];
    var town = selectLocation.options[selectLocation.selectedIndex].text.split(' ')[1];
    var major = selectMajor.options[selectMajor.selectedIndex].text;

    // 요청(PUT)시 보낼 json 데이터 생성
    var myJSON = JSON.stringify({
        company: company,
        city: city,
        town: town,
        major: major
    });

    // 매칭 요청(PUT)
    $.ajax({
        type: 'PUT',
        url: "http://ec2-54-244-72-128.us-west-2.compute.amazonaws.com:5000/getMemberInfo",
        contentType: 'application/json; charset=UTF-8',
        traditional: true,
        async: false,
        data: myJSON,
        success: function (data) {
            userJsonArr = JSON.parse(data)
        },
        error: function (xhr) {
            // TODO : 에러 처리(카드뷰 박스에 텍스트로 '해당 옵션의 사용자가 없습니다' 표시 등)
            console.log ("실패");
            alert("매칭 결과를 불러오지 못했습니다. 검색 옵션을 다시 확인해주세요.");
        }
    });

    // 요청(PUT) 결과를 카드뷰로 그리기
    var myHTML = '';
    for(i = 0; i < userJsonArr.length; i++) {
        myHTML += '<div class="card">' +
            '<img src="http://ec2-54-244-72-128.us-west-2.compute.amazonaws.com:5000/static/resources/img_avatar.png">' +
            '<div class="container2">' +
            '<h4><b>' + userJsonArr[i]['username'] + '</b></h4>' +
            '<p>' + userJsonArr[i]['city'] + ' ' + userJsonArr[i]['town'] + '</p>' +
            '<p>' + userJsonArr[i]['userInfo'] + '</p>' +
            '</div>' +
            '</div>';
    }
    user_card.innerHTML = myHTML;
}