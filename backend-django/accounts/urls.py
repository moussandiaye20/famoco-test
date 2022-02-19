from django.urls import path
from .import views





urlpatterns = [
        path('create', views.CreateUser.as_view()),
        path('login', views. LoginView.as_view()),
        path('user', views. UserView.as_view()),
        path('logout', views.LogoutView.as_view())

]