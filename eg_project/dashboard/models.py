# Create your models here.
from django.db import models

# Create your models here.
class user(models.Model):
    name = models.CharField(max_length=30)
    password = models.CharField(max_length=60)
    #id = models.AutoField(primary_key=True)
    