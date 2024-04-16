'use client';

import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

type Props = {
  spec: Record<string, any>,
};

export const ReactSwagger: React.FC<Props> = ({ spec }) => (
  <SwaggerUI spec={spec} />
);
