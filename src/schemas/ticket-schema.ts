import Joi from 'joi';
import { InputTicketBody } from '@/protocols';

export const createTicketSchema = Joi.object<InputTicketBody>({
  ticketTypeId: Joi.number().integer().min(1).required(),
});
