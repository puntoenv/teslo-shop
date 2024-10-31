import { titleFont } from "@/config/fonts";

export default function Home() {
  return (
    <div className="">
      <h1>Hola Mundo</h1>
      <h1 className={`${titleFont.className} antialiased font-bold`}>
        Hola Mundo
      </h1>
      <h1 className={`${titleFont.className} antialiased`}>Hola Mundo</h1>
    </div>
  );
}
