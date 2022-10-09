from rest_framework import serializers
from .models import Birthday

class BirthdaySerializer(serializers.ModelSerializer):
    class Meta:
            model = Birthday
            fields = ['id', 'first_name', 'last_name', 'address', 'city', 'state', 'zip', 'email', 'phone', 'birth_date', 'age']