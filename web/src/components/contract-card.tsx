import {
  CircleIcon,
  CodeIcon,
  GitHubLogoIcon,
  LapTimerIcon,
} from "@radix-ui/react-icons";
import { DateTime } from "luxon";
import { getExplorerUrl, getChainName } from "@midna/utils";

import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Spacer } from "./ui/spacer";
import Link from "next/link";

export function ContractCard({
  name,
  createdAt,
  contractHistoryId,
  id,
  contractAddress,
  chainId,
  selected,
}: {
  name: string;
  createdAt: Date;
  contractHistoryId: string;
  id: number;
  contractAddress: string;
  chainId: string;
  selected?: boolean;
}) {
  return (
    <Card className={selected ? "border-primary border-2" : undefined}>
      <CardHeader className="grid grid-cols-[1fr_min-content] items-start gap-4 space-y-0">
        <div className="space-y-1">
          <CardTitle className="leading-tight">{name}</CardTitle>
          <CardDescription>
            <Link href={getExplorerUrl(chainId, contractAddress)}>
              {getChainName(chainId)} - {contractAddress}
            </Link>
          </CardDescription>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary">
            <CodeIcon className="mr-2 h-4 w-4" />
            ABI
          </Button>
          <Button>
            <GitHubLogoIcon className="mr-2 h-4 w-4" />
            GitHub
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <CircleIcon className="mr-1 h-3 w-3 fill-orange-400 text-orange-400" />
            Solidity
          </div>
          <div className="flex items-center">
            <LapTimerIcon className="mr-1 h-3 w-3" />
            20k tx/s
          </div>
          <Spacer />
          <div>
            <Link
              href={`/contracts/history/${contractHistoryId}?contractId=${id}`}
            >
              Deployed{" "}
              <strong className="text-accent-foreground font-medium">
                {DateTime.fromJSDate(createdAt).toFormat("LLL dd yyyy @ HH:mm")}
              </strong>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
