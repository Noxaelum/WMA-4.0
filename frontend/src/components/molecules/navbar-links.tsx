"use client";
import { ChevronDown } from "lucide-react";
import { Button } from "../atoms/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../atoms/ui/dropdown-menu";
import Link from "next/link";
import { UseMutationResult } from "@tanstack/react-query";
import { DataProps } from "@/types/user-data";

type NavbarLinksProps = {
  items: { title: string; url: string }[];
  data: DataProps;
  isPending: boolean;
  isError: boolean;
  logoutMutation: UseMutationResult<
    {
      message: string;
    },
    Error,
    void,
    unknown
  >;
};

export default function NavbarLinks({
  items,
  data,
  isPending,
  isError,
  logoutMutation,
}: NavbarLinksProps) {
  return (
    <ul className="hidden md:inline-flex md:gap-4">
      {items.map((item) => (
        <li key={item.title}>
          <Button asChild variant="link">
            <Link href={item.url}>{item.title}</Link>
          </Button>
        </li>
      ))}
      {isPending ? (
        <div>loading...</div>
      ) : isError || !data ? (
        <li>
          <Button variant="link" asChild>
            <Link href="/login">Sign in</Link>
          </Button>
        </li>
      ) : (
        <li>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="font-medium">
                {data.user.name} <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="bottom">
              <DropdownMenuItem onClick={() => logoutMutation.mutate()}>
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
      )}
    </ul>
  );
}
