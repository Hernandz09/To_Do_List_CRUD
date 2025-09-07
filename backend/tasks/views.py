from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404

from .models import Task
from .serializers import TaskSerializer

@api_view(['GET', 'POST'])
def task_list_create(request):
    if request.method == 'GET':
        qs = Task.objects.order_by('-created_at')
        serializer = TaskSerializer(qs, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        serializer = TaskSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PATCH', 'PUT', 'DELETE'])
def task_detail(request, pk: int):
    task = get_object_or_404(Task, pk=pk)

    if request.method == 'GET':
        return Response(TaskSerializer(task).data)

    if request.method in ['PATCH', 'PUT']:
        # Si no hay datos, alterna 'completed'
        partial = request.method == 'PATCH'
        data = request.data
        if not data:
            data = {'completed': not task.completed}
        serializer = TaskSerializer(task, data=data, partial=partial)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'DELETE':
        task.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
