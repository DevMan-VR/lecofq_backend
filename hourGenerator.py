import requests
from datetime import datetime
import calendar

def add_months(sourcedate, months):
    month = sourcedate.month - 1 + months
    year = sourcedate.year + month // 12
    month = month % 12 + 1
    day = min(sourcedate.day, calendar.monthrange(year,month)[1])
    return datetime.date(year, month, day)

#1. traer todos los horarios de la BD
base_url = 'http://api.lecofq.informatica.uv.cl/horario'
response = requests.get(base_url).json()
desde = datetime.now()
hasta = add_months(desde,2)
meses_proyección = 2
horarios_al_mes = 4
cantidad_horas =meses_proyección * horarios_al_mes

#2. para cada horario proyectar 2 meses de hora en ese horario (4 semanas * 2 => 8 semanas +7)
for horario in response['data']:
    for i in range(cantidad_horas):
        #construct hora obj
        #post hora en bd con fecha actual

        #update date...
        desde = desde + datetime.timedelta(days=7)




