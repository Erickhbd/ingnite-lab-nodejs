import { Module } from "@nestjs/common";
import { NotificationsRepository } from '../../application/repositories/notifications-repository';
import { PrismaService } from "./prisma/prisma.service";

@Module({
    providers: [
        PrismaService,
        {
            provide: NotificationsRepository,
            useClass: PrismaService,
        }
    ],
    exports: [
        NotificationsRepository,
    ],
})

export class DatabaseModule {}