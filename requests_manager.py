# from math import *
# from random import *
# from time import *
from flask import request, jsonify, current_app


# Classe permettant d'envoyer toutes les requetes
class RequestsManager:
    @staticmethod
    def get_images():
        return current_app.get('/images')

    @staticmethod
    def get_image(image_id):
        return current_app.get(f'/images/{image_id}')

    @staticmethod
    def create_image(image_data):
        return current_app.post('/images', json=image_data)

    @staticmethod
    def update_image(image_id, image_data):
        return current_app.put(f'/images/{image_id}', json=image_data)

    @staticmethod
    def delete_image(image_id):
        return current_app.delete(f'/images/{image_id}')
