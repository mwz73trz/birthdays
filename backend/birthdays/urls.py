from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BirthdayViewSet

router = DefaultRouter()
router.register('birthdays', BirthdayViewSet, basename='birthday')

urlpatterns = [
    path('', include(router.urls)),
]