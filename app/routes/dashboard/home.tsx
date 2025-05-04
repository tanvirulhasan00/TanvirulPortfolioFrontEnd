import React from "react";
import { Link } from "react-router";
import type { Route } from "./+types/home";
import Footer from "~/components/Footer";
import ThemeToggler from "~/components/dark-mode/mode-toggler";
import { SectionCards } from "~/components/section-cards";
import { ChartAreaInteractive } from "~/components/chart-area-interactive";
import { Skeleton } from "~/components/ui/skeleton";
import CardSkeleton from "~/components/card-skeleton";
import CardVisitorsSkeleton from "~/components/chart-skeleton";
import Spinner from "~/components/spinner";
import Loading from "~/components/loading";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tanvirul's Portfolio" },
    {
      name: "description",
      content: "Welcome to Tanvirul's digital world!",
    },
  ];
}

const Home = () => {
  const [loading, setLoading] = React.useState(true);

  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-4 lg:px-6">
          {loading ? <CardSkeleton /> : <SectionCards />}
          <div className="px-4 lg:px-6">
            {loading ? <CardVisitorsSkeleton /> : <ChartAreaInteractive />}
          </div>
          <div>
            <Spinner />
            <Loading />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
