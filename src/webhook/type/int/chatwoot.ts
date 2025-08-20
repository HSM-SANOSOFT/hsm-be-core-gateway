export interface ChatwootWebhookPayload {
  additional_attributes: Record<string, unknown>;
  can_reply: boolean;
  channel: string; // e.g. "Channel::Whatsapp"
  contact_inbox: {
    id: number;
    contact_id: number;
    inbox_id: number;
    source_id: string;
    created_at: string; // ISO datetime
    updated_at: string; // ISO datetime
    hmac_verified: boolean;
    pubsub_token: string;
  };
  id: number; // conversation id
  inbox_id: number;
  messages: ChatwootMessage[];
  labels: string[];
  meta: {
    sender: ChatwootSender;
    assignee: ChatwootAssignee | null;
    team: ChatwootTeam | null;
    hmac_verified: boolean;
  };
  status: string; // e.g. "pending"
  custom_attributes: Record<string, unknown>;
  snoozed_until: string | null;
  unread_count: number;
  first_reply_created_at: number | null;
  priority: string | null;
  waiting_since: number;
  agent_last_seen_at: number;
  contact_last_seen_at: number;
  last_activity_at: number;
  timestamp: number;
  created_at: number;
  updated_at: number;
  event: string; // e.g. "conversation_created"
}

export interface ChatwootMessage {
  id: number;
  content: string;
  account_id: number;
  inbox_id: number;
  conversation_id: number;
  message_type: number;
  created_at: number;
  updated_at: string;
  private: boolean;
  status: string; // "sent", etc.
  source_id: string;
  content_type: string; // "text", etc.
  content_attributes: Record<string, unknown>;
  sender_type: string;
  sender_id: number;
  external_source_id: Record<string, unknown>;
  additional_attributes: Record<string, unknown>;
  processed_message_content: string;
  sentiment: Record<string, unknown>;
  conversation: {
    assignee_id: number | null;
    unread_count: number;
    last_activity_at: number;
    contact_inbox: {
      source_id: string;
    };
  };
}

export interface ChatwootSender {
  additional_attributes: Record<string, unknown>;
  custom_attributes: Record<string, unknown>;
  email: string | null;
  id: number;
  identifier: string | null;
  name: string | null;
  phone_number: string | null;
  thumbnail: string | null;
  blocked: boolean;
  type: string;
}

export interface ChatwootAssignee {
  id: number;
}

export interface ChatwootTeam {
  id: number;
}
