from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from .models import Birthday, User

class BirthdaySerializer(serializers.ModelSerializer):
    class Meta:
            model = Birthday
            fields = ['id', 'first_name', 'last_name', 'address', 'city', 'state', 'zip', 'email', 'phone', 'birth_date', 'age', 'user']

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password']
    
    password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        validated_data["password"] = make_password(validated_data["password"])
        return super().create(validated_data)