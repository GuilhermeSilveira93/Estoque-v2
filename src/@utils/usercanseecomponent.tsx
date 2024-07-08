import {
  ValidateUserPermissions,
  ValidateUserPermissionsProps
} from './validate-user-permissions';

type UserCanSeeComponentProps = ValidateUserPermissionsProps & {
  children: React.ReactNode
};

export const UserCanSeeComponent = async ({
  children,
  ...props
}: UserCanSeeComponentProps) => {
  const userCanSeeComponent = await ValidateUserPermissions(props);

  if (userCanSeeComponent) {
    return <>{children}</>;
  }

  return null;
};
