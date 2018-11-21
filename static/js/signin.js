var collist;
list();

//대학교 리스트 띄어줌
var myHTMLStr = '<option>대학교선택</option>';
for(var i = 0; i < collist.length; i++) {
  myHTMLStr+='<option value="' + collist[i] + '">'+ collist[i] + '</option>';
}
var col_list = document.getElementById('college_list')
col_list.innerHTML = myHTMLStr;

function signup(){
  if(pw1.value.length == 0) alert("비밀번호를 입력해주세요.");
  else if(pw1.value.length < 4) alert("4자 이상으로 입력해주세요.");
  if(pw1.value.length >= 20) alert("20자 내외로 입력해주세요..");
  if(pw1.value != pw2.value) alert("비밀번호 동일하게 입력해주세요.");
  var sid = $("#id").val();
  var spw = $("#pw1").val();
  //var scity = $("#college_list").val();
  var scolloege = $("#college_list").val();
  //var smajor = $("#college_list").val();
  //var stown = $("#college_list").val();
  var snickname = $("#nickname").val();
  var susername = $("#name").val();
  var spoint = 0;
  var sbirth = $("#yy").val() + "/" + $("#mm").val() + "/" + $("#dd").val();
  json_data = JSON.stringify({
                userid : sid,
                userpw : spw,
                //city : scity,
                college : scolloege,
                //major : smajor,
                //town : stown,
                nickname : snickname,
                username : susername,
                point : spoint,
                birth : sbirth,
              })

console.log(json_data);

}





