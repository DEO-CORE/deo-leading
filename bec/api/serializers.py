from rest_framework import serializers
from .models import Project, Lead

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = [
            "category","title",
            "description","technologies",
            "link"
        ]

class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = [
            "name","telegram",
            "description",
            "created_at"
        ]