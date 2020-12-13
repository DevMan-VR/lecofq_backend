import requests
import calendar
import json
from datetime import datetime
from datetime import timedelta
from datetime import timezone
from datetime import date
from dateutil.relativedelta import relativedelta

#1. traer todos los horarios de la BD
url_get_local = 'http://localhost:8080/horario'
api_get_url = 'http://api.lecofq.informatica.uv.cl/horario'
url_post_local = 'http://localhost:8080/horas'
api_post_url = 'http://api.lecofq.informatica.uv.cl/horas'

url_get = url_get_local
url_post = url_post_local

meses_proyección = 1
horarios_al_mes = 4
cantidad_horas =meses_proyección * horarios_al_mes
response = requests.get(url_get).json()
desde = datetime.now()

#2. para cada horario proyectar 2 meses de hora en ese horario (4 semanas * 2 => 8 semanas +7)
for horario in response['data']:
    print(horario)
    for i in range(cantidad_horas):
        #construct hora obj
        data = {}
        data['idEspecialista'] = horario['idEspecialista']
        data['idCita'] = None
        d = horario['h_init']
        d = datetime.strptime(d,'%Y-%m-%dT%H:%M:%S.%fZ')
        fech = datetime(desde.year, desde.month,desde.day,d.hour, d.minute)
        print(fech)
        data['h_init'] = fech.replace(tzinfo=timezone.utc).timestamp()
        print(data)

        
        #post hora en bd con fecha actual
        r = requests.post(url_post, json=data)
        ##print(r.status_code)
        #update date...
        desde = desde + timedelta(days=7)
        
