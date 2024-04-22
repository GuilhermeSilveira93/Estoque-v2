import { redirect } from 'next/navigation';

import { ValidateUserPermissions, ValidateUserPermissionsProps } from '.';

export const verifyPermissionsPage = async (
  props: ValidateUserPermissionsProps
) => {
  const userCanSeeComponent = await ValidateUserPermissions(props);

  if (!userCanSeeComponent) {
    return redirect('/');
  }
};
