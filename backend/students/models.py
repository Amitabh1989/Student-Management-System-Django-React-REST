from django.db import models

def generate_unique_registration_number():
    last_registered = Student.objects.order_by('-registration_no').first()
    if last_registered is None:
        return 1
    return last_registered.registration_no + 1

# Create your models here.
class Student(models.Model):
    id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    # registration_no = models.CharField(max_length=100)
    registration_no = models.PositiveIntegerField(default=generate_unique_registration_number, unique=True)
    email = models.EmailField(max_length=150)
    course = models.CharField(max_length=300)


    def __str__(self) -> str:
        return f"Record for {self.first_name} created"