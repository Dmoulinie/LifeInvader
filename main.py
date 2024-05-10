# from math import *
# from random import *
# from time import *
from requests_setter import app
import requests_manager


def main():
    rm = requests_manager.RequestsManager()
    url = "../Images"

    # Récupérer la liste des images
    images = rm.get_images()
    print("Images:", images)

    # Récupérer une image spécifique
    image_id = '2'
    image = rm.get_image(image_id)
    print("Image:", image)

    # Créer une nouvelle image
    image_data = {'name': 'new_image', 'url': f'{url}/default.jpg'}
    new_image = rm.create_image(image_data)
    print("New Image:", new_image)

    # Mettre à jour une image
    image_id = '2'
    image_data = {'name': 'updated_image', 'url': f'{url}/default.png'}
    updated_image = rm.update_image(image_id, image_data)
    print("Updated Image:", updated_image)

    # Supprimer une image
    image_id = '3'
    rm.delete_image(image_id)
    print("Image deleted")

    # Récupérer la liste des images
    images = rm.get_images()
    print("Images:", images)


if __name__ == "__main__":
    with app.app_context():
        main()
