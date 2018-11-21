/*var jsonArray = {"snum": "12",
 "sid":"sampleid",
 "stitle":"fwe",
 "stext":"12324weasdfasd@@@@@@@@@@@@@@@@@@@@@@!@#$ ^&@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@2$   #@#%%%%%%%#########################%##@@#@#@#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@sample",
 "stime":"10/17/3:33",
 "sview":"0"};*/

var myHTMLStr2 = '<table>';
myHTMLStr2 += '<thead><tr><th></th><th></th><th></th><th></th></tr></thead>'
+ '<tr><th class="success">글번호</th><td>'
+ targetpost['hit'] + '</td><th class="success">조회수</th><td>'
+ targetpost['hit'] + '</td></tr><tr><th class="success">작성자</th><td>'
+ targetpost['author'] + '</td><th class="success">작성일</th><td>'
+ targetpost['time'] + '</td></tr><tr><th class="success">제목</th><td colspan="3">'
+ targetpost['title'] + '</td></tr><tr><th class="success">글 내용</th><td width="12" colspan="3">'
+ targetpost['text'] + '</td></tr>'


myHTMLStr2 += '</table>';
var han = document.getElementById('posttable')
han.innerHTML = myHTMLStr2;
