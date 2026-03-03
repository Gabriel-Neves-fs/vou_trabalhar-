export function verificarEscala(
  dataInicio: string,
  dataConsulta: string,
): "TRABALHO" | "FOLGA" {
  const inicio = new Date(dataInicio + "T00:00:00");
  const consulta = new Date(dataConsulta + "T00:00:00");

  const diferencaMs = consulta.getTime() - inicio.getTime();
  const diferencadias = Math.floor(diferencaMs / (1000 * 60 * 60 * 24));

  return diferencadias % 2 === 0 ? "TRABALHO" : "FOLGA";
}
