from .serializers import ContactSerializer
from rest_framework import serializers
from .models import Contact
from django.http.response import JsonResponse
from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
# Create your views here.

@api_view(['GET'])
def ContactList(request):
    contacts = Contact.objects.all()
    serializer = ContactSerializer(contacts, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def ContactDetail(request, idContact):
    contact = Contact.objects.get(id= idContact)
    serializer = ContactSerializer(contact, many=False)
    return Response(serializer.data)

#Add error handler
@api_view(['POST'])
def ContactCreate(request):
    serializer = ContactSerializer(data= request.data)

    if serializer.is_valid():
        serializer.save()
    
    return Response(serializer.data)

@api_view(['POST'])
def ContactUpdate(request, idContact):
    contact = Contact.objects.get(id= idContact)
    serializer = ContactSerializer(instance=contact, data= request.data)

    if serializer.is_valid():
        serializer.save()
    
    return Response(serializer.data)

@api_view(['DELETE'])
def ContactDelete(request, idContact):
    contact = Contact.objects.get(id= idContact)
    contact.delete()
    
    return Response("Item deleted")