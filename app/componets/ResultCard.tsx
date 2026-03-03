type Props = {
  resultado: "TRABALHO" | "FOLGA";
};

export default function ResultCard({ resultado }: Props) {
  return (
    <div className=" border flex flex-col items-center p-4 rounded shadow">
      <h2 className="text-xl font-bold">
        {resultado === "TRABALHO" ? "🛠 Dia de Trabalho" : "🎉 Dia de Folga"}
      </h2>

      <button
        onClick={() => window.location.reload()}
        className="mt-2 bg-black  text-white p-2 rounded-2xl"
      >
        Reiniciar
      </button>
    </div>
  );
}
