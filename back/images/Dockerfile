FROM alpine:latest
RUN apk update
RUN apk add py-pip
RUN apk add --no-cache python3-dev 
WORKDIR /app
COPY . .

EXPOSE 5000
# RUN pip install -r requirements.txt
CMD ["python3", "app.py"]