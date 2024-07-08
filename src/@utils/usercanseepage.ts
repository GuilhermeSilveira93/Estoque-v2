import { redirect } from 'next/navigation';

import { ValidateUserPermissions, ValidateUserPermissionsProps } from '.';

export const userCanSeePage = async (props: ValidateUserPermissionsProps) => {
  const validate = await ValidateUserPermissions(props);

  if (!validate) {
    return redirect('/');
  }
};
