from django.db import models

class Task(models.Model):
    title = models.CharField(max_length=200, help_text="Escribe el título de la tarea")
    completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.title} ({'✔' if self.completed else '✗'})"
