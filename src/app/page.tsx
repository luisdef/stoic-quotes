export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/quote`, {
    cache: "no-store",
  });
  if (!res) throw new Error("Failed to fetch quote.");
  const data = await res.json();
  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-start p-12">
      <h1 className="text-[16px] font-extrabold text-center">
        Frases Estoicas
      </h1>
      <div className="flex flex-col max-md:w-[100%] border-2 w-[80%] p-[12px]">
        <p className="max-md:text-[16px] text-[20px]">{data.text}</p>
        <p className="text-[16px] text-right italic">{data.author}</p>
      </div>
      <span className="fixed bottom-1 right-1 bg-slate-300 p-1 text-[14px]">
        Por Luis Felipe Assmann
      </span>
    </div>
  );
}
