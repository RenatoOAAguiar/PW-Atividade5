$('document').ready(function() {
	$('#peso').mask("#00.00", {
		reverse : true
	});
	$('#altura').mask("#0.00", {
		reverse : true
	});
});

var listaCampos = [ 'peso', 'altura', 'sexo' ];

function calcularPeso() {
	if (validarCamposObrigatorios()) {
		$('.alert').addClass('hide');
		var peso = $('#peso').val();
		var altura = $('#altura').val();
		var sexo = $('#sexo').val();
		var obj = {
			"peso" : peso,
			"altura" : altura,
			"sexo" : sexo
		};

		$.ajax({
			contentType : "application/json",
			data : JSON.stringify(obj),
			type : "POST",
			url : "http://localhost:9090/exercicio/api/imc/calcular",
			success : function(data, textStatus, jqXHR) {
				$('#result').html(data);
				$('#modalResultado').modal('show');
			},
			error : function(jqXHR, textStatus, errorThrown) {
				console.log(jqXHR);
			}
		});

	} else {
		$('.alert').removeClass('hide');
	}
}

function validarCamposObrigatorios() {
	var retorno = true;
	listaCampos.forEach(function(campo) {
		if ($('#' + campo).val() == '') {
			retorno = false;
		}
	});

	return retorno;
}

function fecharModal() {
	$('#modalResultado').modal('hide');
	var peso = $('#peso').val('');
	var altura = $('#altura').val('');
	var sexo = $('#sexo').val('');
}