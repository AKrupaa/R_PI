from django.db import models

# Create your models here.

class User(models.Model):
    # to jest database
    username = models.CharField(max_length=255)
    password = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.username} {self.password}"
