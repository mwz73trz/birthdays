from rest_framework.viewsets import ModelViewSet
from rest_framework import permissions
from .serializers import BirthdaySerializer, UserSerializer
from .models import Birthday, User

class BirthdayViewSet(ModelViewSet):
    queryset = Birthday.objects.all()
    serializer_class = BirthdaySerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
        return super().perform_create(serializer)

    def get_queryset(self):
        if self.request.user.is_superuser:
            return Birthday.objects.all()
        return Birthday.objects.filter(user=self.request.user)

class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_permissions(self):
        if self.request.method == "POST":
            return (permissions.AllowAny(),)
        return (permissions.IsAdminUser(),)
