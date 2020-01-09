/* 1. Desplegar los países de cada continente y el número de preguntas que han contestado
de cualquier encuesta. Si hay países que no han contestado ninguna encuesta, igual
debe aparecer su nombre en la lista */
SELECT P.NOMBRE, R.NOMBRE_REGION , COUNT(PR.ID_PREGUNTA) CANTIDAD FROM PAIS P INNER JOIN REGION R ON P.ID_REGION = R.ID_REGION left JOIN pais_respuesta PR ON PR.ID_PAIS = P.ID GROUP BY P.ID, R.NOMBRE_REGION, P.NOMBRE ORDER BY R.NOMBRE_REGION ASC;

/*2. Desplegar el nombre de cada jefe seguido de todos sus subalternos, para todos los
profesionales ordenados por el jefe alfabéticamente.*/
SELECT P.NOMBRE PROF,A.NOMBRE AREA, IF(PA.ES_JEFE=1,'Jefe','Subordinado') ROL FROM profesional_area PA INNER JOIN PROFESIONAL P ON P.ID = PA.ID_PROFESIONAL INNER JOIN AREA A ON A.ID = PA.ID_AREA ORDER BY A.NOMBRE, PA.ES_JEFE desc, P.NOMBRE ASC;

/*3. Desplegar todos los profesionales, y su salario cuyo salario es mayor al promedio del
salario de los profesionales en su misma área*/

SELECT P.NOMBRE PROF, P.SALARIO, A.NOMBRE AREA, X.SALARIO PROMEDIO FROM PROFESIONAL P INNER JOIN profesional_area pa on P.ID = pa.ID_PROFESIONAL INNER JOIN AREA A ON pa.ID_AREA = A.ID INNER JOIN (SELECT PA.ID_AREA AREA, TRUNCATE(AVG(P.SALARIO),2) SALARIO FROM profesional P INNER JOIN profesional_area PA ON PA.ID_PROFESIONAL = P.ID GROUP BY PA.ID_AREA) X ON X.AREA = A.ID WHERE P.SALARIO > X.SALARIO;

/*4. Desplegar los nombres de los países que han contestado encuestas, ordenados del
país que más aciertos ha tenido hasta el que menos aciertos ha tenido*/

SELECT p.NOMBRE, COUNT(r.RESPUESTA) CANTIDAD FROM pais_respuesta pr inner join pais p on pr.ID_PAIS = p.ID left join respuesta r on pr.ID_RESPUESTA = r.ID WHERE R.CORRECTA = 1 GROUP BY P.ID ORDER BY 2 DESC;

/*5. Desplegar el nombre del país y el área de todos los países que tienen más de siete
fronteras ordenarlos por el de mayor área*/




SELECT p.NOMBRE, p.AREA, count(f.ID_CARDINAL) Cantidad FROM frontera F INNER JOIN pais p on F.ID_PAIS_1 = p.ID  group by p.id  having count(f.ID_CARDINAL) > 7 order by p.AREA desc;

/*6. Desplegar el nombre del profesional, su salario, su comisión y el total de salario (sueldo
más comisión) de todos los profesionales con comisión mayor que el 25% de su
salario.*/

SELECT P.NOMBRE, P.SALARIO, P.COMISION, (P.SALARIO + P.COMISION) TOTAL FROM profesional P WHERE P.COMISION > (0.25 * P.SALARIO);

/* 7. Desplegar los países cuya población sea mayor a la población de los países
centroamericanos juntos. */

select P.NOMBRE, P.POBLACION from pais P where P.POBLACION > (select SUM(P.POBLACION) from pais P inner join region r on P.ID_REGION = r.ID_REGION WHERE r.NOMBRE_REGION = 'Centro America') ORDER BY P.POBLACION DESC;

