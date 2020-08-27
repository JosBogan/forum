# pylint: disable=no-member

from django.shortcuts import render

# Views and responses
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_201_CREATED, HTTP_422_UNPROCESSABLE_ENTITY, HTTP_401_UNAUTHORIZED, HTTP_202_ACCEPTED, HTTP_404_NOT_FOUND, HTTP_204_NO_CONTENT

from rest_framework.permissions import IsAuthenticatedOrReadOnly

# Models
from .models import Post
from rooms.models import Room

# Serializers
from .serializers import PostSerializer, RoomSerializer

# Create your views here.

class PostListView(APIView):

    permission_classes = (IsAuthenticatedOrReadOnly, )

    def post(self, request, pk):
        request.data['room'] = pk
        request.data['user'] = request.user.id
        new_post = PostSerializer(data=request.data)
        if new_post.is_valid():
            new_post.save()
            return Response(new_post.data, status=HTTP_201_CREATED)
        return Response(new_post.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)
            
    def get(self, _request, pk):
        try:
            room = Room.objects.get(pk=pk)
            serilaized_room = RoomSerializer(room)
            return Response(serilaized_room.data['posts'])
        except Room.DoesNotExist:
            return Response({"message": "Room not found"}, HTTP_404_NOT_FOUND)


