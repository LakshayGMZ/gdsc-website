from django.contrib import admin
from .models import *


# events
class eventImagesInline(admin.TabularInline):
    model = eventImages
    extra = 1

@admin.register(event)
class eventAdmin(admin.ModelAdmin):
    inlines = [eventImagesInline]

# profiles
class memberProfilesInline(admin.TabularInline):
    model = memberProfile
    extra = 1

@admin.register(member)
class memberAdmin(admin.ModelAdmin):
    inlines = [memberProfilesInline]

admin.site.register(blog)