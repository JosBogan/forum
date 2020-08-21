# pylint: disable=no-member

from django.shortcuts import render

# Importing views
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_201_CREATED, HTTP_422_UNPROCESSABLE_ENTITY, HTTP_401_UNAUTHORIZED, HTTP_202_ACCEPTED, HTTP_404_NOT_FOUND, HTTP_204_NO_CONTENT

# Importing models
from .models import Room

# Importing serializers
from .serializers import RoomSerializer

# Create your views here.

class RoomListView(APIView):

    def get(self, _request):
        rooms = Room.objects.all()
        serialized_rooms = RoomSerializer(rooms, many=True)
        return Response(serialized_rooms.data)

    def post(self, request):
        new_room = RoomSerializer(data=request.data)
        if new_room.is_valid:
            new_room.save()
            return Response(new_room.data, status=HTTP_201_CREATED)
        else:
            return Response(new_room.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)
            