from django.db import models

class Profile(models.Model):
    username = models.CharField(max_length=255)
    sex = models.CharField(max_length=10)
    nation = models.CharField(max_length=50)

    def __str__(self):
        return self.username
