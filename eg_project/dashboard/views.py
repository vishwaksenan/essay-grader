from django.shortcuts import render
#from django.db import models
from django.http import HttpResponse
#from django.http import JsonResponse
from dashboard.models import user
import language_check
def home(request):
    """
    This view renders the home page
    """
    return render(request,"index_dashboard.html",context={})

def dashboard(request):
    # if(request.method == 'POST'):
    #     username = request.POST['name']
    #     # password = request.POST['password']
    #     user.name = username
    #     # user.password = password
    #     context = {}
    #     context['green'] = 1
    #     context['blue'] = 2
    #     context['red'] = 3
    # return JsonResponse(context)
    return render(request,"evaluate.html",context={})

def evaluate(request):
    if(request.method == 'POST'):
        text = request.POST.get('evaluate_td')
        tool = language_check.LanguageTool('en-US')
        matches = tool.check(text)
        changes = len(matches)
        context={}
        context['value']= changes
        print("123")
        print("value: ", changes)
        return HttpResponse(context)




