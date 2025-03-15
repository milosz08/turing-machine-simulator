import type { JSX } from 'react';
import * as React from 'react';
import { SyntaxInfoComponent } from '@/components/usage-info/syntax-info.component';
import { TopUsageInfoComponent } from '@/components/usage-info/top-usage-info.component';

const UsageInfoPageComponent: React.FC = (): JSX.Element => (
  <>
    <TopUsageInfoComponent />
    <SyntaxInfoComponent />
  </>
);

export default UsageInfoPageComponent;
