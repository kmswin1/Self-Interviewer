var jsonArray = [
  {"sid":"sampleid","stitle":"1","stime":"10/17/3:33","sview":"0"},
  {"sid":"QWD","stitle":"2","stime":"10/17/3:33","sview":"0"},
  {"sid":"sampleid","stitle":"3","stime":"10/17/3:33","sview":"0"},
  {"sid":"sampleid","stitle":"4","stime":"10/17/3:33","sview":"0"},
  {"sid":"sampleid","stitle":"5","stime":"10/17/3:33","sview":"0"},
  {"sid":"sampleid","stitle":"6","stime":"10/17/3:33","sview":"0"},
  {"sid":"sampleid","stitle":"7","stime":"10/17/3:33","sview":"0"},
  {"sid":"sampleid","stitle":"8","stime":"10/17/3:33","sview":"0"},
  {"sid":"sampleid","stitle":"9","stime":"10/17/3:33","sview":"0"},
  {"sid":"sampleid","stitle":"10","stime":"10/17/3:33","sview":"0"},
  {"sid":"sampleid","stitle":"11","stime":"10/17/3:33","sview":"0"},
  {"sid":"sampleid","stitle":"12","stime":"10/17/3:33","sview":"0"},
  {"sid":"sampleid","stitle":"13","stime":"10/17/3:33","sview":"0"},
  {"sid":"sampleid","stitle":"14","stime":"10/17/3:33","sview":"0"},
  {"sid":"sampleid","stitle":"15","stime":"10/17/3:33","sview":"0"},
  {"sid":"sampleid","stitle":"16","stime":"10/17/3:33","sview":"0"},
  {"sid":"sampleid","stitle":"17","stime":"10/17/3:33","sview":"0"},
  {"sid":"sampleid","stitle":"18","stime":"10/17/3:33","sview":"0"},
  {"sid":"sampleid","stitle":"19","stime":"10/17/3:33","sview":"0"},
  {"sid":"sampleid","stitle":"20","stime":"10/17/3:33","sview":"0"},
  {"sid":"sampleid","stitle":"21","stime":"10/17/3:33","sview":"0"},
  {"sid":"sampleid","stitle":"22","stime":"10/17/3:33","sview":"0"},
  {"sid":"sampleid","stitle":"23","stime":"10/17/3:33","sview":"0"},
  {"sid":"sampleid","stitle":"24","stime":"10/17/3:33","sview":"0"},
  {"sid":"QWD","stitle":"25","stime":"10/17/3:33","sview":"0"},
  {"sid":"sampleid","stitle":"26","stime":"10/17/3:33","sview":"0"},
  {"sid":"sampleid","stitle":"27","stime":"10/17/3:33","sview":"0"},
  {"sid":"QWD","stitle":"28","stime":"10/17/3:33","sview":"0"},
  {"sid":"sampleid","stitle":"29","stime":"10/17/3:33","sview":"0"},
  {"sid":"sampleid","stitle":"30","stime":"10/17/3:33","sview":"0"},
  {"sid":"sampleid","stitle":"31","stime":"10/17/3:33","sview":"0"},
  {"sid":"sampleid","stitle":"32","stime":"10/17/3:33","sview":"0"},
  {"sid":"sampleid","stitle":"33","stime":"10/17/3:33","sview":"0"},
  {"sid":"sampleid","stitle":"34","stime":"10/17/3:33","sview":"0"},
  {"sid":"sampleid","stitle":"35","stime":"10/17/3:33","sview":"0"},
  {"sid":"sampleid","stitle":"36","stime":"10/17/3:33","sview":"0"},
  {"sid":"sampleid","stitle":"37","stime":"10/17/3:33","sview":"0"},
  {"sid":"sampleid","stitle":"38","stime":"10/17/3:33","sview":"0"},
  {"sid":"sampleid","stitle":"39","stime":"10/17/3:33","sview":"0"},
  {"sid":"sampleid","stitle":"40","stime":"10/17/3:33","sview":"0"},
  {"sid":"sampleid","stitle":"41","stime":"10/17/3:33","sview":"0"},
  {"sid":"sampleid","stitle":"42","stime":"10/17/3:33","sview":"0"},
  {"sid":"sampleid","stitle":"43","stime":"10/17/3:33","sview":"0"},
]
var jsonArray2;
var idx;

var nowpage = 1;
var limitpage = 5;
var postnum;

$('table').click(function(e) {
    if(e.target.tagName == "TD") {
        if($("table td:lt(" + (idx + 1) + ")")){
          //console.log(e.target);
          var a = $("table td").index($(e.target));
          console.log(jsonArray[a]);
          location.href="post.html"
        }
        //location.href="post.html"
    }
});


//게시글 수에 따라 버튼수 늘어남
var page = Math.ceil((jsonArray.length)/10);

console.log(page);

var myHTMLBtn =  '';
for(j=1;j<=page;j++){
  myHTMLBtn += '<input type="button" class="btn-link btn-sm" id = btn'+ j +' onClick = paging(' + j + ') value = "<'+ j +'>" </button>'
}

var btn = document.getElementById('pageselect')
btn.innerHTML = myHTMLBtn;



var myHTMLStr = '<table>';
myHTMLStr ='<tr><th> 작성자</th><th> 게시글 제목 </th><th> 작성시간 </th><th> 조회수 </th></tr>';

for(var i = 0; i < 10; i++) {

 myHTMLStr+='<tr><th>' + jsonArray[i]['sid'] + '</th><td>'
                       + jsonArray[i]['stitle'] + '</th><th>'
                       + jsonArray[i]['stime'] + '</th><th>'
                       + jsonArray[i]['sview'] + '</th></tr>'
}

myHTMLStr+='</table>';
var table = document.getElementById('tableOutput')
table.innerHTML = myHTMLStr;


function paging(page){
  console.log(page);
  var myHTMLStr = '<table>';
  myHTMLStr ='<tr><th> 작성자</th><th> 게시글 제목 </th><th> 작성시간 </th><th> 조회수 </th></tr>';

  for(var i = ((page-1)*10); i < ((page-1)*10)+10 ; i++) {
   if(i >= jsonArray.length) continue;
   myHTMLStr+='<tr><th>' + jsonArray[i]['sid'] + '</th><td>'
                         + jsonArray[i]['stitle'] + '</th><th>'
                         + jsonArray[i]['stime'] + '</th><th>'
                         + jsonArray[i]['sview'] + '</th></tr>';
  }

  myHTMLStr+='</table>';
  var table = document.getElementById('tableOutput')
  table.innerHTML = myHTMLStr;
}
