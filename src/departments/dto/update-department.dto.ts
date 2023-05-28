import { PartialType } from '@nestjs/mapped-types'
import { CreateDepartmentDto } from './create-department.dto'

export class UpdateDepartmentDto extends PartialType(CreateDepartmentDto) {
  private name: string
  private description: string
  private companyId: number
}
