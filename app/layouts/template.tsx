import { Boundary } from '#/ui/boundary';
import React from 'react';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <Boundary>
      <div className="bg-red-400 p-5">{children}</div>
    </Boundary>
  );
}
