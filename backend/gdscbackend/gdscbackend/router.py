from home.viewset import *
from rest_framework import routers


router = routers.DefaultRouter()
router.register('user', userViewSet, 'user')
router.register('events', eventViewSet, 'events')
router.register('members', memberViewSet, 'members')