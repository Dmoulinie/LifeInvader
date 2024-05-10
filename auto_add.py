from pymongo import MongoClient
from gridfs import GridFS
from datetime import date
from PIL import Image

# ! Add function to add all images from a file (with file_path) -> use for ../Images
client = MongoClient('localhost', 27017)                                        # Connexion à MongoDB
db = client["image_modifier"]
ImagesCollection = db["images"]                                                 # Récupérer la collection 'images'
fs = GridFS(db)                                                                 # Récupérer le système de fichiers GridFS

# Définir les informations de l'image
index = 1
path = "../Images"
image_path = f"{path}/default.png"
with open(image_path, 'rb') as f:
    image_data = f.read()
    pil_data = Image.open(f)

# Insérer les informations dans la collection 'images'
image = {
    "id": index,
    "name": image_path.replace(path, ""),
    "path": path,
    "image": fs.put(image_data, filename=image_path),
    "size": list(pil_data.size),                            # ex: [800, 600],
    "format": pil_data.format,                              # "png/jpg/gif/pdf",
    "description": f"L'image n°{index}",
    "username": f"username{index}",
    "nb_likes": 0,
    "date_save": str(date.today()),
}

print(f"{ImagesCollection.database.codec_options}")
image_doc = ImagesCollection.find_one(image)
if image_doc:
    print(f"Cette image existe déjà dans la base de données !")
else:
    # ImagesCollection.insert_one(image)                                          # Insérer l'image dans la collection
    print(f"{image['name']} ajoutée à la base de données !")

client.close()
