import { UniqueIdentifier } from "@dnd-kit/core";

interface ContainerProps {
  id: UniqueIdentifier;
  children: React.ReactNode;
  title?: string;
  description?: string;
}

interface ItemsType {
  id: UniqueIdentifier;
  title: string;
  description: string;
}

interface DNDType {
  id: UniqueIdentifier;
  title: string;
  items: {
    id: UniqueIdentifier;
    title: string;
  }[];
}

interface Column {
  id: Id;
  title: string;
}

interface Task {
  id: Id;
  columnId: Id;
  content: string;
}

export type { ContainerProps, ItemsType, DNDType, Column, Task };
