import React, { useState } from 'react';

export default function useUniqueId() {
  const [id] = useState(
    () => `component-${Math.random().toString(16).slice(2)}`
  );
  return parseInt(id);
}
