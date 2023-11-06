from django.contrib import admin
from .models import Student
# Register your models here.

models_list = [Student]

class StudentAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Student._meta.fields]

admin.site.register(Student, StudentAdmin)

