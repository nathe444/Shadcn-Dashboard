import { AppAreaChart } from "@/components/AppAreaChart";
import { AppBarChart } from "@/components/AppBarChart";
import { AppPieChart } from "@/components/AppPieChart";
import CardList from "@/components/CardList";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 min-h-[calc(100vh-4rem)]">
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 flex flex-col">
        <AppBarChart/>
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg flex flex-col">
        <CardList title="Latest Transactions" />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg flex flex-col">
        <AppPieChart/>
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        Test
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 flex flex-col">
        <AppAreaChart/>
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg flex flex-col">
        <CardList title="Popular Content" />
      </div>
    </div>
  );
}
