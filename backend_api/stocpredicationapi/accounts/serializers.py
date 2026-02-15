from django.contrib.auth.models import User
from rest_framework import serializers

class Userserlizer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields="__all__"