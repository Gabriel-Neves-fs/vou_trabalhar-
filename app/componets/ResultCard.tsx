import { Button } from "@/components/ui/button";

type Props = {
  resultado: "TRABALHO" | "FOLGA";
};

export default function ResultCard({ resultado }: Props) {
  return (
    <div className=" border bg-gray-200 flex flex-col items-center p-4 rounded shadow">
      <h2 className="text-xl font-bold">
        {resultado === "TRABALHO" ? "🛠 Dia de Trabalho" : "🎉 Dia de Folga"}
      </h2>

      <Button
        onClick={() => window.location.reload()}
        className="bg-black text-white p-3 rounded-2xl mt-4 "
      >
        Reniciar
      </Button>
    </div>
  );
}
