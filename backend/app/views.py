from django.shortcuts import render
from rest_framework import viewsets
from .models import *
from .serializer import *


# Create your views here.

class SlackViewSet(viewsets.ModelViewSet):
    queryset = slack.objects
    serializer_class = SlackSerializer

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects
    serializer_class = ProjectSerializer

class TechViewSet(viewsets.ModelViewSet):
    queryset = Tech.objects
    serializer_class = TechSerializer

class ProgressViewSet(viewsets.ModelViewSet):
    queryset = Progress.objects
    serializer_class = ProgressSerializer

class AccomplishmentViewSet(viewsets.ModelViewSet):
    queryset = Accomplishment.objects
    serializer_class = AccomplishmentSerializer
