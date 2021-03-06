import { Message, Snowflake } from "discord.js";
import { Event } from '../event';
import { parseItemChecklistContent } from './parseItemChecklistContent';

export function parseEventFromMessage(message: Message, clientUserId: Snowflake): readonly Event[] {
  const events: Event[] = [];

  const { id, author, content, attachments, mentions } = message;
  if (author.id === clientUserId) {
    return events;
  }

  console.debug('parseEventFromMessage', message);

  if (content.toLocaleLowerCase() === 'ping') {
    events.push({
      type: 'Pinged',
    });
  }

  for (const attachment of attachments.values()) {
    if (attachment.width === null) {
      console.warn('Received an attachment that is not an image', {
        messageId: id,
        attachment,
      });
      continue;
    }
    events.push({
      type: 'ImagePosted',
      url: attachment.url,
    });
  }

  const parsedItemChecklistContent = parseItemChecklistContent(content, mentions);
  if (parsedItemChecklistContent) {
    events.push({
      type: 'ItemChecklistPosted',
      parsedItemChecklistContent,
    });
  }

  return events;
}
