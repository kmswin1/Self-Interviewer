<<<<<<< HEAD
from flask import Flask
from flask import render_template, request, redirect, url_for
from flask_cors import CORS
import json
import pymysql
app = Flask(__name__, template_folder='static/templates')

# <------ error hander---------->

@app.errorhandler(500)
def internal_error(error):

    return "500 error"

@app.errorhandler(404)
def not_found(error):
    return "404 error",404

#<------------------------------>

#<--------cors permission settins----------->

cors = CORS(app, resources={
  r"/*": {"origin": "*"},
})

#<------------------------------------------>
def getConnection():
    return pymysql.connect(host='54.244.72.128', user='root', password='1234',
                           db='InterviewNet', charset='utf8')

@app.route('/signin')
def sign_in(userid):
    error = None
#    if request.method == 'POST':
 #       if valid_login(request.form['userid'],
  #                     request.form['userpw']):
   #         return log_the_user_in(request.form['userid'])
    #    else:
     #       error = 'Invalid user id/password'
    return render_template('signin.html', error=error)

@app.route('/')
def main():
    return render_template("main.html")

@app.route('/question')
def question():
    return render_template("question.html")

@app.route('/matching')
def matching():
    return render_template("matching.html")

@app.route('/studyroom')
def studyroom():
    return render_template("studyroom.html")

@app.route('/community')
def community():
    return render_template("community.html")

@app.route('/write')
def write():
    return render_template("write.html")

@app.route('/index')
def index():
    return render_template("index.html")

@app.route('/mypage')
def mypage():
    return render_template("mypage.html")

@app.route('/getInfo', methods=['GET'])
def getInfo():
    conn = getConnection()
    curs = conn.cursor(pymysql.cursors.DictCursor)
    sql = "select * from Info"
    curs.execute(sql)
    conn.commit()
    results = curs.fetchall()
    jsonObj = json.dumps(results)
    print ("getInfo success")
    conn.close()
    return jsonObj

@app.route('/writeInfo', methods=['POST'])
def writeInfo():
    conn = getConnection()
    curs = conn.cursor(pymysql.cursors.DictCursor)
    jsonObj = request.get_json()

    print (jsonObj)
    sql = "insert into Info(author, title, text, time, hit) values(%s, %s, %s, %s, %s)"
    curs.execute(sql, (jsonObj["sid"], jsonObj["stitle"], jsonObj["stext"], jsonObj["stime"], jsonObj["sview"]))
    conn.commit()
    print ("writeInfo success")
    conn.close()
    return redirect(url_for('community'))


@app.route('/reviseInfo', methods=['PUT'])
def reviseInfo():
    conn = getConnection()
    curs = conn.cursor(pymysql.cursors.DictCursor)
    return 1

@app.route('/delInfo', methods=['DELETE'])
def delInfo():
    conn = getConnection()
    curs = conn.cursor(pymysql.cursors.DictCursor)
    return 1

if __name__ == '__main__':
  app.run(host='0.0.0.0', debug=True)
=======
from flask import Flask
from flask import render_template, request, redirect, url_for
from flask_cors import CORS
import json
import pymysql
import os
import smtplib
from email.mime.text import MIMEText

PWD = os.path.dirname(os.path.realpath(__file__))
app = Flask(__name__, template_folder="static/templates", static_folder="static")
id = {}
# <------ error hander---------->

@app.errorhandler(500)
def internal_error(error):

    return "500 error"

@app.errorhandler(404)
def not_found(error):
    return "404 error",404

#<------------------------------>

#<--------cors permission settins----------->

cors = CORS(app, resources={
  r"/*": {"origin": "*"},
})

#<------------------------------------------>
def getConnection():
    return pymysql.connect(host='54.244.72.128', user='root', password='1234',
                           db='InterviewNet', charset='utf8')

@app.route('/signin')
def sign_in(userid):
    error = None
#    if request.method == 'POST':
 #       if valid_login(request.form['userid'],
  #                     request.form['userpw']):
   #         return log_the_user_in(request.form['userid'])
    #    else:
     #       error = 'Invalid user id/password'
    return render_template("signin.html", error=error)

@app.route('/')
def main():
    return render_template("signin.html")


@app.route('/sendQuestionOption', methods = ['PUT'])
def getQuestion():
    conn = getConnection()
    curs = conn.cursor(pymysql.cursors.DictCursor)
    jsonObj = request.get_json()

    print(jsonObj)
    sql = "SELECT * FROM Question WHERE major=%s and company=%s"
    curs.execute(sql, (jsonObj["occupation"], jsonObj["company"]))
    results = {}
    results = curs.fetchall()
    jsonObj = json.dumps(results)
    conn.commit()
    print (jsonObj)
    print("getQuestion success.")
    conn.close()
    return jsonObj


@app.route('/question')
def question():
    return render_template("question.html")

@app.route('/matching')
def matching():
    return render_template("matching.html")

