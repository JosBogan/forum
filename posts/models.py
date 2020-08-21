from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

# Create your models here.

class Post(models.Model):
    title = models.CharField(max_length=20)
    text = models.CharField(max_length=2000)
    user = models.ForeignKey(User, related_name='posts', on_delete=models.CASCADE, blank=True, null=True)
    upvotes = models.IntegerField(default=0)
    views = models.IntegerField(default=1)
    room = models.ForeignKey('rooms.Room', related_name='posts', on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.title}'

class Comment(models.Model):
    text = models.CharField(max_length=2000)
    user = models.ForeignKey(User, related_name='comments', on_delete=models.CASCADE)
    post = models.ForeignKey(Post, related_name='comments', on_delete=models.CASCADE)