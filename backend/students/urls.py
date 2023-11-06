from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import StudentViewSetAPI

app_name = "students"

router = DefaultRouter()

router.register("students", StudentViewSetAPI, basename="students")

urlpatterns = [
    path("", include(router.urls))
]
