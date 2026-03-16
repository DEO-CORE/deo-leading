# Deploy to VPS

## 1. Подготовка сервера

```bash
# Установка Docker и Docker Compose
sudo apt update && sudo apt upgrade -y
sudo apt install -y docker.io docker-compose-plugin

# Добавление пользователя в группу docker
sudo usermod -aG docker $USER
newgrp docker
```

## 2. Клонирование репозитория

```bash
git clone https://github.com/DEO-CORE/deo-leading.git
cd deo-leading
```

## 3. Настройка переменных окружения

```bash
# Создать файл .env в папке bec/
echo "SECRET_KEY=your-secret-key-here" > bec/.env
echo "DEBUG=0" >> bec/.env
echo "ALLOWED_HOSTS=your-domain.com,www.your-domain.com" >> bec/.env
```

## 4. Запуск

```bash
docker compose -f docker-compose.prod.yml up -d
```

## 5. SSL (Let's Encrypt) - опционально

Для HTTPS установите certbot:

```bash
sudo apt install -y certbot
sudo certbot certonly --standalone -d your-domain.com -d www.your-domain.com
```

Затем обновите `front/nginx.conf` для использования SSL сертификатов.

## 6. Обновление

```bash
git pull
docker compose -f docker-compose.prod.yml down
docker compose -f docker-compose.prod.yml up -d --build
```

## Проверка

- Frontend: http://your-domain.com
- API: http://your-domain.com/api/
