from django.db import models

# Create your models here.

class Contact(models.Model):
    firstName = models.CharField(max_length=200)
    lastName = models.CharField(max_length=200)
    organization = models.CharField(max_length=200)

    #Dictionary of phone_type and phone
    phone = models.CharField(max_length=200, default='')

    #Dictionary of email_type and email
    email = models.CharField(max_length=200, default='')

    def __str__(self) -> str:
        return super().__str__()

    class Meta:
        ordering = ('firstName',)