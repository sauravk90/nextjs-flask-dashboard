import React from "react";

type Props = {
  title: string;
};

export default function PageHeader({ title }: Props) {
  return <h1 className="text-2xl font-semibold">{title}</h1>;
}
