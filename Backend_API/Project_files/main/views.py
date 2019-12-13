from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import User
# Create your views here.

class Main(APIView):
    # def get(self, request):
    #     p = User(username = "Hubert", password = "bez")         #dziala
    #     p.save()                                                #dziala
    #     return Response({'message': 'ok'})

    def post(self, request):
        body = int(request.POST.get('name'))
        print(body)
    #     # mana= body
    #     p = User(username = 'chuj', password = "bb")
    #     p.save()
    #    # json_data = JSON.loads()
    #     return Response({'message': "ok"})
