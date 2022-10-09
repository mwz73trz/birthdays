from django.db import models
from datetime import datetime
from django.contrib.auth.models import User

class Birthday(models.Model):
    first_name = models.CharField(max_length=25)
    last_name = models.CharField(max_length=25)
    address = models.CharField(max_length=75)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    zip = models.CharField(max_length=5)
    email = models.EmailField(blank=True, null=True)
    phone = models.CharField(max_length=12, null=True, blank=True)
    birth_date = models.DateField()
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='birhtdays', blank=True, null=True)

    @property
    def age(self):
        return int((datetime.now().date() - self.birth_date).days / 365.25)

    def __str__(self):
        return f'{self.first_name} {self.last_name}'
