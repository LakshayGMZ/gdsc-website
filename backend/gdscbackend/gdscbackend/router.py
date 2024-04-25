from home.viewset import *
from rest_framework import routers


router = routers.DefaultRouter()
router.register('events', eventViewSet, 'events')
router.register('members', memberViewSet, 'members')
router.register('blogs', blogViewSet, 'blogs')