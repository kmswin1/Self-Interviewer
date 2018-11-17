from flask import Flask
from flask import render_template, request
import json
import pymysql
app = Flask(__name__, template_folder='static/templates')

def getConnection():
    return pymysql.connect(host='54.244.72.128', port = '3306', user='root', password='1234',
                           db='InterviewNet', charset='utf8')

@app.route('/signin/<userid>', methods=['POST', 'GET'])
def sign_in(userid):
    error = None
    if request.method == 'POST':
        if valid_login(request.form['userid'],
                       request.form['userpw']):
            return log_the_user_in(request.form['userid'])
        else:
            error = 'Invalid user id/password'
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
    return 1

@app.route('/writeInfo', methods=['POST'])
def writeInfo():
    conn = getConnection()
    curs = conn.cursor(pymysql.cursors.DictCursor)
    jsonObj = request.json

    sql = "insert into Info(author, title, text, time, hit) values(%s, %s, %s, %s, %s)"
    curs.execute(sql, (jsonObj["sid"], jsonObj["stitle"], jsonObj["stext"], jsonObj["stime"], jsonObj["sview"]))
    conn.commit()
    print ("writeInfo success")
    conn.close()


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
