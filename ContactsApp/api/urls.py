from django.urls import path
from . import views

#add rejex
urlpatterns =  [
    #path('', views.apiOverview, name= "api-overview"),
    path('contact_list/', views.ContactList, name= "contact_list"),
    path('contact_detail/<int:idContact>/', views.ContactDetail, name= "contact_detail"),
    path('contact_create/', views.ContactCreate, name= "contact_create"),
    path('contact_update/<int:idContact>/', views.ContactUpdate, name= "contact_update"),
    path('contact_delete/<int:idContact>/', views.ContactDelete, name= "contact_delete"),
]