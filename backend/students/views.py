from django.shortcuts import render
from rest_framework import viewsets
from .models import Student
from .serializers import StudentSerializer
from rest_framework.response import Response
from rest_framework import status
from .forms import StudentForm
from django.views.generic import CreateView, DeleteView, DetailView

# Create your views here.


class StudentViewSetAPI(viewsets.ViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer


    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def create(self, request, *args, **kwargs):
        data = request.data
        serializer = self.serializer_class(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"msg": "Student has been created"}, status=status.HTTP_201_CREATED)
    
    def list(self, request, *args, **kwargs):
        model = self.queryset.all()
        serializer = self.serializer_class(model, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def retrieve(self, request, pk=None, *args, **kwargs):
    # def retrieve(self, request, *args, **kwargs):
        instance = self.queryset.filter(pk=pk).first()
        if instance is not None:
            serializer = self.serializer_class(instance)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)
    
    def partial_update(self, request, pk=None, *args, **kwargs):
        instance = self.queryset.filter(pk=pk).first()
        data = request.data
        serializer = self.serializer_class(instance, data=data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def delete(self, request, pk=None, *args, **kwargs):
        instance = self.queryset.filter(pk=pk).first()
        instance.delete()
        return Response({"msg": "Student record deleted"},status=status.HTTP_204_NO_CONTENT)


class CreateStudentForm(CreateView):
    model = Student
    form_class = StudentForm
    