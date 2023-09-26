from django.shortcuts import render,HttpResponse
from home.models import *


def index(request):
    return render(request,'index.html')

def about(request):
    return render(request,'about.html')

def search(request):
    return render(request,'search.html')

def signup(request):
    return render(request,'signup.html')

def aftersignup(request):
    return render(request,'aftersignup.html')

def login(request):
    return render(request,'login.html')
# Create your views here.
def bmi(request):
    return render(request,'bmi.html')

def labotics1(request):
    context = {}
    all_labs = labs.objects.all()
    all_test = test.objects.all()
    labbi = labotics.objects.all()
    city = request.GET.get('city', '')
    tests = request.GET.get('tests', '')
    context = {
        'all_lab': all_labs,
        'all_test': all_test,
        'labbi': labbi,
        'city': city,
        'tests': tests,
    }
    return render(request, 'labotics.html', context)
