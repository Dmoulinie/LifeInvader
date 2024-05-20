FROM python:3.11-alpine

RUN apk update

WORKDIR /app/images

COPY . .

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 5000

ENV FLASK_ENV=development

CMD ["python3", "app.py"]