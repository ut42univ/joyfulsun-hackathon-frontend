"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useVersion } from "@/contexts/VersionContext";

const frameworks = [
  {
    value: 7,
    label: "2024年7月データ",
  },
  {
    value: 8,
    label: "2024年8月データ",
  },
  {
    value: 9,
    label: "2024年9月データ",
  },
];

export function Combobox() {
  const [open, setOpen] = React.useState(false);
  const { anotherVariable, setAnotherVariable } = useVersion();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {anotherVariable
            ? frameworks.find(
                (framework) => framework.value === Number(anotherVariable)
              )?.label
            : "データを選択..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="データを選択..." />
          <CommandList>
            <CommandEmpty>データが見つかりません</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value.toString()}
                  onSelect={(currentValue) => {
                    setAnotherVariable(
                      currentValue === anotherVariable.toString()
                        ? 7
                        : Number(currentValue)
                    );
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      Number(anotherVariable) === framework.value
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
