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
    # 아래의 코드는 요청이 GET 이거나, 인증정보가 잘못됐을때 실행된다.
    return render_template('signin.html', error=error)

@app.route('/')
def main():
    return render_template("main.html")

@app.route('/question')
def question():
    return 'question'

@app.route('/matching')
def matching():
    return 'matching'

@app.route('/studyroom')
def studyroom():
    return 'studyroom'

@app.route('/community')
def community(info,review):
    return render_template("community.html",info = info, review = review)

@app.route('/getInfo', methods='GET')
def getInfo():
    conn = getConnection()
    curs = conn.cursor(pymysql.cursors.DictCursor)

@app.route('/writeInfo', methods='POST')
def writeInfo():
    conn = getConnection()
    curs = conn.cursor(pymysql.cursors.DictCursor)
    jsonObj = request.json

    sql = "insert into Info(author, title, text, time, hit) values(%s, %s, %s, %s, %s)"
    curs.execute(sql, (jsonObj["sid"], jsonObj["stitle"], jsonObj["stext"], jsonObj["stime"], jsonObj["sview"]))
    conn.commit()
    print ("writeInfo success")
    conn.close()


@app.route('/reviseInfo', methods='PUT')
def reviseInfo():
    conn = getConnection()
    curs = conn.cursor(pymysql.cursors.DictCursor)

@app.route('/delInfo', methods='DELETE')
def delInfo():
    conn = getConnection()
    curs = conn.cursor(pymysql.cursors.DictCursor)

if __name__ == '__main__':
  app.run(host='0.0.0.0', debug=True)
