# from math import *
# from random import *
# from time import *
from datetime import date
from pymongo import MongoClient
from gridfs import GridFS
from os import listdir


client = MongoClient("mongodb://localhost:27017/")
db = client["image_modifier"]
fs = GridFS(db)

path = "../Images"
Images_path = [f"{path}/{_}" for _ in listdir(path)]                            # Get all images in chosen file
DATAS = []

for index, current_path in enumerate(Images_path):
    with open(current_path, "rb") as file:
        image_data = file.read()
    image = {
        "id": (index + 1),
        "name": image_path.replace(path, ""),
        "path": path,
        "image": fs.put(image_data, filename=current_path),
        "size": list(pil_data.size),  # ex: [800, 600],
        "format": pil_data.format,  # "png/jpg/gif/pdf",
        "description": f"L'image n°{index}",
        "username": f"username{index}",
        "nb_likes": 0,
        "date_save": str(date.today()),
    }
    DATAS.append(image)

client.close()
