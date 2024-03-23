import { DNDType } from "@/interface/interface";

interface itemsDataFake {
  id: string;
  title: string;
  description: string;
  containerNro: string | number;
}

export const itemsDataFake: itemsDataFake[] = [
  {
    id: crypto.randomUUID(),
    title: "Title 1",
    description: "Description 1",
    containerNro: 1,
  },
  {
    id: crypto.randomUUID(),
    title: "Title 2",
    description: "Description 2",
    containerNro: 4,
  },
  {
    id: crypto.randomUUID(),
    title: "Title 3",
    description: "Description 3",
    containerNro: 2,
  },
  {
    id: crypto.randomUUID(),
    title: "Title 4",
    description: "Description 4",
    containerNro: 2,
  },
  {
    id: crypto.randomUUID(),
    title: "Title 5",
    description: "Description 5",
    containerNro: 2,
  },
  {
    id: crypto.randomUUID(),
    title: "Title 6",
    description: "Description 6",
    containerNro: 3,
  },
  {
    id: crypto.randomUUID(),
    title: "Title 7",
    description: "Description 7",
    containerNro: 3,
  },
  {
    id: crypto.randomUUID(),
    title: "Title 8",
    description: "Description 8",
    containerNro: 3,
  },
  {
    id: crypto.randomUUID(),
    title: "Title 9",
    description: "Description 9",
    containerNro: 4,
  },
  {
    id: crypto.randomUUID(),
    title: "Title 10",
    description: "Description 10",
    containerNro: 4,
  },
];

export const dataFake: DNDType[] = [
  {
    id: `container-${crypto.randomUUID()}`,
    title: "container 1",
    items: [{ id: `item-${crypto.randomUUID()}`, title: "title 1-1" }],
  },
  {
    id: `container-${crypto.randomUUID()}`,
    title: "container 2",
    items: [
      { id: `item-${crypto.randomUUID()}`, title: "title 2-1" },
      { id: `item-${crypto.randomUUID()}`, title: "title 2-2" },
    ],
  },
  {
    id: `container-${crypto.randomUUID()}`,
    title: "container 3",
    items: [
      { id: `item-${crypto.randomUUID()}`, title: "title 3-1" },
      { id: `item-${crypto.randomUUID()}`, title: "title 3-2" },
      { id: `item-${crypto.randomUUID()}`, title: "title 3-3" },
    ],
  },
  {
    id: `container-${crypto.randomUUID()}`,
    title: "container 4",
    items: [
      { id: `item-${crypto.randomUUID()}`, title: "title 4-1" },
      { id: `item-${crypto.randomUUID()}`, title: "title 4-2" },
      { id: `item-${crypto.randomUUID()}`, title: "title 4-3" },
      { id: `item-${crypto.randomUUID()}`, title: "title 4-5" },
      { id: `item-${crypto.randomUUID()}`, title: "title 4-6" },
      { id: `item-${crypto.randomUUID()}`, title: "title 4-7" },
      { id: `item-${crypto.randomUUID()}`, title: "title 4-8" },
      { id: `item-${crypto.randomUUID()}`, title: "title 4-9" },
      { id: `item-${crypto.randomUUID()}`, title: "title 4-10" },
    ],
  },
];
