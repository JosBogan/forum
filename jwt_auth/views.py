from django.shortcuts import render

from datetime import datetime, timedelta
import jwt

from django.conf import settings

# Rest Framework imports

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import PermissionDenied
from rest_framework.permissions import IsAuthenticated
from rest_framework.status import HTTP_201_CREATED, HTTP_422_UNPROCESSABLE_ENTITY, HTTP_401_UNAUTHORIZED, HTTP_202_ACCEPTED, HTTP_404_NOT_FOUND, HTTP_204_NO_CONTENT

#  Models

from django.contrib.auth import get_user_model

User = get_user_model()

# Serializers

from .serializers import UserSerializer

# Create your views here.

class RegisterView(APIView):

    def post(self, request):

        serialized_user = UserSerializer(data=request.data)
        if serialized_user.is_valid():
            serialized_user.save()
            return Response({'message': 'Registration Sucessful'})

        return Response(serialized_user.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)



class LoginView(APIView):

    def post(self, request):

        email = request.data.get('email')
        password = request.data.get('password')

        try:
            user = User.objects.get(email=email)

            if not user.check_password(password):
                raise PermissionDenied('Invalid Credentials')

            dt = datetime.now() + timedelta(days=7)

            token = jwt.encode({'sub': user.id, 'exp': int(dt.strftime('%s'))}, settings.SECRET_KEY, algorithm='HS256')

            return Response({'token': token, 'message': f'Welcome Back {user.username}'})

        except User.DoesNotExist:
            raise PermissionDenied({'message': 'Invalid Credentials'})