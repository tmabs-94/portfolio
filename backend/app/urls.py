from django.urls import path, include
from rest_framework import routers
from .views import *

router = routers.DefaultRouter()
router.register(r'slack', SlackViewSet)
router.register(r'project', ProjectViewSet)
router.register(r'tech', TechViewSet)
router.register(r'progress', ProgressViewSet)
router.register(r'accomplishment', AccomplishmentViewSet)

urlpatterns = [
    path('', include(router.urls))
]