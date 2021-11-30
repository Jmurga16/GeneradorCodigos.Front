USE DB_PagoEfectivo
GO
                                   
CREATE PROCEDURE [dbo].[USP_MNT_Codigos]          
            
	@sOpcion VARCHAR(2) = '',   
	@pParametro VARCHAR(max)
                                                                                   
AS     

BEGIN

	BEGIN
		
		DECLARE @nIdRegistro INT;		
		DECLARE @sNombre	 VARCHAR(MAX);
		DECLARE @sEmail		 VARCHAR(MAX);		
		DECLARE @sCodigo	 VARCHAR(MAX);
		DECLARE @nEstado	 INT;

		DECLARE @Correlativo int;
		
		
	END
	
	--VARIABLE TABLA
	BEGIN

		DECLARE @tParametro TABLE (
			id int,
			valor varchar(max)
		);

	END

	--Descontena el parametro con split
	BEGIN
		IF(LEN(LTRIM(RTRIM(@pParametro))) > 0)
			BEGIN
			    INSERT INTO @tParametro (id, valor ) SELECT id, valor FROM dbo.Split(@pParametro, '|');
			END;
	END;
        
		
	IF @sOpcion = '01'   --CONSULTAR REGISTRO DE CODIGOS
	BEGIN
			
			SELECT
				Reg.nIdRegistro
				,Reg.sNombre
				,Reg.sEmail
				,Reg.sCodigo
				,Reg.nEstado
				,Est.sDescripcion AS 'sEstado'
			FROM TBL_REGISTRO Reg
			INNER JOIN TBL_ESTADO Est ON Reg.nEstado = Est.nIdEstado
                                                                                 
	END;                                     
	

	ELSE IF @sOpcion = '02'  --GENERAR CODIGOS (INSERT)                                                     
	BEGIN
		BEGIN
			SET @sNombre	= (SELECT valor FROM @tParametro WHERE id = 1);
			SET @sEmail		= (SELECT valor FROM @tParametro WHERE id = 2);
			
			SET @nEstado	= 1; --Generado
			SELECT @Correlativo = ISNULL(MAX(nIdRegistro), 0) + 1 FROM [TBL_REGISTRO];
		END	

		BEGIN

			IF((SELECT COUNT(*) FROM [TBL_REGISTRO] WHERE sEmail=@sEmail)<1)
				BEGIN

					SELECT @sCodigo = 'COD'+right('0000' + convert(varchar(5), @Correlativo), 5)
					
					INSERT INTO [TBL_REGISTRO]
							(sNombre,  sEmail,  sCodigo,  nEstado)
					VALUES	(@sNombre, @sEmail, @sCodigo, @nEstado)

					SELECT CONCAT('1|',@sCodigo)
				END
			ELSE
				BEGIN
					SELECT '0|Ya se registró un código con el Email ingresado'
				END

		
      		
		END
		
	END
	   
	   
	ELSE IF @sOpcion = '03'  -- CANJEAR
	BEGIN
		BEGIN
			SET @sCodigo	= (SELECT valor FROM @tParametro WHERE id = 1);

			SET @nEstado	= 2; --Canjeado
		END	
		

		IF((SELECT nEstado FROM [TBL_REGISTRO] WHERE sCodigo=@sCodigo)=1)
			BEGIN
				UPDATE [TBL_REGISTRO]                           
				SET 
					nEstado = @nEstado
				WHERE 
					sCodigo = @sCodigo

				SELECT CONCAT('1|El Código ',@sCodigo,' Se canjeó con éxito')
			END
		ELSE
			BEGIN
				SELECT '0|El Código ya ha sido Canjeado'
			END
        
	END;                            
	                                   	 
	
END
