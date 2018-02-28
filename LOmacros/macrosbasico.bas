REM  *****  BASIC  *****

REM Declaración de una subrutina con la palabra clave "Sub"  
Sub Main
REM Declaración de variables 
	Dim Doc As Object
	Dim Sheet As Object
	Dim Cell As Object
	Dim num As Integer
	Dim celdasnum As Integer
	Dim nombres As Variant REM Para crear un Array
	Dim celda As Object
REM Declarando valores de las variables
	nombres = Array("Luis","Carlos","Monica","Juan")	
	num = 0
	celdas = 0
	
	Doc = ThisComponent REM Cargando Documento
	Sheet = Doc.Sheets(0) REM Empezando las celdas en 0,0
	celda = Sheet.getCellByPosition(0,celdas)	REM Obteniendo la celda 0,0 para este caso	
	
REM Declarando bucle Do while y operador lógico not "<>", el de igualdad es "=" no hay diferencia con el de asignación de valores dela variable
	Do While  celda.String <> "" 
		celda = Sheet.getCellByPosition(0,celdas)
		celdas = celdas + 1
	Loop
REM MsgBox Muestra una ventana con el mensaje  deseado.	
	MsgBox( "Celdas: " + (celdas - 1) )

REM La sentencia If va  acompañada de Then al final de la clausula y se cierra con End If	
	If celdas <> 0 Then
		celdas = celdas - 1
	End If

REM El ciclo For recorre de n To n+1 es indispensable el "To"
	For i = 0 To celdas - 1 

		If num < UBound(nombres) Then
			num = num + 1
		Else
			num = 0
		End If
		
		Df = Sheet.getCellByPosition(1,i)
		Df.String = nombres(num)
		Df.cellbackcolor = RGB((20 * num),(40 * num),(60 * num))
REM El ciclo For se cierra con "Next Variable_que_aumenta" en este caso es i
	Next i 
	celdas = 0
REM Fin de la subrutina 
End Sub
REM Declaración de la función  
Function Hola()
	Print "Hola" REM Es muy similar a MSgBox
	Dim Doc As Object
	Dim Sheet As Object
	Dim Cell As Object
	Dim Df As Object   
 
	Doc = ThisComponent
	Sheet = Doc.Sheets(0)
 
	Df = Sheet.getCellByPosition(0, 0)
	Cell = Sheet.getCellByPosition(1, 0)
	Cell.String = Df.String
	Cell.cellbackcolor = RGB(50,120,20) REM Para especificar color
REM Fin de la función	
End Function
