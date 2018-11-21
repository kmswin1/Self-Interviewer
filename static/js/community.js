var data;
var jsonArray;
var select;
var idx;
var hitupdate;
var targetpost;

$.ajax({
          type: 'GET',
          url: "http://ec2-54-244-72-128.us-west-2.compute.amazonaws.com:5000/getInfo",
          contentType: 'application/json; charset=utf-8',
          traditional: true,
          async: false,
          data: jsonArray,
          success: function (data) {
              //console.log(data);
              jsonArray = JSON.parse(data)
              select = jsonArray;
          },
          error: function (xhr) {
              console.log ("실패");
          }
      });
//console.log(jsonArray[1]);

$('table').click(function(e) {
    if(e.target.tagName == "TD") {
        if($("table td:lt(" + (idx + 1) + ")")){
          //console.log(e.target);
          var a = $("table td").index($(e.target));
          select[a]['hit'] += 1;
          var json_data = JSON.stringify({
                        id : select[a]['id'],
                        sid : select[a]['author'],
                        stitle : select[a]['title'],
                        stext : select[a]['text'],
                        sview : select[a]['hit'],
                        stime : select[a]['time'],
                      })
          targetpost = json_data;
          alert(targetpost);

          $.ajax({
                    type: 'PUT',
                    url: "http://ec2-54-244-72-128.us-west-2.compute.amazonaws.com:5000/clickInfo",
                    contentType: 'application/json; charset=utf-8',
                    traditional: true,
                    async: false,
                    data: json_data,
                    success: function (data) {
                        console.log("1");
                    },
                    error: function (xhr) {
                        console.log ("2");
                    }
                });
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

var btn = document.getElementById('pageselect');
btn.innerHTML = myHTMLBtn;



var myHTMLStr = '<table>';
myHTMLStr ='<tr><th> 작성자</th><th> 게시글 제목 </th><th> 작성시간 </th><th> 조회수 </th></tr>';

for(var i = 0; i < 10; i++) {
if(i >= jsonArray.length) continue;
 myHTMLStr+='<tr><th>' + jsonArray[i]['author'] + '</th><td>'
                       + jsonArray[i]['title'] + '</th><th>'
                       + jsonArray[i]['time'] + '</th><th>'
                       + jsonArray[i]['hit'] + '</th></tr>'
}

myHTMLStr+='</table>';
var table = document.getElementById('tableOutput')
table.innerHTML = myHTMLStr;


function paging(page){

  var myHTMLStr = '<table>';
  myHTMLStr ='<tr><th> 작성자</th><th> 게시글 제목 </th><th> 작성시간 </th><th> 조회수 </th></tr>';

  for(var i = ((page-1)*10); i < ((page-1)*10)+10 ; i++) {
   if(i >= jsonArray.length) continue;
   myHTMLStr+='<tr><th>' + jsonArray[i]['author'] + '</th><td>'
                         + jsonArray[i]['title'] + '</th><th>'
                         + jsonArray[i]['time'] + '</th><th>'
                         + jsonArray[i]['hit'] + '</th></tr>';
  }

  myHTMLStr+='</table>';
  var table = document.getElementById('tableOutput')
  table.innerHTML = myHTMLStr;
}
