# api/urls.py
from django.urls import path
from .views import ProjectListView, LeadCreateView

urlpatterns = [
    path('projects/', ProjectListView.as_view(), name='project-list'),
    path('startproject/', LeadCreateView.as_view(), name='lead-create'), 
]