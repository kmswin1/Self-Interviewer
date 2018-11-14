from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return '소프트웨어 공학 1팀'

if __name__ == '__main__':
  app.run()