/*8. Desplegar todos los jefes de cada profesional que no estén en el mismo departamento
que el del profesional que atiende al inventor Pasteur.*/
SELECT p.NOMBRE FROM profesional_area PA inner join profesional p on PA.ID_PROFESIONAL = p.ID where pa.ES_JEFE = 1 and pa.ID_AREA != (SELECT pa.ID_AREA FROM invento I INNER JOIN invento_inventor ii on I.ID = ii.ID_INVENTO inner join inventor ir on ii.ID_INVENTOR = ir.ID inner join profesional p on I.ID_PROFESIONAL = p.ID inner join profesional_area pa on p.ID = pa.ID_PROFESIONAL WHERE ir.NOMBRE = 'Pasteur');

/*9. Desplegar el nombre de todos los inventos inventados el mismo año que BENZ inventó algún invento*/
SELECT I.NOMBRE, extract(year from I.ANO) año FROM invento I WHERE I.ANO IN (SELECT I.ano FROM invento I inner join invento_inventor ii on I.ID = ii.ID_INVENTO inner join inventor i2 on ii.ID_INVENTOR = i2.ID where i2.NOMBRE = 'BENZ');

/*10. Desplegar los nombres y el número de habitantes de todas las islas que tiene un área mayor o igual al área de Japón.*/

SELECT P.NOMBRE, P.POBLACION FROM PAIS P left join frontera f on P.ID = f.ID_PAIS_1 where p.AREA >= (SELECT AREA FROM PAIS WHERE NOMBRE = 'Japon') GROUP BY P.ID HAVING COUNT(F.ID_CARDINAL) = 0;

/*11. Desplegar todos los países con el nombre de cada país con el cual tiene una frontera*/
SELECT p1.NOMBRE P1, p2.NOMBRE P2, c.CARDINAL FROM frontera INNER JOIN pais p 1 on frontera.ID_PAIS_1 = p1.ID inner join pais p2 on frontera.ID_PAIS_2 = p2.id INNER JOIN cardinal c on frontera.ID_CARDINAL = c.ID;

SELECT p1.NOMBRE, p2.NOMBRE, c.CARDINAL FROM frontera INNER JOIN pais p1 on frontera.ID_PAIS_1 = p1.ID inner join pais p2 on frontera.ID_PAIS_2 = p2.id INNER JOIN cardinal c on frontera.ID_CARDINAL = c.ID GROUP BY P1.ID HAVING COUNT(ID_CARDINAL) = 1;

/*12. Desplegar el nombre del profesional su salario y su comisiómdn de los empleados cuyo salario es mayor que el doble de su comisión  */

select p.NOMBRE, p.SALARIO, (2*p.COMISION) Doble from profesional p where p.SALARIO > (2*p.COMISION);



--

SELECT I.ID,I.NOMBRE NOMBRE,P.NOMBRE PAIS FROM INVENTOR I INNER JOIN pais p on I.ID_PAIS = p.ID;
SELECT R.ID_REGION, R.NOMBRE_REGION NOMBRE, R2.NOMBRE_REGION PADRE FROM REGION R INNER JOIN REGION R2 ON R2.ID_REGION = R.REGION_PADRE;

SELECT I.ID,I.NOMBRE INV_NOMBRE ,I.ANO,P.NOMBRE PAIS_NOMBRE ,PR.NOMBRE PROF_NOMBRE FROM INVENTO I INNER JOIN pais p on I.ID_PAIS = p.ID inner join profesional pr on I.ID_PROFESIONAL = pr.ID;

SELECT I.ID,I.NOMBRE,P.NOMBRE FROM INVENTOR I INNER JOIN pais p on I.ID_PAIS = p.ID;

SELECT COUNT(*) FROM INVENTO;
SELECT COUNT(*) FROM inventor;
SELECT COUNT(*) FROM AREA;
SELECT COUNT(*) FROM PAIS;
SELECT COUNT(*) FROM REGION;
SELECT COUNT(*) FROM FRONTERA;
SELECT COUNT(*) FROM ENCUESTA;
SELECT COUNT(*) FROM PREGUNTA;
SELECT COUNT(*) FROM RESPUESTA;
SELECT COUNT(*) FROM pais_respuesta;