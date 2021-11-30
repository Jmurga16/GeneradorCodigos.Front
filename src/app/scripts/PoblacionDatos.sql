--POBLACION DE DATOS
USE DB_PagoEfectivo
GO

--TABLA ESTADOS
INSERT INTO TBL_ESTADO(sDescripcion)
	VALUES('Generado')
INSERT INTO TBL_ESTADO(sDescripcion)
	VALUES('Canjeado')
GO

--TABLA REGISTRO
INSERT INTO TBL_REGISTRO(sNombre, sEmail, sCodigo, nEstado)
	VALUES('Jose', 'jmurga16@hotmail.com', 'COD00001',1)
GO

