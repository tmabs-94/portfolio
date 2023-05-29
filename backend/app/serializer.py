from rest_framework import serializers
from .models import *

class SlackSerializer(serializers.ModelSerializer):
    class Meta:
        model = slack
        fields = ['slack_id', 'title']

class ProjectSerializer(serializers.ModelSerializer):
    slacks = SlackSerializer(many=True, read_only=True)

    class Meta:
        model = Project
        fields = ['project_id', 'title', 'img', 'description', 'slacks', 'code_link', 'project_link']

class TechSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tech
        fields = ['tech_id', 'icon', 'title', 'sub_title', 'description']

class ProgressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Progress
        fields = ['progress_id', 'year', 'journey']

class AccomplishmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Accomplishment
        fields = ['accomplishment_id', 'title', 'quantity']