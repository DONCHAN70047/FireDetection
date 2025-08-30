from django.urls import path
from backend_router import views



urlpatterns = [
    path('detect/', views.detect_view, name="predict_disease_from_image"),
    
]
