from django.urls import path
from . import views

urlpatterns = [
    path('tasks/', views.task_list_create, name='tasks-list-create'),
    path('tasks/<int:pk>/', views.task_detail, name='tasks-detail'),
]
