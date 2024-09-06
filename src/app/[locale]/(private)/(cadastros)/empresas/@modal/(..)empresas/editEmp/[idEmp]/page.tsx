'use client'
import { useRouter } from 'next/navigation'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
const EditEmp = ({ params }: { params: { idEmp: string } }) => {
  const router = useRouter()
  return (
    <Dialog open onOpenChange={() => router.back()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Interceptor {params.idEmp}</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
export default EditEmp
