from django.contrib.auth.models import User
from .models import *
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"

class eventSerializer(serializers.ModelSerializer):
    class Meta:
        model = event
        fields = "__all__"

class memberSerializer(serializers.ModelSerializer):
    class Meta:
        model = member
        fields = "__all__"