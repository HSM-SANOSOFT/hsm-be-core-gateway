import { Body, Controller, Logger, Post } from '@nestjs/common';
import axios from 'axios';
import { ChatwootWebhookPayload } from 'src/webhook/type/int';

@Controller('chatwoot')
export class ChatwootController {
  private readonly logger = new Logger(ChatwootController.name);

  @Post('ConversationCreated')
  handleIncomingMessage(@Body('payload') payload: ChatwootWebhookPayload) {
    const channel = payload.channel.split('::')[1];
    const contact_id = payload.meta.sender.id;
    const conversation_id = payload.id;
    const inbox_id = payload.inbox_id;
    const source_id = payload.contact_inbox.source_id;
    const email = payload.meta.sender.email;
    const name = payload.meta.sender.name;
    const phone = payload.meta.sender.phone_number;
    const custom_attributes = payload.meta.sender.custom_attributes;
    const message = payload.messages[0]?.content || null;

    const data: {
      channel: string;
      contact_id: number;
      conversation_id: number;
      inbox_id: number;
      source_id: string;
      email: string | null;
      name: string | null;
      phone: string | null;
      custom_attributes: Record<string, unknown>; // {CI:string}
      message: string | null;
    } = {
      channel,
      contact_id,
      conversation_id,
      inbox_id,
      source_id,
      email,
      name,
      phone,
      custom_attributes,
      message,
    };

    this.logger.log('Received Chatwoot message:', JSON.stringify(data));

    axios
      .post(
        'https://hospitalsm.org/sanosoft/API/CRM_VENTAS/chatwootDatos.php',
        data,
      )
      .catch(err => {
        this.logger.error('Error sending user data to chatwoot:', err);
      });
  }
}
