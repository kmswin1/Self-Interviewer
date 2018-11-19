var jsonArray = {"snum": "12",
 "sid":"sampleid",
 "stitle":"fwe",
 "stext":"12324weasdfasd@@@@@@@@@@@@@@@@@@@@@@!@#$ ^&@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@2$   #@#%%%%%%%#########################%##@@#@#@#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@sample",
 "stime":"10/17/3:33",
 "sview":"0"};

var myHTMLStr = '<table>';
myHTMLStr += '<thead><tr><th></th><th></th><th></th><th></th></tr></thead>'
+ '<tr><th class="success">글번호</th><td>'
+ jsonArray['snum'] + '</td><th class="success">조회수</th><td>'
+ jsonArray['sview'] + '</td></tr><tr><th class="success">작성자</th><td>'
+ jsonArray['sid'] + '</td><th class="success">작성일</th><td>'
+ jsonArray['stime'] + '</td></tr><tr><th class="success">제목</th><td colspan="3">'
+ jsonArray['stitle'] + '</td></tr><tr><th class="success">글 내용</th><td width="12" colspan="3">'
+ jsonArray['stext'] + '</td></tr>'


myHTMLStr += '</table>';
var table = document.getElementById('posttable')
table.innerHTML = myHTMLStr;
