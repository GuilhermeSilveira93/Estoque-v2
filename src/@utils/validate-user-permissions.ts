import { RolesRequired } from '@/@types';

import { getUserCurrent } from './get-user-current';

export type ValidateUserPermissionsProps = {
  rolesRequired: RolesRequired[]
};

export const ValidateUserPermissions = async ({
  rolesRequired
}: ValidateUserPermissionsProps) => {
  const { ST_GRUPO } = await getUserCurrent();
  if (rolesRequired) {
    if (!ST_GRUPO.N_NIVEL) {
      return null;
    }

    const hasAllPermissions = rolesRequired.some(
      (role) => String(role) === String(ST_GRUPO.N_NIVEL)
    );

    if (!hasAllPermissions) {
      return null;
    }
  }

  return true;
};
