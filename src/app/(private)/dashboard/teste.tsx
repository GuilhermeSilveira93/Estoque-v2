'use client';
import { useTheme } from 'next-themes';

import { colors } from '@/components/colors';

import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

export const TesteGraph = ({ produtos }: any) => {
  const { theme, systemTheme } = useTheme();
  const th: string = theme === 'system' ? systemTheme : theme;
  return (
    <>
      <ResponsiveContainer width="100%" minHeight={160} maxHeight={160}>
        <BarChart
          data={produtos.meses}
          margin={{
            top: 30,
            right: 0,
            left: 0,
            bottom: 0
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip contentStyle={{ backgroundColor: colors.dark.card }} />
          <XAxis dataKey="name" />
          <Bar
            dataKey="saida"
            stackId="1"
            stroke={colors[th].terciaria}
            fill={colors[th].terciaria}
          />
          <Bar
            dataKey="entrada"
            stackId="1"
            stroke={colors[th].primaria}
            fill={colors[th].primaria}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};
