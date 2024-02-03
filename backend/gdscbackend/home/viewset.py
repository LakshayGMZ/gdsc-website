from . import models
from home.serializers import memberSerializer, eventSerializer, blogSerializer
from rest_framework import viewsets


class memberViewSet(viewsets.ModelViewSet):
    queryset = models.member.objects.all()
    serializer_class = memberSerializer

class eventViewSet(viewsets.ModelViewSet):
    queryset = models.event.objects.all()
    serializer_class = eventSerializer

class blogViewSet(viewsets.ModelViewSet):
    queryset = models.blog.objects.all()
    serializer_class = blogSerializer