import flask
from flask import request, jsonify
app = flask.Flask(__name__)
# Create some test data for our catalog in the form of a list of dictionaries.

@app.route('/', methods=['GET'])
def home():
    return '''<h1>Hello World</h1>
                <p>A flask api implementation.   </p>
                <a href="/api/v1/welcome">Welcome</a>
                '''

@app.route('/api/v1/welcome', methods=['GET'])
def welcome():
    return {
        "message": "Welcome to the API"
    }


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000)