from flask import Flask
app = Flask(__name__)

@app.route('/')
def main():
    return 'Team 1'

@app.route('/signin/<userid>')
def sign_in(userid):
    return '%s information' %userid

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
  app.run(host='0.0.0.0')
