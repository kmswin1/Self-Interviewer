from flask import Flask
from flask import render_template
app = Flask(__name__, template_folder='static/templates')

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
def community():
    return 'community'

if __name__ == '__main__':
  app.run(host='0.0.0.0', debug=True)
