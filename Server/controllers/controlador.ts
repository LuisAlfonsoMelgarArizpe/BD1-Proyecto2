import { Request, Response, response } from "express";
import mysql from "mysql";


export class Controlador {
  public async login(req: Request, res: Response) {
    console.log(req.body);
    if(req.body.user == 'admin' && req.body.pass == 'admin'){
      res.json({'text':'OK'});
    }else{
      res.json({'text':'NO'});
    }
  }

  public async rep1(req:Request,res:Response){
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "1845",
      database: 'bd'
    });
    con.connect(function(err:any) {
      if (err) throw err;
      console.log("Connected!");
      con.query('SELECT P.NOMBRE, R.NOMBRE_REGION , COUNT(PR.ID_PREGUNTA) CANTIDAD FROM PAIS P INNER JOIN REGION R ON P.ID_REGION = R.ID_REGION left JOIN pais_respuesta PR ON PR.ID_PAIS = P.ID GROUP BY P.ID, R.NOMBRE_REGION, P.NOMBRE ORDER BY R.NOMBRE_REGION ASC',function(err,result){
        if(err) throw err;
        console.log("Resultado",result);
        res.json(result); 
      })
    });
  }

  public async rep2(req:Request,res:Response){
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "1845",
      database: 'bd'
    });
    con.connect(function(err:any) {
      if (err) throw err;
      console.log("Connected!");
      con.query('SELECT P.NOMBRE PROF,A.NOMBRE AREA, IF(PA.ES_JEFE=1,\'Jefe\',\'Subordinado\') ROL FROM profesional_area PA INNER JOIN PROFESIONAL P ON P.ID = PA.ID_PROFESIONAL INNER JOIN AREA A ON A.ID = PA.ID_AREA ORDER BY A.NOMBRE, PA.ES_JEFE desc, P.NOMBRE ASC',function(err,result){
        if(err) throw err;
        console.log("Resultado",result);
        res.json(result); 
      })
    });
  }

  public async rep3(req:Request,res:Response){
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "1845",
      database: 'bd'
    });
    con.connect(function(err:any) {
      if (err) throw err;
      console.log("Connected!");
      con.query('SELECT P.NOMBRE PROF, P.SALARIO, A.NOMBRE AREA, X.SALARIO PROMEDIO FROM PROFESIONAL P INNER JOIN profesional_area pa on P.ID = pa.ID_PROFESIONAL INNER JOIN AREA A ON pa.ID_AREA = A.ID INNER JOIN (SELECT PA.ID_AREA AREA, TRUNCATE(AVG(P.SALARIO),2) SALARIO FROM profesional P INNER JOIN profesional_area PA ON PA.ID_PROFESIONAL = P.ID GROUP BY PA.ID_AREA) X ON X.AREA = A.ID WHERE P.SALARIO > X.SALARIO',function(err,result){
        if(err) throw err;
        console.log("Resultado",result);
        res.json(result); 
      })
    });
  }

  public async rep4(req:Request,res:Response){
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "1845",
      database: 'bd'
    });
    con.connect(function(err:any) {
      if (err) throw err;
      console.log("Connected!");
      con.query('SELECT p.NOMBRE, COUNT(r.RESPUESTA) CANTIDAD FROM pais_respuesta pr inner join pais p on pr.ID_PAIS = p.ID left join respuesta r on pr.ID_RESPUESTA = r.ID WHERE R.CORRECTA = 1 GROUP BY P.ID ORDER BY 2 DESC',function(err,result){
        if(err) throw err;
        console.log("Resultado",result);
        res.json(result); 
      })
    });
  }

  public async rep5(req:Request,res:Response){
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "1845",
      database: 'bd'
    });
    con.connect(function(err:any) {
      if (err) throw err;
      console.log("Connected!");
      con.query('SELECT p.NOMBRE, p.AREA, count(f.ID_CARDINAL) Cantidad FROM frontera F INNER JOIN pais p on F.ID_PAIS_1 = p.ID  group by p.id  having count(f.ID_CARDINAL) > 7 order by p.AREA desc',function(err,result){
        if(err) throw err;
        console.log("Resultado",result);
        res.json(result); 
      })
    });
  }

  public async rep6(req:Request,res:Response){
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "1845",
      database: 'bd'
    });
    con.connect(function(err:any) {
      if (err) throw err;
      console.log("Connected!");
      con.query('SELECT P.NOMBRE, P.SALARIO, P.COMISION, (P.SALARIO + P.COMISION) TOTAL FROM profesional P WHERE P.COMISION > (0.25 * P.SALARIO)',function(err,result){
        if(err) throw err;
        console.log("Resultado",result);
        res.json(result); 
      })
    });
  }

  public async rep7(req:Request,res:Response){
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "1845",
      database: 'bd'
    });
    con.connect(function(err:any) {
      if (err) throw err;
      console.log("Connected!");
      con.query('select P.NOMBRE, P.POBLACION from pais P where P.POBLACION > (select SUM(P.POBLACION) from pais P inner join region r on P.ID_REGION = r.ID_REGION WHERE r.NOMBRE_REGION = \'Centro America\') ORDER BY P.POBLACION DESC',function(err,result){
        if(err) throw err;
        console.log("Resultado",result);
        res.json(result); 
      })
    });
  }

  public async rep8(req:Request,res:Response){
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "1845",
      database: 'bd'
    });
    con.connect(function(err:any) {
      if (err) throw err;
      console.log("Connected!");
      con.query('SELECT p.NOMBRE FROM profesional_area PA inner join profesional p on PA.ID_PROFESIONAL = p.ID where pa.ES_JEFE = 1 and pa.ID_AREA != (SELECT pa.ID_AREA FROM invento I INNER JOIN invento_inventor ii on I.ID = ii.ID_INVENTO inner join inventor ir on ii.ID_INVENTOR = ir.ID inner join profesional p on I.ID_PROFESIONAL = p.ID inner join profesional_area pa on p.ID = pa.ID_PROFESIONAL WHERE ir.NOMBRE = \'Pasteur\')',function(err,result){
        if(err) throw err;
        console.log("Resultado",result);
        res.json(result); 
      })
    });
  }

  public async rep9(req:Request,res:Response){
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "1845",
      database: 'bd'
    });
    con.connect(function(err:any) {
      if (err) throw err;
      console.log("Connected!");
      con.query('SELECT I.NOMBRE, extract(year from I.ANO) ANO FROM invento I WHERE I.ANO IN (SELECT I.ano FROM invento I inner join invento_inventor ii on I.ID = ii.ID_INVENTO inner join inventor i2 on ii.ID_INVENTOR = i2.ID where i2.NOMBRE = \'BENZ\')',function(err,result){
        if(err) throw err;
        console.log("Resultado",result);
        res.json(result); 
      })
    });
  }

  public async rep10(req:Request,res:Response){
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "1845",
      database: 'bd'
    });
    con.connect(function(err:any) {
      if (err) throw err;
      console.log("Connected!");
      con.query('SELECT P.NOMBRE, P.POBLACION FROM PAIS P left join frontera f on P.ID = f.ID_PAIS_1 where p.AREA >= (SELECT AREA FROM PAIS WHERE NOMBRE = \'Japon\') GROUP BY P.ID HAVING COUNT(F.ID_CARDINAL) = 0',function(err,result){
        if(err) throw err;
        console.log("Resultado",result);
        res.json(result); 
      })
    });
  }

  public async rep11(req:Request,res:Response){
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "1845",
      database: 'bd'
    });
    con.connect(function(err:any) {
      if (err) throw err;
      console.log("Connected!");
      con.query('SELECT p1.NOMBRE P1, p2.NOMBRE P2, c.CARDINAL FROM frontera INNER JOIN pais p1 on frontera.ID_PAIS_1 = p1.ID inner join pais p2 on frontera.ID_PAIS_2 = p2.id INNER JOIN cardinal c on frontera.ID_CARDINAL = c.ID',function(err,result){
        if(err) throw err;
        console.log("Resultado",result);
        res.json(result); 
      })
    });
  }

  public async rep12(req:Request,res:Response){
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "1845",
      database: 'bd'
    });
    con.connect(function(err:any) {
      if (err) throw err;
      console.log("Connected!");
      con.query('select p.NOMBRE, p.SALARIO, (2*p.COMISION) Doble from profesional p where p.SALARIO > (2*p.COMISION)',function(err,result){
        if(err) throw err;
        console.log("Resultado",result);
        res.json(result); 
      })
    });
  }


  public async getInventos(req:Request,res:Response){
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "1845",
      database: 'bd'
    });
    con.connect(function(err:any) {
      if (err) throw err;
      console.log("Connected!");
      con.query('SELECT I.ID,I.NOMBRE INV_NOMBRE ,I.ANO,P.NOMBRE PAIS_NOMBRE ,PR.NOMBRE PROF_NOMBRE FROM INVENTO I INNER JOIN pais p on I.ID_PAIS = p.ID inner join profesional pr on I.ID_PROFESIONAL = pr.ID',function(err,result){
        if(err) throw err;
        console.log("Resultado Inventos",result);
        res.json(result); 
      })
    });
  }
  
  public async getInventores(req:Request,res:Response){
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "1845",
      database: 'bd'
    });
    con.connect(function(err:any) {
      if (err) throw err;
      console.log("Connected!");
      con.query('SELECT I.ID,I.NOMBRE NOMBRE,P.NOMBRE PAIS FROM INVENTOR I INNER JOIN pais p on I.ID_PAIS = p.ID',function(err,result){
        if(err) throw err;
        console.log("Resultado",result);
        res.json(result); 
      })
    });
  }

  public async getPaises(req:Request,res:Response){
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "1845",
      database: 'bd'
    });
    con.connect(function(err:any) {
      if (err) throw err;
      console.log("Connected!");
      con.query('SELECT P.ID, P.NOMBRE,P.CAPITAL,P.POBLACION,P.AREA, R.NOMBRE_REGION REGION FROM PAIS P INNER JOIN REGION R ON R.ID_REGION = P.ID_REGION',function(err,result){
        if(err) throw err;
        console.log("Resultado",result);
        res.json(result); 
      })
    });
  }

  public async getProfesionales(req:Request,res:Response){
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "1845",
      database: 'bd'
    });
    con.connect(function(err:any) {
      if (err) throw err;
      console.log("Connected!");
      con.query('SELECT * FROM profesional',function(err,result){
        if(err) throw err;
        console.log("Resultado",result);
        res.json(result); 
      })
    });
  }

  public async postInvento(req:Request,res:Response){
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "1845",
      database: 'bd'
    });
    con.connect(function(err:any) {
      if (err) throw err;
      console.log("Connected!");
      con.query("INSERT INTO INVENTO (NOMBRE,ANO,ID_PAIS,ID_PROFESIONAL) VALUES ('" + req.body.NOMBRE + "', STR_TO_DATE('" + req.body.ANO + "','%Y')," + req.body.ID_PAIS + "," + req.body.ID_PROFESIONAL + ')',function(err,result){
        if(err) throw err;
        console.log("Resultado",result);
        res.json(result); 
      })
    });
  }

  public async delInvento(req:Request,res:Response){
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "1845",
      database: 'bd'
    });
    con.connect(function(err:any) {
      if (err) throw err;
      console.log("Connected!");
      con.query("DELETE FROM INVENTO WHERE ID = " + req.body.ID ,function(err,result){
        if(err) throw err;
        console.log("Resultado",result);
        res.json(result); 
      })
    });
  }

  public async postInventor(req:Request,res:Response){
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "1845",
      database: 'bd'
    });
    con.connect(function(err:any) {
      if (err) throw err;
      console.log("Connected!");
      con.query("INSERT INTO INVENTOR (NOMBRE,ID_PAIS) VALUES ('" + req.body.NOMBRE + "'," + req.body.ID_PAIS + ")",function(err,result){
        if(err) throw err;
        console.log("Resultado",result);
        res.json(result); 
      })
    });
  }

  public async postProfesional(req:Request,res:Response){
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "1845",
      database: 'bd'
    });
    con.connect(function(err:any) {
      if (err) throw err;
      console.log("Connected!");
      con.query("INSERT INTO PROFESIONAL (NOMBRE,FECHA_CONTRATO,SALARIO,COMISION) VALUES ('" + req.body.NOMBRE + "',STR_TO_DATE('" + req.body.FECHA_CONTRATO + "','%Y-%m-%d')," + req.body.SALARIO + ", + " + req.body.COMISION + ")",function(err,result){
        if(err) throw err;
        console.log("Resultado",result);
        res.json(result); 
      })
    });
  }

  public async getRegiones(req:Request,res:Response){
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "1845",
      database: 'bd'
    });
    con.connect(function(err:any) {
      if (err) throw err;
      console.log("Connected!");
      con.query("SELECT R.ID_REGION, R.NOMBRE_REGION NOMBRE, R2.NOMBRE_REGION PADRE FROM REGION R INNER JOIN REGION R2 ON R2.ID_REGION = R.REGION_PADRE",function(err,result){
        if(err) throw err;
        console.log("Resultado",result);
        res.json(result); 
      })
    });
  }
 

}
export const controlador = new Controlador();
