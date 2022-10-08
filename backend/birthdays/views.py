from rest_framework.viewsets import ModelViewSet
from .serializers import BirthdaySerializer
from .models import Birthday

class BirthdayViewSet(ModelViewSet):
    queryset = Birthday.objects.all()
    serializer_class = BirthdaySerializer
