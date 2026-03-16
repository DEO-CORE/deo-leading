from django.contrib import admin
from .models import Project, Lead

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'category')
    search_fields = ('title', 'category') 
    list_filter = ('category',)

@admin.register(Lead)
class LeadAdmin(admin.ModelAdmin):
    list_display = ('name', 'telegram', 'created_at')
    readonly_fields = ('created_at',) 
    search_fields = ('name', 'telegram')