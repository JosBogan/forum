from django.urls import path, include
from .views import RoomListView

urlpatterns = [
    path('', RoomListView.as_view()),
    path('<int:pk>/posts/', include('posts.urls')),
]