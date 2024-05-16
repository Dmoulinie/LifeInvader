from uuid import UUID
import uuid
import flask
from flask import request, jsonify
from pathlib import Path
from flask import json
from flask_cors import CORS # pip install flask-cors
import os

app = flask.Flask(__name__)
CORS(app)

# Path to the JSON file
data_file = Path(__file__).parent / "db.json"

# Load data from the JSON file
try:
    with open(data_file, "r", encoding="utf-8") as f:
        image_data = json.load(f)
except FileNotFoundError:
    print(f"File not found: {data_file}")


@app.route('/', methods=['GET'])
def home():
    return '''<h1>ALL THE LINKS :</h1>
                <p>A flask api implementation.   </p>
                <ul>
                <li><a href="/api/getallimage">GetAllImage</a></li>
                <li><a href="/api/getallimage/40efa666-b6bf-4d13-aa11-ba5aa716e682">GetImageById</a></li>
                <li><a href="/api/getallprofile/Kearan511">GetAllProfile</a></li>
                </ul>
                '''

@app.route('/api/getallimage', methods=['GET'])
def allimgs():
    return jsonify(image_data), 200

@app.route('/api/getallimage/<string:image_id>', methods=['GET'])
def get_image_by_id(image_id):
    for image in image_data:
        if image['id'] == image_id:
            return jsonify(image), 200
    return jsonify({"message": "Image not found"}), 404

@app.route('/api/getallprofile/<string:username>', methods=['GET'])
def allimgsprofile(username):
    user_images = [image for image in image_data if image['username'] == username]
    if user_images:
        return jsonify(user_images), 200
    return jsonify({"message": "No images found for this user"}), 404

@app.route('/api/addimage', methods=['POST'])
def add_image():
    if request.method == 'POST':
        file = request.files['image']
        data = request.form['data']
        data = json.loads(data)

        # Save the file to the desired location
        file_path = os.path.join('images', file.filename)
        file.save(file_path)

        new_image = {
            "id": data.get("id"),
            "name": data.get("name"),
            "description": data.get("description"),
            "path": file_path,
            "size": data.get("size"),
            "username": data.get("username"),
            "date": data.get("date"),
            "type": data.get("type")
        }

        with open(data_file, "r+", encoding="utf-8") as f:
            image_data = json.load(f)
            image_data.append(new_image)
            f.seek(0)
            json.dump(image_data, f, indent=4)
            f.truncate()

        return jsonify({"message": "Image added successfully"}), 201
    return jsonify({"message": "Invalid request"}), 400


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000)