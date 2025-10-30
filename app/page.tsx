import Home from "@/components/features/Home";
export default function Main() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col gap-32 py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Home />
      </main>
    </div>
  );
}
