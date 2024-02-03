from .models import *
from rest_framework import serializers
# from django.forms.models import 


# event
class eventImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = eventImage
        fields = ["image"]

class eventSerializer(serializers.ModelSerializer):
    eventImages = eventImageSerializer(many=True, read_only=True)
    class Meta:
        model = event
        fields = "__all__"
    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['eventImages'] = [item['image'] for item in representation['eventImages']]
        return representation

# member
class memberProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = memberProfile
        fields = ["profileType", "profileUrl"]

class memberSerializer(serializers.ModelSerializer):
    profiles = memberProfileSerializer(many=True, read_only=True)

    class Meta:
        model = member
        fields = "__all__"

# blog
        
class blogSerializer(serializers.ModelSerializer):
    class Meta:
        model = blog
        fields = "__all__"