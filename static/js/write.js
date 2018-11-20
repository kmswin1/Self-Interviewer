
var json_data;

function send(){
  var nowDate = new Date();
  console.log(nowDate);

  var sample = $("#stitle").val();
  var stext = $("#stext").val();
  var sid = "sampleid";
  var stime = nowDate.getMonth() + "/" + nowDate.getDate() + "/" + nowDate.getHours() + ":" + nowDate.getMinutes();
  var sview = "0";

  json_data = JSON.stringify({
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

            },
            error: function (xhr) {
                console.log (data);

            }
        });
        location.href="http://ec2-54-244-72-128.us-west-2.compute.amazonaws.com:5000/community"
}
