import math from 'mathjs';

export default class Perceptron{

	constructor( N , Y , T , Tol , X , W ) {
	
	  this.state = {
	  	N   : N,
	  	Y   : Y,
	  	T   : T,
	  	Tol : Tol,
	  	X   : X,
	  	W   : W,
		report  : []
	  };
	}

	/**
	 * Obtencion de peso para neurana con los datos asignados 
	 * en el constructor
	 * return {*} : Datos de logs tipo reporte
	 */
	getW = () => {
		//Asigancion de estados para acceso rapido
		let state     = this.state,
			total_err = 2 * state.Tol,
			iterator  = 0;


		while( total_err > state.Tol  ){

			//Definimos estructura para captura de datos en iteracion
			let Log = {
				W : [],
				ek : 0,
				iteration : 0
			}

			//Reiniciamos
			total_err = 0;

			state.X.forEach( ( Xi , index ) => {
				
				//Calculamos U
				let U = math.multiply( Xi , state.W );

				//Calculamos salida de neurona
				let Yk = this.f( U - state.T );

				//Calcular el error
				let error = state.Y[index] - Yk;

				//Calculo de elementos para actualizacion de pesos
							//Operacion N(constante de prop.) obtenido con Xi
				var op   = math.multiply( state.N , Xi  ),
							//Resultado obtenido con error
					op_1 = math.multiply( op , error  ),
							//Suma de Wi con Operacion previa
					res  = math.add( op_1 , state.W );

				//Actualizamos elementos !importante
				state.W = res;
				//acumulamos el error^2
				total_err += (error * error);

			});
			
			//Obtenemos el promedio del error (equivalencia a Norm mathlab)
			total_err = Math.sqrt(total_err);
			iterator++;//Incremento de contador

			//cargamos dato de iteracion 
			Log.ek = total_err;
			Log.iteration = iterator;
			Log.W = state.W;

			//Insertamos datos de la iteracion al reporte general
			state.report.push( Log );

		}
		return state.report;//Retornamos el log para graficacion
	}

	/**
		Funcion para calculo de la salidad de la neurona
		params {int} : Valor de comparacion de neurona
	 */
	f = ( v ) => {return ( v <= 0 )? 0 : 1};

}