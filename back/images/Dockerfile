FROM python:3.8-alpine

RUN apk update

WORKDIR /app/images

COPY . .

RUN pip install -r requirements.txt

EXPOSE 5000



CMD ["python3", "app.py"]