#coding:utf-8
from django.shortcuts import render
from django.http import HttpResponse,HttpResponseRedirect
from urllib.request import urlopen
from urllib.error import HTTPError
from bs4 import BeautifulSoup
import re
import sys
from opt import tests

# Create your views here.
def index(request):
    return HttpResponse(u'hello??')

def home(request):
    str = u"call"
    return render(request, 'home.html', {'greeting': str})

def add(request):
    a = request.GET.get("a", 0)
    b = request.GET.get("b", 0)
    return HttpResponse(""+str(int(a)+int(b)))

def redirect(request):
    newUrl = 'https:' + request.path
    newUrl = newUrl.replace('redirect',"")
    print(newUrl)
    try:
        conn = urlopen(newUrl)
    except HTTPError as e:
        print(e)
    try:
        bsObj = BeautifulSoup(conn.read(), 'lxml')
        #title = bsObj.head.find('title')#.get_text()
        #print(title)
        tests.restructure(bsObj)
    except AttributeError as e:
        print(e)
    #print(tests.restructure(bsObj))
    return HttpResponse(bsObj)