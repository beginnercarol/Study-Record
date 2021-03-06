"""optDjango URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from opt import views as opt_view
from django.urls import reverse

urlpatterns = [
    url(r'^$', opt_view.home),
    url(r'^admin/', admin.site.urls),
    #url(r'^$', opt_view.index),
    url(r'^redirect/', opt_view.redirect),
    url(r'^add/(\d+)/(\d+)', opt_view.add, name="add"),
]
