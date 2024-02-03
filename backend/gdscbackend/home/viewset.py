from django.contrib.auth.models import User
from . import models
from home.serializers import UserSerializer, memberSerializer, eventSerializer, blogSerializer
from rest_framework import viewsets
class userViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class memberViewSet(viewsets.ModelViewSet):
    queryset = models.member.objects.all()
    serializer_class = memberSerializer

class eventViewSet(viewsets.ModelViewSet):
    queryset = models.event.objects.all()
    serializer_class = eventSerializer

class blogViewSet(viewsets.ModelViewSet):
    queryset = models.blog.objects.all()
    serializer_class = blogSerializer