import { RolesRequired } from '@/@types'

import { getUserCurrent } from './get-user-current'

export type ValidateUserPermissionsProps = {
  rolesRequired: RolesRequired[]
}

export const ValidateUserPermissions = async ({
  rolesRequired,
}: ValidateUserPermissionsProps) => {
  const { st_grupo } = await getUserCurrent()
  const nivel = st_grupo.N_NIVEL
  const hasAllPermissions = rolesRequired.some((role) => {
    return role === nivel
  })
  if (!hasAllPermissions) {
    return null
  }
  return true
}
