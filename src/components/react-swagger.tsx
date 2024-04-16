'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import 'swagger-ui-react/swagger-ui.css';

// We import swagger-ui-react this way since it uses class components
// internally. Class components do not work with server components;
// in which, the page we intend to use this is.
const DynamicSwaggerUI = dynamic(() => import('swagger-ui-react'), {
  ssr: false,
});

type Props = {
  spec: Record<string, any>,
};

export const ReactSwagger: React.FC<Props> = ({ spec }) => (
  <DynamicSwaggerUI spec={spec} />
);
