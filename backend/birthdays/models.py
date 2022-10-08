from django.db import models
from datetime import datetime

class Birthday(models.Model):
    first_name = models.CharField(max_length=25)
    last_name = models.CharField(max_length=25)
    phone = models.CharField(max_length=12, null=True, blank=True)
    birth_date = models.DateField()

    @property
    def age(self):
        return int((datetime.now().date() - self.birth_date).days / 365.25)

    def __str__(self):
        return f'{self.first_name} {self.last_name}'
