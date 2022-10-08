from rest_framework import serializers
from .models import Birthday

class BirthdaySerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
            model = Birthday
            fields = ['id', 'first_name', 'last_name', 'name', 'phone', 'birth_date', 'age']
            extra_kwargs = {
                'first_name': {'write_only': True},
                'last_name': {'write_only': True}
            }

    def get_name(self, obj):
        return f'{obj.first_name} {obj.last_name}' 