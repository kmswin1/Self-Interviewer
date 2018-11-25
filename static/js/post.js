/*var jsonArray = {"snum": "12",
 "sid":"sampleid",
 "stitle":"fwe",
 "stext":"12324weasdfasd@@@@@@@@@@@@@@@@@@@@@@!@#$ ^&@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@2$   #@#%%%%%%%#########################%##@@#@#@#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@sample",
 "stime":"10/17/3:33",
 "sview":"0"};*/

var jsondata;

$.ajax({
           type: 'GET',
           url: "http://ec2-54-244-72-128.us-west-2.compute.amazonaws.com:5000/getPostInfo",
           contentType: 'application/json; charset=utf-8',
           traditional: true,
           async: false,
           data: jsondata,
           success: function (data) {
               console.log(data);
               jsondata = JSON.parse(data)
            
           },
           error: function (xhr) {
               console.log ("실패");
               console.log(data);

           }
       });
       console.log(jsondata);

var myHTMLStr2 = '<table>';
myHTMLStr2 += '<thead><tr><th></th><th></th><th></th><th></th></tr></thead>'
+ '<tr><th class="success">글번호</th><td>'
+ jsondata['id'] + '</td><th class="success">조회수</th><td>'
+ jsondata['hit'] + '</td></tr><tr><th class="success">작성자</th><td>'
+ jsondata['author'] + '</td><th class="success">작성일</th><td>'
+ jsondata['time'] + '</td></tr><tr><th class="success">제목</th><td colspan="3">'
+ jsondata['title'] + '</td></tr><tr><th class="success">글 내용</th><td width="12" colspan="3">'
+ jsondata['text'] + '</td></tr>'

myHTMLStr2 += '</table>';
var han = document.getElementById('selectpost')
han.innerHTML = myHTMLStr2;
