from django.db import models
from multiselectfield import MultiSelectField

from django.forms import ValidationError

# event

class event(models.Model):
    name = models.CharField(max_length = 150000)
    description = models.TextField()
    eventUrl = models.URLField(max_length = 200)
    eventDateTime = models.DateTimeField(null = True, blank = True)
    def __str__(self):
        return self.name

class eventImage(models.Model):
    image = models.URLField()
    event_id = models.ForeignKey(event,related_name='eventImages', on_delete = models.DO_NOTHING, null = True)
    def __str__(self):
        return ""
# members
class member(models.Model):

    class memberTypeChoices(models.TextChoices):
        team = "Team", "Team"
        contributer = "Contributor", "Contributor"
    name = models.CharField(max_length = 15000)
    about = models.TextField()
    position = models.CharField(max_length = 15000)
    memberType = models.CharField(choices = memberTypeChoices.choices, max_length = 100, default = memberTypeChoices.team)
    imageUrl = models.URLField(default = "", blank = True)
    branch = models.CharField(max_length = 15000, blank=True)
    def __str__(self):
        return self.name

class memberProfile(models.Model):

    class profileChoices(models.TextChoices):
        Github = "Github", "Github"
        Linkedin = "Linkedin", "Linkedin"
        Medium = "Medium", "Medium"
        Twitter = "Twitter", "Twitter"
        Instagram = "Instagram", "Instagram"
    member_id = models.ForeignKey(member,related_name='profiles', on_delete = models.DO_NOTHING, null = True)
    profileType = models.CharField(choices = profileChoices.choices, default = "Profile", max_length = 1500)
    profileUrl = models.URLField(max_length = 200)
    def __str__(self):
        return self.profileType


# blog
class blog(models.Model):
    title = models.CharField(max_length = 15000)
    date = models.DateField(null = True, blank = True)
    description = models.TextField()
    def __str__(self):
        return self.title