function move(url){
//  location.href="community.html"
}
function send(){
  //String input = document.getElementById("stitle").value;
  //temp = input;
}
function samp(){


  var nowDate = new Date();
  console.log(nowDate);

  var sample = "this is a sample"
  var stext = "hello everyone"
  var sid = "sampleid";
  var stime = nowDate.getMonth() + "/" + nowDate.getDate() + "/" + nowDate.getHours() + ":" + nowDate.getMinutes();
  var sview = "0";

  var json_data = JSON.stringify({
                sid : sid,
                stitle : sample,
                stext : stext,
                stime : stime,
                sview : sview,
              })
  console.log(json_data);

  $.ajax({
            type: 'POST',
            url: "http://ec2-54-244-72-128.us-west-2.compute.amazonaws.com:5000/writeInfo",
            contentType: 'application/json; charset=utf-8',
            traditional: true,
            async: false,
            data: json_data,
            success: function (data) {
                console.log(data);
		console.log("success");
            },
            error: function (xhr) {
                console.log (data);
		console.log("failed");
            }
        });
                console.log (data);
}



//<form action="ec2-54-244-72-128.us-west-2.compute.amazonaws.com:5000/test" method="post">
  //      <p>테스트 : <input type="text" name="test"></p>
    //    <input type="submit" value="정보 넘기기">
  //  </form>
