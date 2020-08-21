from rest_framework import serializers
from .models import Post, Comment
from rooms.models import Room

class PostSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Post
        fields = '__all__'

class CommentSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Comment
        fields = '__all__'

class RoomSerializer(serializers.ModelSerializer):

    posts = PostSerializer(many=True)

    class Meta:
        model = Room
        fields = '__all__'