from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(slack)
admin.site.register(Project)
admin.site.register(Tech)
admin.site.register(Progress)
admin.site.register(Accomplishment)