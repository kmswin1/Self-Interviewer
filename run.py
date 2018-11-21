from flask import Flask
from flask import render_template, request, redirect, url_for
from flask_cors import CORS
import json
import pymysql
import os

PWD = os.path.dirname(os.path.realpath(__file__))
app = Flask(__name__, template_folder="static/templates", static_folder="static")
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

@app.route('/post/<id>')
def post(id):
    return render_template("post.html", id=id)

@app.route('/getPostInfo')
def getPostInfo():


@app.route('/getInfo', methods=['GET'])
def getInfo():
    conn = getConnection()
    curs = conn.cursor(pymysql.cursors.DictCursor)
    sql = "select * from Info order by id desc"
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

@app.route('/clickInfo', methods=['PUT'])
def clickInfo():
    conn = getConnection()
    curs = conn.cursor(pymysql.cursors.DictCursor)
    jsonObj = request.get_json()

    print (jsonObj)
    sql = "select hit from Info where id = %s"
    curs.execute(sql, (jsonObj["id"]))
    selected_hit = curs.fetchone()
    selected_hit = selected_hit + 1
    sql = "update Info set hit = %s where id = %s"
    curs.execute(sql, (selected_hit, jsonObj["id"]))
    id = jsonObj["id"]
    conn.commit()
    print ("clickInfo success")
    conn.close()
    return post(id)


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
