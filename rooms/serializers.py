from rest_framework import serializers
from .models import Room

class RoomSerializer(serializers.Serializer):
    
    class Meta:
        model = Room
        fields = '__all__'