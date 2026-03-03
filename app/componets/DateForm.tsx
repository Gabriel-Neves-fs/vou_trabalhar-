"use client";

import { verificarEscala } from "@/libs/escala";
import React from "react";
import ResultCard from "./ResultCard";

export default function DateForm() {
  const [dataInicio, setDataInicio] = React.useState("");
  const [dataConsulta, setDataConsulta] = React.useState("");
  const [resultado, setResultado] = React.useState<"TRABALHO" | "FOLGA" | null>(
    null,
  );

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const resposta = verificarEscala(dataInicio, dataConsulta);
    setResultado(resposta);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-2xl font-bold">Vou trabalhar?</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <p className="text-sm text-gray-600">
          Informe a data de início da escala.
        </p>
        <input
          type="date"
          value={dataInicio}
          onChange={(e) => setDataInicio(e.target.value)}
          className="border p-2 rounded-2xl"
          required
        />
        <p className="text-sm text-center text-gray-600">
          Informe a data de consulta.
        </p>
        <input
          type="date"
          value={dataConsulta}
          onChange={(e) => setDataConsulta(e.target.value)}
          className="border p-2 rounded-2xl"
          required
        />
        <button className="bg-black text-white p-2 rounded-2xl">
          Verificar
        </button>
      </form>
      {resultado && <ResultCard resultado={resultado} />}
    </div>
  );
}
