from rest_framework import serializers
from .models import CustomerModel,ServiceModel


class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model=CustomerModel
        fields="__all__"
    
class ServiceSerializer(serializers.ModelSerializer):
    id=serializers.IntegerField(read_only=True)
    user=serializers.CharField(read_only=True)
    class Meta:
        model=ServiceModel
        fields="__all__"
        

    def create(self,validated_data):  
        user=self.context.get('user')  
        return ServiceModel.objects.create( user=user ,**validated_data)

    
    
class CustomerSerializer(serializers.ModelSerializer):
    id=serializers.IntegerField(read_only=True)
    date=serializers.DateField(read_only=True)
    Services=ServiceSerializer(many=True,read_only=True)
    tottal_amount=serializers.IntegerField(read_only=True)
    class Meta:
        model=CustomerModel
        fields="__all__"