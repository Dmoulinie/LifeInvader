import json
from pathlib import Path
from uuid import uuid4
from faker import Faker
from pprint import pprint
import datetime

fake = Faker(locale = "fr_FR") #par défaut "en_US"


# Path to the JSON file
data_file = Path(__file__).parent / "db.json"
# Path with all the images
image_path = Path(__file__).parent / "images"


def load_db():
    ## load all img name : 
    image_data = []
    number_of_images = 0
    for img in image_path.iterdir():
        fake_date = fake.date_time_between(start_date="-2y", end_date="now", tzinfo=None)
        timestamp_in_seconds = int(fake_date.timestamp())
        timestamp_in_milliseconds = timestamp_in_seconds * 1000

        relative_path = "images/" + img.name
        
        image_data.append({
            "id": str(uuid4()),
            "name": img.name,
            "description": fake.sentence(8),
            "path": relative_path,
            "size": img.stat().st_size,
            "username": fake.first_name() + fake.numerify(text="###"),
            "date": timestamp_in_milliseconds,
            "type": "image/"+ img.suffix.lstrip(".")
        })
        number_of_images += 1
    return image_data, number_of_images

def create_db(image_data: list):
    with open(data_file, "w", encoding="utf-8") as f:
        json.dump(image_data, f, indent=4, default=str, ensure_ascii=False)


if __name__ == '__main__':
    print("Loading the database...")
    image_data, nb = load_db()
    print(f"================= {nb} images loaded. =================\n")
    print("Creating the database...")
    create_db(image_data)
    print("================= Database created (in db.json). =================\n")