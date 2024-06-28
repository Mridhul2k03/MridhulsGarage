from django.shortcuts import render
from rest_framework.response import Response
from .models import CustomerModel,ServiceModel
from .serializers import CustomerSerializer,ServiceSerializer
from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import action
# Create your views here.

class CustomerViewSet(ModelViewSet):
    queryset = CustomerModel.objects.all()
    serializer_class = CustomerSerializer

    @action(detail=True,methods=['POST'])
    def addService(self,request,*args,**kwargs):
        id=kwargs.get('pk')
        customer=CustomerModel.objects.get(id=id)
        serializer=ServiceSerializer(data=request.data,context={'user':customer})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)
        