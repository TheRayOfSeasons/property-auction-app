import { ForSaleSign } from "@/components/for-sale-sign";
import { TopNav } from "@/components/top-nav";

export default async function Home() {
  return (
    <>
      <div className="mx-auto max-w-[2560px] w-full h-[1440px]">
        <TopNav />
        <main className="relative">
          <div className="absolute top-[344px] left-[1070px]">
            <ForSaleSign />
          </div>
        </main>
      </div>
    </>
  );
}
