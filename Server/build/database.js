"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const oracledb_1 = __importDefault(require("oracledb"));
class database {
    constructor() { }
    select(consult) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                let connectionDB;
                yield oracledb_1.default
                    .getConnection({
                    user: "system",
                    password: "oracle",
                    connectString: "localhost:32118/xe"
                })
                    .then((connection) => __awaiter(this, void 0, void 0, function* () {
                    console.log("Conección abierta");
                    yield connection
                        .execute(consult, [], { outFormat: oracledb_1.default.OBJECT })
                        .then(result => {
                        resolve(result.rows);
                    });
                    connection.close().then(() => {
                        console.log("Conección cerrada");
                    });
                }))
                    .catch((err) => {
                    console.error(err.message);
                });
            });
        });
    }
    update(element, sql, options) {
        console.log(element);
        oracledb_1.default
            .getConnection({
            user: "system",
            password: "oracle",
            connectString: "localhost:32118/xe"
        })
            .then((connection) => __awaiter(this, void 0, void 0, function* () {
            console.log("DBON");
            yield connection
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
        }))
            .catch((err) => {
            console.error(err.message);
        });
    }
}
exports.database = database;
