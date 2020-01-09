echo "-----PROYECTO 2 BD1 ALFONSO MELGAR 201602820-----"
echo "-----LIMPIAR BASE DE DATOS-----"
mysql -u root -p1845  bd < ./SQL/LIMPIAR.sql
echo "-----CREACION DE TABLAS TEMPORALES-----"
mysql -u root -p1845  bd < ./SQL/CREACION_TEMP.sql
echo "-----CARGA DE DATOS A TEMPORALES-----"
mysql -u root -p1845  bd < ./SQL/CARGA_TEMP.sql
echo "-----CREACION TABLAS FINALES-----"
mysql -u root -p1845  bd < ./SQL/CREACION_FINALES.sql
echo "-----INSERTAR DATOS FINALES-----"
mysql -u root -p1845  bd < ./SQL/INSERTAR_DATOS.sql
pause	