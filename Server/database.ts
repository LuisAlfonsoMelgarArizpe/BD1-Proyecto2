import oracledb from "oracledb";
export class database {
  constructor() {}

  public select(consult: string): Promise<Object> {
    return new Promise(async function(resolve, reject) {
      let connectionDB;
      await oracledb
        .getConnection({
          user: "system",
          password: "oracle",
          connectString:"localhost:32118/xe"
        })
        .then(async (connection: oracledb.IConnection) => {
          console.log("Conección abierta");
          await connection
            .execute(consult, [], { outFormat: oracledb.OBJECT })
            .then(result => { 
              resolve(result.rows);
            });
          connection.close().then(() => {
            console.log("Conección cerrada");
          });
        })
        .catch((err: any) => {
          console.error(err.message);
        });
    });
  }

  public update(element: Object, sql: string, options: Object) {
    console.log(element);
    oracledb
      .getConnection({
        user: "system",
        password: "oracle",
        connectString: "localhost:32118/xe"
      })
      .then(async (connection: oracledb.IConnection) => {
        console.log("DBON");
        await connection
          .execute(sql, element, options)
          .then(result => {
            console.log("Rows: \n", result.rowsAffected);
          })
          .catch(err => {
            console.error("Promise rejected - ", err);
          });
        connection
          .close()
          .then(() => {
            console.log("DBOFF");
          })
          .catch(err => {
            console.error(err.message);
          });
      })
      .catch((err: any) => {
        console.error(err.message);
      });
  }
}
