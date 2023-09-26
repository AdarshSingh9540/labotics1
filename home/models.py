from django.db import models
import json
# Create your models here.
class labs(models.Model):
    name = models.CharField(max_length=100,default="")
    l_id = models.SmallIntegerField(primary_key=True)
    city = models.CharField(max_length=50)
    location = models.CharField(max_length=150,default="NULL")
    popu = models.PositiveSmallIntegerField(default=0)
    certi = models.CharField(max_length=50,default="NULL")
    est = models.PositiveSmallIntegerField(default=2020)
    latest_eq = models.PositiveSmallIntegerField(default=2020)
    def __str__(self):
        return self.name

class test(models.Model):
    name = models.CharField(max_length=100)
    short_name = models.CharField(max_length=15)
    desc = models.CharField(max_length=500,default="NULL")
    linked_test = models.TextField() 
    requirements = models.TextField()
    min_age = models.SmallIntegerField(default=0)
    purpose = models.CharField(max_length=150)
    home_testing = models.BooleanField(default=False)

    def __str__(self):
        return self.name
    def linked(self,linked_test):
        self.linked_test = json.dumps(linked_test)
    def get_linked(self):
        return json.loads(self.linked_test)

class labotics(models.Model):
    t_name = models.CharField(max_length=15)
    l_id = models.SmallIntegerField()
    price = models.SmallIntegerField()
    def __str__(self):
        return self.t_name
