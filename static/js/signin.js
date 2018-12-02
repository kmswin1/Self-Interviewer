var check;

function slogin(){
  var sid = $("#loginid").val();
  var spw = $("#loginpw").val();
  console.log(sid+"  "+spw);
  var login_json_data = JSON.stringify({
                loginin : sid,
                loginpw : spw,
              })
  $.ajax({
    type : "POST",
    url : "http://ec2-54-244-72-128.us-west-2.compute.amazonaws.com:5000/login",
    contentType: 'application/json; charset=utf-8',
    traditional: true,
    async: false,
    data: login_json_data,
    success: function (data) {
        console.log(data);
        console.log('성공');
        check = data;
    },
    error: function (xhr) {
        console.log (data);
    }
});
}
