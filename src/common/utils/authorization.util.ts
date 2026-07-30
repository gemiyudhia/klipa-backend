import { ForbiddenException } from '@nestjs/common';

export function assertOwnerOrAdmin(
  resourceOwnerId: string,
  currentUserId: string,
  currentUserRole: string,
  message: 'anda tidak memiliki akses ke resouce ini',
): void {
  const isOwner = resourceOwnerId === currentUserId;
  const isAdmin = currentUserRole === 'ADMIN';

  if (!isOwner && !isAdmin) throw new ForbiddenException(message);
}
