import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "~/components/ui/card";
import { Skeleton } from "~/components/ui/skeleton";

export default function CardSkeleton() {
  return (
    <div className="*:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4 grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card lg:px-6">
      {Array.from({ length: 4 }).map((_, i) => (
        <Card className="@container/card">
          <CardHeader className="relative space-y-2">
            <Skeleton className="h-4 w-24" /> {/* Total Revenue */}
            <Skeleton className="h-8 w-32 @[250px]/card:w-40" />{" "}
            {/* $1,250.00 */}
            <div className="absolute right-4 top-4">
              <Skeleton className="h-5 w-16 rounded-lg" /> {/* Badge */}
            </div>
          </CardHeader>

          <CardFooter className="flex-col items-start gap-2 text-sm">
            <Skeleton className="h-4 w-48" /> {/* Trending up this month */}
            <Skeleton className="h-3 w-40" /> {/* Visitors for last 6 months */}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
