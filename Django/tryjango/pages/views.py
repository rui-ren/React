from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.

def home_view(request, *arg, **kwargs):
    # return HttpResponse("<h1> Hell World </h1>")  # string of HTML code here
    return render(request, "home.html", {})

def contact_view(*arg, **kwargs):
    return HttpResponse("<h1> Contact Page</h1>")

def about_view(*args, **kwargs):
    return HttpResponse("<h1>about_view</h1>")

def social_view(*args, **kwargs):
    return HttpResponse("<h1>social_view</h1>")

