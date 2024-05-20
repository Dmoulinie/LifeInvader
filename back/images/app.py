import os
from uuid import UUID
import uuid
import flask
from flask import request, jsonify, send_from_directory
from pathlib import Path
from flask import json
from flask_cors import CORS # pip install flask-cors

app = flask.Flask(__name__)
CORS(app)

# Path to the JSON file
data_file = Path(__file__).parent / "db.json"

# Load data from the JSON file
def load_image_data():
    try:
        with open(data_file, "r", encoding="utf-8") as f:
            image_data = json.load(f)
    except FileNotFoundError:
        print(f"File not found: {data_file}")
    return image_data


@app.route('/', methods=['GET'])
def home():
    return '''<h1>ALL THE LINKS :</h1>
                <p>A flask api implementation.   </p>
                <ul>
                <li><a href="/api/getallimage">GetAllImage</a></li>
                <li><a href="/api/getimagebyid/abacf700-23fb-4fc9-8971-f224a8f430cb">GetImageById</a></li>
                <li><a href="/api/getallprofile/Kearan511">GetAllProfile</a></li>
                </ul>
                '''

@app.route('/api/getallimage', methods=['GET'])
def allimgs():
    image_data = load_image_data()
    return jsonify(image_data), 200

@app.route('/api/getimagebyid/<string:image_id>', methods=['GET'])
def get_image_by_id(image_id):
    image_data = load_image_data()
    for image in image_data:
        if image['id'] == image_id:
            return jsonify(image), 200
    return jsonify({"message": "Image not found"}), 404

@app.route('/api/getallprofile/<string:username>', methods=['GET'])
def allimgsprofile(username):
    image_data = load_image_data()
    user_images = [image for image in image_data if image['username'] == username]
    if user_images:
        return jsonify(user_images), 200
    return jsonify({"message": "No images found for this user"}), 404


app.config['UPLOAD_FOLDER'] = './images'

@app.route('/api/addimage', methods=['POST'])
def add_image():
    image_data = load_image_data()
    if request.method == 'POST':
        # Get the image and data from the request
        image = request.files['image']
        data = json.loads(request.form['data'])

        # Save the image
        image_path = os.path.join('images', image.filename)
        image.save(image_path)

        # Add the image data to the database
        image_data.append({
            'id': data['id'],
            'name': data['name'],
            'username': data['username'],
            'size': data['size'],
            'type': data['type'],
            'date': data['date'],
            'description': data['description'],
            'path': image_path
        })

        # Save the database to the db.json file
        with open('db.json', 'w') as f:
            json.dump(image_data, f, indent=4)

        return jsonify({'message': 'Image added successfully'})
    else:
        return jsonify({'error': 'Invalid request method'})
    

@app.route('/images/<path:path>')
def send_image(path):
    return send_from_directory('./images', path)

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000, debug=True)