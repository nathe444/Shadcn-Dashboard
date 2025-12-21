"use client";

import React, { useState } from "react";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { ScrollArea } from "./ui/scroll-area";
import { Calendar } from "./ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar1 } from "lucide-react";
import { Button } from "./ui/button";

const todos = [
  "fishing",
  "driving",
  "meeting",
  "fishing",
  "driving",
  "meeting",
  "fishing",
  "driving",
  "meeting",
  "fishing",
  "driving",
  "meeting",
];

const TodoList = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [open , setOpen] = useState(false)

  return (
    <div>
              <h1 className="text-lg font-medium mb-6">Todo List</h1>

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
            <Button className="bg-white w-full">
          {date ? date.toLocaleDateString() : "Select Date"}
            </Button>
        </PopoverTrigger>
        <PopoverContent>
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date)=>{
                setDate(date)
                setOpen(false)
            }}
            className="rounded-md border shadow-sm"
            captionLayout="dropdown"
          />
        </PopoverContent>
      </Popover>

      <ScrollArea className="max-h-[400px] overflow-y-auto mt-4">
        {todos.map((todo) => {
          return (
            <Card
              key={todo}
              className="flex-row justify-between items-center p-4 my-4 "
            >
              <Label htmlFor={todo}>{todo}</Label>
              <Checkbox id={todo} />
            </Card>
          );
        })}
      </ScrollArea>
    </div>
  );
};

export default TodoList;
