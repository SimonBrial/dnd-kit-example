import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { ScrollArea } from "@mantine/core";
import { ContainerProps } from "@/interface/interface";

const Container = ({ description, children, title, id }: ContainerProps) => {
  const { setNodeRef, isDragging } = useSortable({
    id: id,
    data: {
      type: "container",
    },
  });
  return (
    <div
      ref={setNodeRef}
      className="w-full h-[25rem] p-4 bg-gray-50 rounded-xl flex flex-col gap-y-4"
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-y-1">
          <h1 className="text-gray-800 text-xl">{title}</h1>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
      </div>
      <ScrollArea h={250} scrollbarSize={2}>
        {children}
      </ScrollArea>
    </div>
  );
};

export default Container;
