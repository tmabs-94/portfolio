from django.db import models
from django.core.exceptions import ValidationError
from django.core.validators import MinValueValidator, MaxValueValidator

# Create your models here.
# Slider Image Validation
def validate_image_project(image):
    max_height = 640
    max_width = 333
    # print(image.__dict__['_file'].__dict__['image'])
    # print(image.width)
    height = image.height
    width = image.width
    if width < max_width or height < max_height:
        raise ValidationError("Allow Image Dimensions : 640x333")

class slack(models.Model):
    slack_id = models.BigAutoField(primary_key=True)
    title = models.CharField(max_length=100)

    def __str__(self):
        return self.title

class Project(models.Model):
    project_id = models.BigAutoField(primary_key=True)
    img = models.ImageField(upload_to='projects')
    title = models.CharField(max_length=200)
    description = models.TextField()
    slacks = models.ManyToManyField(slack)
    code_link = models.URLField(default='https://github.com')
    project_link = models.URLField(default="#")

    def __str__(self):
        return self.title

class Tech(models.Model):
    tech_id = models.BigAutoField(primary_key=True)
    icon = models.ImageField(upload_to='tech_icons', blank=True)
    title = models.CharField(max_length=100)
    sub_title = models.CharField(max_length=200)
    description = models.TextField()

    def __str__(self):
        return self.title

class Progress(models.Model):
    progress_id = models.BigAutoField(primary_key=True)
    year = models.PositiveIntegerField(validators=[MinValueValidator(2012), MaxValueValidator(2050)])
    journey = models.TextField()

    def __str__(self):
        return self.year

class Accomplishment(models.Model):
    accomplishment_id = models.BigAutoField(primary_key=True)
    quantity = models.PositiveIntegerField()
    title = models.CharField(max_length=100)

    def __str__(self):
        return self.title