# set base image (host OS)
FROM python:3.7-slim

COPY . /tryjango
WORKDIR /tryjango

RUN pip install --upgrade pip
RUN pip install flask

ENTRYPOINT ["python", "app.py"]


