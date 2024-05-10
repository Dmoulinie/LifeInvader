# from math import *
# from random import *
# from time import *
from flask import Flask, request, jsonify
from pymongo import MongoClient
from pymongo.errors import DuplicateKeyError, OperationFailure

# ! Look if Postman useful
app = Flask(__name__)                                                           # Declare self (python file) as server

client = MongoClient("mongodb://localhost:27017/")
db = client["image"]
Collection = db["images"]


@app.route('/images', methods=['GET'])
def get_all_images():
    try:
        return jsonify(list(Collection.find())), 200
    except OperationFailure as e:
        return jsonify({"error": f"Erreur d'opération: {e}"}), 500


@app.route('/images/<id>', methods=['GET'])
def get_image(identifier):
    try:
        image = Collection.find_one({"_id": identifier})
        if image:
            return jsonify(image)
        else:
            return jsonify({"error": "Image non trouvée !"}), 404
    except OperationFailure as e:
        return jsonify({"error": f"Erreur d'opération: {e}"}), 500


@app.route('/images', methods=['POST'])
def create_image(image_data):
    try:
        # image_data = request.get_json()                                       # Recupere les données directement dans la requete POST
        Collection.insert_one(image_data)
        return jsonify({"message": "Image créée avec succès !"}), 201
    except DuplicateKeyError:
        return jsonify({"error": "La clé existe en double !"}), 400
    except OperationFailure as e:
        return jsonify({"error": f"Erreur d'opération: {e}"}), 500


@app.route('/images/<id>', methods=['PUT'])
def update_image(identifier, image_data):
    try:
        # image_data = request.get_json()                                       # Recupere les données directement dans la requete POST
        result = Collection.update_one({"_id": identifier}, {"$set": image_data})
        if result.modified_count > 0:
            return jsonify({"message": "Image mis à jour avec succès !"})
        else:
            return jsonify({"error": "Image non trouvée !"}), 404
    except OperationFailure as e:
        return jsonify({"error": f"Erreur d'opération: {e}"}), 500


@app.route('/images/<id>', methods=['DELETE'])
def delete_image(identifier):
    try:
        result = Collection.delete_one({"_id": identifier})
        if result.deleted_count > 0:
            return jsonify({"message": "Image supprimée avec succès !"})
        else:
            return jsonify({"error": "Image non trouvée !"}), 404
    except OperationFailure as e:
        return jsonify({"error": f"Erreur d'opération: {e}"}), 500


@app.errorhandler(404)
def not_found(error):                                                           # For error 404 (keep 'error' argument)
    return jsonify({"error": "Page non trouvée !"}), 404


@app.errorhandler(500)
def internal_server_error(error):                                               # For error 500 (keep 'error' argument)
    return jsonify({"error": "Erreur interne du serveur !"}), 500


if __name__ == '__main__':
    app.run(debug=True)
