import { NotificationsRepository } from "../repositories/notifications-repository";
import { Content } from "../entities/Content";
import { Notification } from "../entities/notification";
import { Injectable } from "@nestjs/common/decorators";

interface SendNotificationRequest {
    recipientId: string;
    content: string;
    category: string;
}

interface SendNotificationResponse {
    notification: Notification;
}
@Injectable()
export class SendNotification {
    constructor(private notificationsRepository: NotificationsRepository) {}
    
    async execute(
        request: SendNotificationRequest,
        ): Promise<SendNotificationResponse> {
        const { recipientId, content, category} = request;

        const notification = new Notification ({
            recipientId,
            content: new Content(content),
            category,
        });

        await this.notificationsRepository.create(notification);

        return {
            notification,
        };
    }
}