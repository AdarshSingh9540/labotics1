from django.contrib import admin
from django.urls import path
from home import views

urlpatterns = [
    path('',views.index,name="home"),
    path('about/',views.about,name="about"),
    path('search/',views.search,name="search"),
    path('signup/',views.signup,name="signup"),
    path('index.html/',views.index,name="index"),
    path('login/',views.login,name="login"),
    path('bmi/',views.bmi,name="bmi"),
    path('aftersignup.html/',views.aftersignup,name="aftersignup"),
    path('labotics/',views.labotics1,name="labotics"),

]

