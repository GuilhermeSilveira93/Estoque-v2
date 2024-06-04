import SaidaForm from './components/Form';
import Content from '@/components/ui/content';
import Main from '@/components/ui/main';

import { stringData } from '@/hooks';
import { plscale } from '@/lib/api';
import { RolesRequiredProps } from '@/types/roles-required';
import { verifyPermissionsPage } from '@/utils/verify-permissions-page';
const Saida = async ({ searchParams }) => {
  const data = new Date();
  data.setHours(data.getHours() - 3);
  const dataString = stringData(data);
  await verifyPermissionsPage({
    rolesRequired: [RolesRequiredProps.group_1, RolesRequiredProps.group_2]
  });
  const [empresas, clientes, produtos] = await Promise.all([
    await plscale
      .get('/st_empresa')
      .then((res) => res.data)
      .catch(() => {
        console.log('st_empresa');
      }),
    await plscale
      .get('/st_cliente', {
        params: { ID_EMPRESA: searchParams['ID_EMPRESA'] }
      })
      .then((res) => res.data)
      .catch(() => {
        console.log('clientes');
      }),
    await plscale
      .get('/st_produto/estoque')
      .then((res) => res.data)
      .catch(() => {
        console.log('produtos');
      })
  ]);
  return (
    <Main>
      <Content>
        <></>
        <SaidaForm
          defaultValue={searchParams['ID_EMPRESA']}
          empresas={empresas}
          clientes={clientes}
          produtos={produtos}
          data={dataString}
        />
      </Content>
    </Main>
  );
};
export default Saida;
