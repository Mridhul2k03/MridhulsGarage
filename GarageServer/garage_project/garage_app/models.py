from django.db import models
from django.db.models import Sum
# Create your models here.


class CustomerModel(models.Model):
    name=models.CharField(max_length=100)
    phone=models.IntegerField()
    vehcle_no=models.CharField(max_length=100)
    image=models.ImageField(upload_to='image')
    date=models.DateField(auto_now_add=True)
    
    def __str__(self):
        return self.name
    
    @property
    def Services(self):
        return ServiceModel.objects.filter(user=self)
    
    def tottal_amount(self):
        return self.Services.values("amount").aggregate(tottal=Sum('amount'))['tottal']
    
class ServiceModel(models.Model):
    title=models.CharField(max_length=100)
    content=models.CharField(max_length=100)
    amount=models.IntegerField()
    user=models.ForeignKey(CustomerModel,on_delete=models.CASCADE)
    
    def __str__(self):
        return self.title