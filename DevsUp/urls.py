from django.contrib import admin
from django.urls import include,path

from sitioWeb.views import baseView, login_view ,registroView
#configuracion la urls para que vaya hacia la direccion de urls de nuestra app creada
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('sitioWeb.urls')),
]