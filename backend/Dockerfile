FROM python:3.11.0b5-slim-buster


RUN apt-get update && apt-get install -y \
  build-essential \
  python-dev \
  libpq-dev \
  zlib1g \
  zlib1g-dev \
  libev4 \
  libev-dev \
  linux-libc-dev \
  libpcre3 \
  postgresql-client \
  libssl-dev \
  libffi-dev \
  libldap2-dev \
  libsasl2-dev \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY requirements.txt /app/requirements.txt

RUN pip install -r requirements.txt

COPY . /app

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

