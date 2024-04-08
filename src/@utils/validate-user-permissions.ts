import { RolesRequiredProps } from '@/@types'

import { getUserCurrent } from './get-user-current'

export type ValidateUserPermissionsProps = {
  rolesRequired: RolesRequiredProps[]
  requireAll?: boolean
}

export const ValidateUserPermissions = async ({
  requireAll = false,
  rolesRequired
}: ValidateUserPermissionsProps) => {
  const { ID_GRUPO } = await getUserCurrent()
  if (rolesRequired) {
    if (!ID_GRUPO) {
      return null
    }
    let hasAllPermissions

    if (requireAll) {
      hasAllPermissions = rolesRequired.every(
        (role) => String(role) === String(ID_GRUPO)
      )
    } else {
      hasAllPermissions = rolesRequired.some(
        (role) => String(role) === String(ID_GRUPO)
      )
    }

    if (!hasAllPermissions) {
      return null
    }
  }

  return true
}
