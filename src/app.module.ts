import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { getConnectionOptions } from 'typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ApprovalsModule } from './approvals/approvals.module'
import { AttachmentsModule } from './attachments/attachments.module'
import { AuthModule } from './auth/auth.module'
import { CompaniesModule } from './companies/companies.module'
import { DeliveriesModule } from './deliveries/deliveries.module'
import { DepartmentsModule } from './departments/departments.module'
import { DocumentsModule } from './documents/documents.module'
import { ExportModule } from './export/export.module'
import { FundingModule } from './funding/funding.module'
import { NewsModule } from './news/news.module'
import { OrganizationsModule } from './organizations/organizations.module'
import { PartnersModule } from './partners/partners.module'
import { PeriodsModule } from './periods/periods.module'
import { RecordsModule } from './records/records.module'
import { RolesModule } from './roles/roles.module'
import { SectionsModule } from './sections/sections.module'
import { UsersModule } from './users/users.module'

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(await getConnectionOptions(), {
          autoLoadEntities: true,
        }),
    }),
    ApprovalsModule,
    AttachmentsModule,
    AuthModule,
    CompaniesModule,
    DeliveriesModule,
    DepartmentsModule,
    DocumentsModule,
    ExportModule,
    FundingModule,
    NewsModule,
    OrganizationsModule,
    PartnersModule,
    PeriodsModule,
    RecordsModule,
    RolesModule,
    SectionsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
