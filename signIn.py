from flask import Flask, request, render_template
app = Flask(__name__, template_folder='static/templates')


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
