import React from "react";

import SubContent from "@/components/Content/SubContent";

interface IProps {
  children: React.ReactNode;
}

export default function MainContent(props: IProps) {
  const { children } = props;
  return (
    <div className="grid grid-cols-12 gap-6 py-3">
      <div className="col-span-12 sm:col-span-8">{children}</div>
      <div className="invisible sm:visible md:col-span-4">{<SubContent />}</div>
    </div>
  );
}
