from django.contrib import admin

# Register your models here.
from .models import labs,test,labotics
class labsAdmin(admin.ModelAdmin):
    list_display = ('name','l_id','city','location')
class laboticsAdmin(admin.ModelAdmin):
    list_display=('t_name','l_id')
admin.site.register(labs,labsAdmin)
admin.site.register(test)
admin.site.register(labotics,laboticsAdmin)
