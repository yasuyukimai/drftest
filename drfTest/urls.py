from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('app.urls')),
    path('', include('app.urls')),  # Add this line for the root path
    path('api-auth/', include('rest_framework.urls')),
]