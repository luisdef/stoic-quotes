export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-start p-12">
      <div className="flex flex-col border-2 w-[80%] p-[12px]">
        <h1 className="text-[16px] font-extrabold text-center">
          Página de frases estoicas
        </h1>
        <p className="text-[20px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo veniam
          possimus cupiditate sed ducimus facilis ab iure soluta magnam! Maxime,
          aliquam natus? Aliquam iste vitae atque ratione animi mollitia
          explicabo.
        </p>
        <p className="text-[16px] text-right italic">Autor da frase</p>
      </div>
      <span className="absolute bottom-1 right-1 bg-slate-300 p-1 text-[10px]">
        Por Luis Felipe Assmann
      </span>
    </div>
  );
}
