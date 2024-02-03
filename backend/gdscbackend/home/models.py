from django.db import models
from multiselectfield import MultiSelectField


class member(models.Model):

    class memberTypeChoices(models.TextChoices):
        team = "Team", "Team"
        contributer = "Contributor", "Contributor"

    name = models.CharField(max_length = 15000)
    about = models.TextField()
    position = models.CharField(max_length = 15000)
    memberType = models.CharField(choices = memberTypeChoices.choices, max_length = 100, default = memberTypeChoices.team)
    def __str__(self):
        return self.name
    
class event(models.Model):
    name = models.CharField(max_length = 150000)
    description = models.TextField()
    image = models.ImageField(upload_to="static/events", default="null")
    eventUrl = models.URLField(max_length = 200)