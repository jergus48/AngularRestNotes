from django.urls import path
from django.views.generic import TemplateView
from . import views
urlpatterns = [
 
    path('',views.routes,name='routes'),
    path('notes/',views.getNotes,name='notes'),
    path('notes/create/',views.createNote,name='createnote'),
    path('notes/<str:pk>/',views.getNote,name='note'),
    path('notes/<str:pk>/update/',views.updateNote,name='updatenote'),
    path('notes/<str:pk>/delete/',views.deleteNote,name='deletenote'),]
