import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "~/components/ui/card";
import { Skeleton } from "~/components/ui/skeleton";

export default function CardVisitorsSkeleton() {
  return (
    <Card className="@container/card">
      <CardHeader className="relative space-y-2">
        <Skeleton className="h-5 w-36" /> {/* Total Visitors title */}
        <div className="space-y-1">
          <Skeleton className="h-4 w-48 @[540px]/card:block hidden" />
          <Skeleton className="h-4 w-32 @[540px]/card:hidden block" />
        </div>
        <div className="absolute right-4 top-4 flex flex-col gap-2 items-end">
          {/* Desktop ToggleGroup */}
          <div className="@[767px]/card:flex hidden gap-2">
            <Skeleton className="h-8 w-24 rounded-md" />
            <Skeleton className="h-8 w-24 rounded-md" />
            <Skeleton className="h-8 w-24 rounded-md" />
          </div>
          {/* Mobile Select */}
          <Skeleton className="@[767px]/card:hidden block h-10 w-40 rounded-md" />
        </div>
      </CardHeader>

      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <Skeleton className="h-[250px] w-full rounded-lg" />
      </CardContent>
    </Card>
  );
}
