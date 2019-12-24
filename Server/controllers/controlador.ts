import { Request, Response, response } from "express";
import { database } from "../database";

export class Controlador {
  public async login(req: Request, res: Response) {
    console.log(req.body);
    var c = new database();
    //c.select("SELECT id,registro,nombre,foto FROM USUARIO WHERE registro = '" + req.body.name + "' AND clave = '" + req.body.pass +"' AND ")
    c.select(
      "SELECT * FROM ALFONSO WHERE VAL1 = '" + req.body.val1 + "' AND VAL2 = '" + req.body.val2 + "'")
      .then(result => {
        console.log(result);
        res.json(result);
      })
      .catch(() => {
        res.json({ text: "No existe el alfonso xdxddx" });
      });
  }

  public async alfonsos(req: Request, res: Response) {
    console.log(req.body);
    var c = new database();
    //c.select("SELECT id,registro,nombre,foto FROM USUARIO WHERE registro = '" + req.body.name + "' AND clave = '" + req.body.pass +"' AND ")
    c.select(
      "SELECT * FROM ALFONSO")
      .then(result => {
        res.json(result);
      })
      .catch(() => {
        res.json({ text: "No existe el alfonso xdxddx" });
      });
  }
}
export const controlador = new Controlador();
