CREATE TABLE REGION(
    ID_REGION int  AUTO_INCREMENT PRIMARY KEY,
    NOMBRE_REGION VARCHAR(100) NOT NULL,
    REGION_PADRE int,
    FOREIGN KEY (REGION_PADRE) REFERENCES REGION(ID_REGION) ON DELETE CASCADE
);

CREATE TABLE PAIS(
    ID INT AUTO_INCREMENT PRIMARY KEY,
    NOMBRE VARCHAR(100) NOT NULL,
    CAPITAL VARCHAR(100) NOT NULL,
    POBLACION INT NOT NULL,
    AREA INT NOT NULL,
    ID_REGION INT NOT NULL,
    FOREIGN KEY (ID_REGION) REFERENCES REGION(ID_REGION) ON DELETE CASCADE
);

CREATE TABLE CARDINAL(
    ID INT AUTO_INCREMENT PRIMARY KEY ,
    CARDINAL VARCHAR(25) NOT NULL
);

CREATE TABLE FRONTERA(
    ID_PAIS_1 INT NOT NULL,
    ID_PAIS_2 INT NOT NULL,
    ID_CARDINAL INT NOT NULL,
    FOREIGN KEY (ID_PAIS_1) REFERENCES PAIS(ID) ON DELETE CASCADE,
    FOREIGN KEY (ID_PAIS_2) REFERENCES PAIS(ID) ON DELETE CASCADE,
    FOREIGN KEY (ID_CARDINAL) REFERENCES CARDINAL(ID) ON DELETE CASCADE,
    PRIMARY KEY (ID_PAIS_1, ID_PAIS_2, ID_CARDINAL)
);

CREATE TABLE ENCUESTA(
    ID INT AUTO_INCREMENT PRIMARY KEY ,
    NOMBRE VARCHAR(100) NOT NULL
);

CREATE TABLE PREGUNTA(
    ID INT AUTO_INCREMENT PRIMARY KEY ,
    PREGUNTA VARCHAR(1000) NOT NULL ,
    ID_ENCUESTA INT NOT NULL,
    FOREIGN KEY (ID_ENCUESTA) REFERENCES ENCUESTA(ID) ON DELETE CASCADE
);

CREATE TABLE RESPUESTA(
    ID INT AUTO_INCREMENT PRIMARY KEY ,
    RESPUESTA VARCHAR(200) NOT NULL,
    ID_PREGUNTA INT NOT NULL,
    CORRECTA INT NOT NULL default 0,
    FOREIGN KEY (ID_PREGUNTA) REFERENCES PREGUNTA(ID) ON DELETE CASCADE
);

CREATE TABLE PAIS_RESPUESTA(
    ID_PAIS INT NOT NULL,
    ID_PREGUNTA INT NOT NULL,
    ID_RESPUESTA INT NOT NULL,
    FOREIGN KEY (ID_PAIS) REFERENCES PAIS(ID) ON DELETE CASCADE,
    FOREIGN KEY (ID_PREGUNTA) REFERENCES PREGUNTA(ID) ON DELETE CASCADE,
    FOREIGN KEY (ID_RESPUESTA) REFERENCES RESPUESTA(ID) ON DELETE CASCADE,
    PRIMARY KEY (ID_PAIS, ID_PREGUNTA ,ID_RESPUESTA)
);

CREATE TABLE PROFESIONAL(
    ID INT AUTO_INCREMENT PRIMARY KEY ,
    NOMBRE VARCHAR(100) NOT NULL,
    FECHA_CONTRATO DATE NOT NULL,
    SALARIO DOUBLE NOT NULL,
    COMISION DOUBLE NOT NULL
);

CREATE TABLE AREA(
    ID INT AUTO_INCREMENT PRIMARY KEY ,
    NOMBRE VARCHAR(100) NOT NULL,
    RANKING INT NOT NULL
);

CREATE TABLE PROFESIONAL_AREA(
    ID_PROFESIONAL INT NOT NULL,
    ID_AREA INT NOT NULL,
    ES_JEFE INT NOT NULL,
    FOREIGN KEY (ID_AREA) REFERENCES AREA(ID) ON DELETE CASCADE,
    FOREIGN KEY (ID_PROFESIONAL) REFERENCES PROFESIONAL(ID) ON DELETE CASCADE,
    PRIMARY KEY (ID_AREA,ID_PROFESIONAL)
);

CREATE TABLE INVENTOR(
    ID INT AUTO_INCREMENT PRIMARY KEY ,
    NOMBRE VARCHAR(100) NOT NULL,
    ID_PAIS INT NOT NULL,
    FOREIGN KEY (ID_PAIS) REFERENCES PAIS(ID) ON DELETE CASCADE
);

CREATE TABLE INVENTO(
    ID INT AUTO_INCREMENT PRIMARY KEY ,
    NOMBRE VARCHAR(100) NOT NULL,
    ANO DATE NOT NULL,
    ID_PAIS INT NOT NULL,
    ID_PROFESIONAL INT NOT NULL,
    FOREIGN KEY (ID_PAIS) REFERENCES PAIS(ID) ON DELETE CASCADE,
    FOREIGN KEY (ID_PROFESIONAL) REFERENCES PROFESIONAL(ID) ON DELETE CASCADE
);

CREATE TABLE INVENTO_INVENTOR(
    ID_INVENTO INT NOT NULL,
    ID_INVENTOR INT NOT NULL,
    FOREIGN KEY (ID_INVENTO) REFERENCES INVENTO(ID) ON DELETE CASCADE,
    FOREIGN KEY (ID_INVENTOR) REFERENCES INVENTOR(ID) ON DELETE CASCADE,
    PRIMARY KEY (ID_INVENTO,ID_INVENTOR)
)