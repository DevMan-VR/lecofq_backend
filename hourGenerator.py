import requests
import calendar
import json
from datetime import datetime
from datetime import timedelta
from datetime import timezone
from datetime import date
from dateutil.relativedelta import relativedelta

#0. Variables
url_get_local = 'http://localhost:8080/horario'
url_post_local = 'http://localhost:8080/horas'

api_get_url = 'http://api.lecofq.informatica.uv.cl/horario'
api_post_url = 'http://api.lecofq.informatica.uv.cl/horas'

url_get = api_get_url
url_post = api_post_url

meses_proyección = 1
horarios_al_mes = 4

#1. traer todos los horarios de la BD
cantidad_horas =meses_proyección * horarios_al_mes
response = requests.get(url_get).json()
desde = datetime.now()
print(desde)

#2. para cada horario proyectar 2 meses de hora en ese horario (4 semanas * 2 => 8 semanas +7)
for horario in response['data']:
    print(horario)
    for i in range(cantidad_horas):
        #3. construir objeto hora en json
        data = {}
        data['idEspecialista'] = horario['idEspecialista']
        data['idCita'] = None
        d = horario['h_init']
        d = datetime.strptime(d,'%Y-%m-%dT%H:%M:%S.%fZ')
        data=['diaSemana'] = horario['diaSemana']

        fech = datetime(desde.year, desde.month,desde.day,d.hour, d.minute)
        print(fech)
        data['h_init'] = fech.replace(tzinfo=timezone.utc).timestamp()
        print(data)
        
        #4. hacer post del objeto hora en el backend con fecha actual (+7)
        r = requests.post(url_post, json=data)

        #5. actualizar desde para la proxima hora a ingresar
        desde = desde + timedelta(days=7)
        
