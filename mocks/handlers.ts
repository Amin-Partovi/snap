import { rest } from 'msw';
import randomLocationGenerator from '../utils/randomLocationGenerator';

import { Location } from './types';

export const handlers = [
    rest.post('/search/get-address/', (req, res, ctx) => {
      
      return res(
        ctx.status(200),
      )
    }),

    rest.get('/search/get-address/', (req, res, ctx) => {
 
      return res(
        ctx.status(200),
        ctx.json<Location>(randomLocationGenerator()),
      )
    }),
  ]