@app.route('/getMemberInfo', methods=['PUT'])
def getMemberInfo():
    conn = getConnection()
    curs = conn.cursor(pymysql.cursors.DictCursor)
    jsonObj = request.get_json()
    print (jsonObj)
    sql = "select * from Member where company = %s and city = %s and town = %s and major = %s"
    curs.execute(sql,(jsonObj["company"], jsonObj["city"], jsonObj["town"], jsonObj["major"]))
    results = curs.fetchall()
    jsonObj = json.dumps(results)
    conn.commit()
    print (jsonObj)
    print ("getMemberInfo success")
    conn.close()
    return jsonObj

@app.route('/setMember', methods=['POST'])
def setMember():
    conn = getConnection()
    curs = conn.cursor(pymysql.cursors.DictCursor)
    jsonObj = request.get_json()
    print (jsonObj)
    sql = "insert into Matching(username, city, town, company, major, userInfo) values(%s, %s, %s, %s, %s, %s)"
    curs.execute(sql,(jsonObj["username"], jsonObj["city"], jsonObj["town"], jsonObj["company"], jsonObj["major"], jsonObj["userInfo"]))
    conn.commit()
    print ("setMember success")
    conn.close()
    return redirect(url_for('matching'))

@app.route('/studyroom')
def studyroom():
    return render_template("studyroom.html")

@app.route('/community')
def community():
    return render_template("community.html")

@app.route('/write')
def write():
    return render_template("write.html")

@app.route('/index')
def index():
    return render_template("index.html")

@app.route('/mypage')
def mypage():
    return render_template("mypage.html")

@app.route('/post')
def post():
    return render_template("post.html")

@app.route('/getPostInfo', methods=['GET'])
def getPostInfo():
    conn = getConnection()
    curs = conn.cursor(pymysql.cursors.DictCursor)

    sql = "select * from Info where id = %s"
    global id
    curs.execute(sql, (id))
    results = curs.fetchone()
    jsonObj = json.dumps(results)
    conn.commit()
    print ("getPostInfo success")
    conn.close()
    return jsonObj


@app.route('/getInfo', methods=['GET'])
def getInfo():
    conn = getConnection()
    curs = conn.cursor(pymysql.cursors.DictCursor)
    sql = "select * from Info order by id desc"
    curs.execute(sql)
    results = curs.fetchall()
    jsonObj = json.dumps(results)
    conn.commit()
    print (jsonObj)
    print ("getInfo success")
    conn.close()
    return jsonObj

@app.route('/writeInfo', methods=['POST'])
def writeInfo():
    conn = getConnection()
    curs = conn.cursor(pymysql.cursors.DictCursor)
    jsonObj = request.get_json()

    print (jsonObj)
    sql = "insert into Info(author, title, text, time, hit) values(%s, %s, %s, %s, %s)"
    curs.execute(sql, (jsonObj["sid"], jsonObj["stitle"], jsonObj["stext"], jsonObj["stime"], jsonObj["sview"]))
    conn.commit()
    print ("writeInfo success")
    conn.close()
    return redirect(url_for('community'))

@app.route('/clickInfo', methods=['PUT'])
def clickInfo():
    conn = getConnection()
    curs = conn.cursor(pymysql.cursors.DictCursor)
    jsonObj = request.get_json()

    print (jsonObj)
    sql = "select hit from Info where id = %s"
    curs.execute(sql, (jsonObj["id"]))
    sql = "update Info set hit = %s where id = %s"
    curs.execute(sql, (jsonObj["sview"], jsonObj["id"]))
    conn.commit()
    print ("clickInfo success")
    global id
    id = jsonObj["id"]
    conn.close()
    return redirect(url_for('post'))


@app.route('/reviseInfo', methods=['PUT'])
def reviseInfo():
    conn = getConnection()
    curs = conn.cursor(pymysql.cursors.DictCursor)
    return 1

@app.route('/delInfo', methods=['DELETE'])
def delInfo():
    conn = getConnection()
    curs = conn.cursor(pymysql.cursors.DictCursor)
    return 1

@app.route('/sendEmail', methods=['POST'])
def sendEmail():
    smtp = smtplib.SMTP('smtp.live.com', 587)
    smtp.ehlo()  # say Hello
    smtp.starttls()  # TLS 사용시 필요
    collegeMail = ''
    mailId = ''
    smtp.login('kmswin7@gmail.com', 'qhdwka12')

    msg = MIMEText('본문 테스트 메시지')
    msg['Subject'] = '테스트'
    msg['To'] = mailId+'@'+collegeMail
    smtp.sendmail('kmswin7@gmail.com', mailId+'@'+collegeMail , msg.as_string())

    smtp.quit()


if __name__ == '__main__':
  app.run(host='0.0.0.0', debug=True)
>>>>>>> b1c0ae55829bd0ed1b9746eae5e5a9eb81c48c38