function list(){
  var col = 'kaya, 가야대학교),(gachon, 가천의과대학),(kangnam, 강남대학교),(kangnung, 강릉대학교),(kangwon, 강원대학교),(konkuk, 건국대학교),(konyang, 건양대학교),(kyonggi, 경기대학교),(kyungnam, 경남대학교),(kyungdong, 경동대학교),(kyungpook, 경북대학교),(ksucc, 경산대학교),(gsnu, 경상대학교),(kyungsung, 경성대학교),(kyungwoon, 경운대학교),(kyungwon, 경원대학교),(kyungil, 경일대학교),(kyongju, 경주대학교),(kyunghee, 경희대학교),(keimyung, 계명대학교),(korea, 고려대학교),(kongju, 공주대학교),(kwandong, 관동대학교),(kwangshin, 광신대학교),(kwangwoon, 광운대학교),(kwangju, 광주대학교),(yung.kwu, 광주여자대학교),(kookmin, 국민대학교),(kunsan, 군산대학교),(kdu, 극동대학교),(kumoh, 금오공과대학교),(nsu, 남서울대학교),(dankook, 단국대학교),(daebul, 대불대학교),(taejon, 대전대학교),(tnut, 대전산업대학교),(daejin, 대진대학교),(er.duksung, 덕성여자대학교),(dongguk, 동국대학교),(tit, 동명정보대학교),(dongseo, 동서대학교),(dongshinu, 동신대학교),(donga, 동아대학교),(dyu, 동양대학교),(dongeui, 동의대학교),(myongji, 명지대학교),(mokwon, 목원대학교),(mokpo, 목포대학교),(mmu, 목포해양대학교),(miryang, 밀양대학교),(paichai, 배재대학교),(berea, 베뢰아대학원대학교),(pknu, 부경대학교),(pusan, 부산대학교),(pufs, 부산외국어대학교),(syu, 삼육대학교),(samchok, 삼척대학교),(sangmyung, 상명대학교),(sangji, 상지대학교),(sogang, 서강대학교),(seokyeong, 서경대학교),(seonam, 서남대학교),(snu, 서울대학교),(snut, 서울산업대학교),(uos, 서울시립대학교),(swu, 서울여자대학교),(seowon, 서원대학교),(sunmoon, 선문대학교),(skku, 성균관대학교),(sungshin, 성신여자대학교),(semyung, 세명대학교),(sejong, 세종대학교),(suwon, 수원대학교),(sookmyung, 숙명여자대학교),(sunchon, 순천대학교),(sch, 순천향대학교),(soongsil, 숭실대학교),(silla, 신라대학교),(ajou, 아주대학교),(andong, 안동대학교),(anyang, 안양대학교),(yosu, 여수대학교),(yonsei, 연세대학교),(youngdong, 영동대학교),(ysu, 영산대학교),(yongin, 용인대학교),(woosuk, 우석대학교),(woosong, 우송대학교),(ulsan, 울산대학교),(wonkwang, 원광대학교),(uiduk, 위덕대학교),(eulji, 을지의과대학),(ewha, 이화여자대학교),(inje, 인제대학교),(inchon, 인천대학교),(inha, 인하대학교),(chonnam, 전남대학교),(chonbuk, 전북대학교),(jeonju, 전주대학교),(cheju, 제주대학교),(chosun, 조선대학교),(joongbu, 중부대학교),(cau, 중앙대학교),(chinju, 진주산업대학교),(changwon, 창원대학교),(chonan, 천안대학교),(cwunet, 청운대학교),(chongju, 청주대학교),(chodang, 초당대학교),(chugye, 추계예술대학교),(chungnam, 충남대학교),(chungbuk, 충북대학교),(chungju, 충주대학교),(calvin, 칼빈대학교),(ptuniv, 평택대학교),(cha, 포천중문의과대학교),(postech, 포항공과대학교),(ansung, 한경대학교),(kpu, 한국기술교육대학교),(hufs, 한국외국어대학교),(kmaritime, 한국해양대학교),(hannam, 한남대학교),(han, 한동대학교),(halla, 한라대학교),(hanlyo, 한려대학교),(hallym, 한림대학교),(hanseo, 한서대학교),(hansung, 한성대학교),(hansei, 한세대학교),(hanshin, 한신대학교),(hanyang, 한양대학교),(honam, 호남대학교),(hoseo, 호서대학교),(howon, 호원대학교),(hongik, 홍익대학교),(kwangju-e, 광주교육대학교),(taegu-e, 대구교육대학교),(pusan-e, 부산교육대학교),(seoul-e, 서울교육대학교),(inchon-e, 인천교육대학교),(chonju-e, 전주교육대학교),(cheju-e, 제주교육대학교),(chinju-e, 진주교육대학교),(chongju-e, 청주교육대학교),(cnue-e, 춘천교육대학교),(knue, 한국교원대학교),(kjcatholic, 광주가톨릭대학교),(gukje, 국제신학대학원대학교),(nazarene, 기독교신학대학원대학교),(cataegu, 대구효성가톨릭대학교),(dcatholic, 대전가톨릭대학교),(pcc, 대한신학교),(stu, 서울신학대학교),(seouljangsin, 서울장신대학교),(sungkyul, 성결대학교),(skhu, 성공회대학교),(yntcs, 순복음신학원),(youngsan, 영산원불교대학교),(wonbuddhism, 원불교대학원대학교),(westminster, 웨스트민스터신학대학원대학교),(pcts, 장로회신학대학교),(hongshin, 총신대학교),(kbtus, 침례신학대학교),(hytu, 프레이즈음악신학교),(hanil, 한일장신대학교),(hapdong, 합동신학대학원대학교),(htus, 호남신학대학교),(ttgst, 횃불트리니티신학대학원대학교),(gist, 광주과학기술원),(police, 국립경찰대학),(idas, 국립세무대학),(hyo, 성산효도대학원대학교),(kma, 육군3사관학교),(knou, 한국방송대학교),(knua, 한국예술종합학교),(icu, 한국정보통신대학원대학교),(krc, 한국철도대학),(kaist, 한국과학기술원),(knupe, 한국체육대학교),(navy, 해군사관학교),(kpc, 구미기능대학),(tgpc, 대구기능대학),(mpc, 대전기능대학),(sjpc, 부산기능대학),(tpc, 서울정수기능대학강서캠퍼스),(snpc, 성남기능대학),(ans, 안성여자기능대학),(ipc, 인천기능대학),(jpolytec, 전북기능대학),(cw-polytec, 전주기능대학),(cjpc, 청주기능대학),(chunchon, 춘천기능대학),(gcgc, 홍성기능대학),(csangji, 카톨릭상지대학),(kangwonpu, 강원도립대학),(koje, 거제대학),(kc, 거창전문대학),(kinst, 경기공업대학),(kit, 경남정보대학),(kyongdo, 경도대학),(kyungdong-c, 경동정보대학),(kmc, 경문대학),(kyungmin-c, 경민대학),(kyungbok, 경복대학),(kbcs, 경북과학대학),(kflc, 경북외국어테크노대학),(r.kp-c, 경북전문대학),(kyungwon-c, 경원전문대학),(kyungin-c, 경인여자대학),(kyungho-c, 경희호텔전문대학),(keimyung-c, 계명문화대학),(kaywon, 계원조형예술대학),(korea, 고려대학교병설보건대학),(kongju-c, 공주문화대학),(kcac, 공주영상정보대학),(kjhc-c, 광주보건대학),(kumi, 구미1대학),(nmc-c, 국립세무대학),(kcn, 군산간호대학),(kunjang, 군장대학),(kdc, 극동정보대학),(kcs, 김천과학대학),(kimcheon, 김천대학),(kimpo, 김포대학),(naju, 나주대학),(namhae, 남해전문대학),(nonghyup, 농협대학),(damyang, 담양대학),(tk, 대경대학),(taegutech, 대구공업대학),(taegu-c, 대구과학대학),(tfc, 대구미래대학),(taegu-hc, 대구보건대학),(tpic, 대구산업정보대학),(ddc, 대덕대학),(daelim, 대림대학),(daewon, 대원공과대학),(tjhealth, 대전보건대학),(dcc, 대천대학)(dongkang, 동강대학),(dongnam, 동남보건대학),(ma.tmc, 동명대학),(dpc, 동부산대학),(dsc, 동서울대학),(dab-c, 동아방송전문대학),(dongac, 동아인재대학),(dytc, 동양공업전문대학),(duc, 동우대학),(tongwon, 동원대학),(dit, 동의공업대학),(dongju-c, 동주대학),(tonghae, 동해대학),(doowon, 두원공과대학),(masan-c, 마산대학),(mjc, 명지전문대학),(o-c, 목포과학대학),(munkyung, 문경대학),(baewha, 배화여자전문대학),(paekche, 백제예술대학),(byuksung-c, 벽성대학),(psks, 부산경상대학),(pwc, 부산여자대학),(bucheon, 부천대학),(snhc, 삼육간호보건대학),(sangji-c, 삼육의명대학),(seokang, 서강정보대학),(sorabol, 서라벌대학),(shjc, 서울보건대학),(snjc, 서울여자간호대학),(seoil, 서울예술신학교),(sohae, 서해대학),(sunlin, 선린대학),(sd-c, 성덕대학),(sungsim, 성심외국어대학),(sunghwa, 성화대학),(songwon, 송원대학),(suwon-sc, 수원과학대학),(suwon-c, 수원여자대학),(suncheon, 순천제일대학),(scjc, 순천청암대학),(shingu-c, 신구대학),(shinsung, 신성대학),(shinheung-c, 신흥대학),(andong-c, 안동과학대학),(ait, 안동정보대학),(ansan, 안산1대학),(ansantc, 안산공과대학),(anyang-c, 안양과학대학),(yangsan, 양산대학),(yosutc, 여수공업대학),(yeojoo, 여주대학),(yonam-c, 연암공업대학),(yonam-ag, 연암축산원예대학),(yeungnam-c, 영남이공대학),(yeongdong, 영동전문대학),(yongwol-c, 영월공과대학),(yeungjin-c, 영진전문대학),(mpjcn, 예수간호대학),(osan-c, 오산대학),(occ, 옥천전문대학),(ysc, 용인송담대학),(woosongtech, 우송공업대학),(woosonginfo, 우송정보대학),(ulsan-c, 울산과학대학),(wkhc, 원광보건대학),(wonju, 원주전문대학),(yuhan, 유한대학),(iksan, 익산대학),(induk, 인덕대학),(icc, 인천전문대학),(inhatc, 인하공업전문대학),(jangan, 장안대학),(jnc, 장흥대학),(chunnam-c, 전남과학대학),(jtc, 전주공업대학),(kijeon-c, 전주기전여자대학),(jungup-c, 정인대학),(cjtour, 제주관광대학),(jeju, 제주산업정보대학),(halla-c, 제주한라대학),(chosun-c, 조선이공대학),(jsc, 주성대학),(jisan, 지산대학),(chc, 진주보건대학),(chinju-c, 진주전문대학),(changshin-c, 창신대학),(changwon-c, 창원전문대학),(cntc, 천안공업대학),(chonan-c, 천안외국어대학),(chungkang, 청강문화산업대학),(chongjunc, 청양대학),(choonhae, 춘해대학),(chch-c, 충청대학),(taesung, 태성대학),(pohang, 포항대학),(kn, 한국농업전문학교),(krc, 한국철도대학),(hallym-c, 한림정보산업대학),(hywoman, 한양여자대학),(hyejeon, 혜전대학),(hcc, 혜천대학'

  collist=col.split("),(");
}
