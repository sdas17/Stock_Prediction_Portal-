from django.shortcuts import render
from django.contrib.auth.models import User
from .serializers import Userserlizer
from rest_framework import generics
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = Userserlizer

# Create your views here.
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_lookup(request):
    username = request.GET.get('username')
    print(username,request,'18')

    if not username:
        return Response({
            "error": "username query parameter is required"
        }, status=400)

    try:
        user = User.objects.get(username=username)

        return Response({
            "id": user.id,
            "username": user.username,
            "email": user.email,
        })

    except User.DoesNotExist:
        return Response({
            "error": "User not found"
        }, status=404)