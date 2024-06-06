'use client';
import { useTheme } from 'next-themes';

import { colors } from '@/components/colors';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export const TesteGraph = ({ produtos }: any) => {
  const { theme, systemTheme } = useTheme();
  const th = theme === 'system' ? systemTheme : theme;
  return (
    <>
      <ResponsiveContainer width="100%" minHeight={160} maxHeight={160}>
        <BarChart
          data={produtos.meses}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip contentStyle={{ backgroundColor: colors.dark.card }} />
          <XAxis dataKey="name" />
          <Area
            type="monotone"
            dataKey="saida"
            stackId="1"
            stroke={colors[th].terciaria}
            fill={colors[th].terciaria}
          />
          <Area
            type="monotone"
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
