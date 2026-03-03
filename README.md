📅 Escala 12x36 Calculator

Aplicação web desenvolvida com Next.js + TypeScript para calcular automaticamente se uma determinada data é dia de trabalho ou folga em uma escala 12x36.

Projeto estruturado com foco em organização, separação de responsabilidades e escalabilidade.

🚀 Sobre o Projeto

A escala 12x36 funciona em ciclos alternados:

Dia inicial → Trabalho

Dia seguinte → Folga

Alternância contínua

A aplicação:

Recebe uma data inicial

Recebe uma data para consulta

Calcula a diferença em dias

Retorna:

🛠 Trabalho (dias pares)

🎉 Folga (dias ímpares)

🧠 Regra de Negócio

A lógica central está isolada em /lib/escala.ts.

export function verificarEscala(dataInicio: string, dataConsulta: string) {
  const inicio = new Date(dataInicio + "T00:00:00");
  const consulta = new Date(dataConsulta + "T00:00:00");

  const diferencaMs = consulta.getTime() - inicio.getTime();
  const diferencaDias = Math.floor(diferencaMs / (1000 * 60 * 60 * 24));

  return diferencaDias % 2 === 0 ? "TRABALHO" : "FOLGA";
}
Decisões Técnicas:

Uso de "T00:00:00" para evitar problemas de fuso horário

Math.floor para evitar erro decimal

Tipagem explícita para maior segurança

🎨 UI & Design System

A interface utiliza:

TailwindCSS

shadcn/ui

O uso do shadcn/ui permite:

Componentes reutilizáveis

Design consistente

Melhor organização visual

Base pronta para escalar como produto

🛠 Tecnologias Utilizadas

Next.js (App Router)

React

TypeScript

TailwindCSS

shadcn/ui

🎯 Funcionalidades

Seleção de data via input

Cálculo automático da escala

Renderização condicional do resultado

Estrutura modular

Base pronta para expansão (SaaS)

🚀 Deploy

O projeto está preparado para deploy na Vercel.


👨‍💻 Autor

Gabriel Neves
Desenvolvedor focado em construção de sistemas reais, organizados e escaláveis.
