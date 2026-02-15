from django.shortcuts import render
from django.contrib.auth.models import User
from .serializers import Userserlizer
from rest_framework import generics

class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = Userserlizer

# Create your views here.
