from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver

class Project(models.Model):
    category = models.CharField(max_length=100)
    title = models.CharField(max_length=200)
    description = models.TextField()
    technologies = models.JSONField()  
    link = models.URLField(blank=True)

    def __str__(self):
        return self.title

class Lead(models.Model):
    name = models.CharField(max_length=255)
    telegram = models.CharField(max_length=100)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Заявка от {self.name} ({self.telegram})"



@receiver(post_save, sender=Lead)
def notify_admin(sender, instance, created, **kwargs):
    if created:
        from .utils import send_telegram_message
        message = (
            f"🚀 <b>Новая заявка!</b>\n\n"
            f"👤 Имя: {instance.name}\n"
            f"✈️ Telegram: {instance.telegram}\n"
            f"📝 Проект: {instance.description}"
        )
        send_telegram_message(message)