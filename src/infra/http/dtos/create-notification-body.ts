import { IsNotEmpty, IsUUID, Length } from 'class-validator'

export class CreateNotificationBody {
    @IsNotEmpty()
    @IsUUID()
    recipientId: String;

    @IsNotEmpty()
    @Length(5, 240)
    content: String;

    @IsNotEmpty()
    category: String;
}