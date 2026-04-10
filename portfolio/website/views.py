from django.shortcuts import redirect, render

# Create your views here.
def display_home(request):
    return render(request, 'home.html')


