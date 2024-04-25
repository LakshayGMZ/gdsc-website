from django.contrib import admin
from .models import *


# events
class eventImagesInline(admin.TabularInline):
    model = eventImage
    extra = 1

@admin.register(event)
class eventAdmin(admin.ModelAdmin):
    inlines = [eventImagesInline]
    list_display = ('name', 'date')

# profiles
class memberProfilesInline(admin.TabularInline):
    model = memberProfile
    extra = 1

@admin.register(member)
class memberAdmin(admin.ModelAdmin):
    inlines = [memberProfilesInline]
    list_display = ('name', 'memberType')

# blog
    
@admin.register(blog)
class blogAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'date')