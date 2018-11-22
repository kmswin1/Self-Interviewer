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
