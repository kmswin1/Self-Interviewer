from flask import Flask
from flask import render_template, request, redirect, url_for
from flask_cors import CORS
import json
import pymysql
import os

PWD = os.path.dirname(os.path.realpath(__file__))
app = Flask(__name__, template_folder="static/templates", static_folder="static")


@app.route('/sendQuestionOption', methods=['POST'])
def getQuestion():
    conn = getConnection()
    curs = conn.cursor(pymysql.cursors.DictCursor)
    jsonObj = request.get_json()

    print(jsonObj)
    sql = "SELECT major, company, question FROM Question WHERE major=%s and company=%s"
    curs.execute(sql, (jsonObj["occupation"], jsonObj["company"]))
    conn.commit()

    results = curs.fetchall()
    jsonObj = json.dumps(results)
    print("getQuestion success.")
    conn.close()
    return jsonObj
