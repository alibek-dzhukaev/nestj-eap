import { Injectable } from '@nestjs/common'
import { CreateDepartmentDto } from './dto/create-department.dto'
import { UpdateDepartmentDto } from './dto/update-department.dto'
import { Department } from './entities/department.entity'

@Injectable()
export class DepartmentsService {
  constructor(private department: Department) {}

  create(createDepartmentDto: CreateDepartmentDto) {
    return 'This action adds a new department'
  }

  findAll() {
    return `This action returns all departments`
  }

  findOne(id: number) {
    return `This action returns a #${id} department`
  }

  update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    return `This action updates a #${id} department`
  }

  remove(id: number) {
    return `This action removes a #${id} department`
  }
}
