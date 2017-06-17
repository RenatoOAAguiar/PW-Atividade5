package br.ufg.inf.controller;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;

import br.ufg.inf.model.ImcBean;
import br.ufg.inf.model.ImcModel;

@Path("/imc")
public class ImcRest {

	@POST
	@Path("/calcular")
	@Consumes("application/json")
	public String calcular(ImcModel imcModel) {
		ImcBean imcBean = new ImcBean();
		return imcBean.calculoImc(imcModel);
	}
}
