from django.db import models

# Create your models here.

class Posts(models.Model):
    text = models.CharField(max_length=2000)