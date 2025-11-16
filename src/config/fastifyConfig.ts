import Fastify from 'fastify';

import type { TFastifyHttpOptions } from '@/types/server.js';
import envConfig from './envConfig.js';

async function setupFastifyHttp(opts: TFastifyHttpOptions = {}) {
  const defaultLogger =
    envConfig.app.nodeEnv === 'production'
      ? {
          level: envConfig.logger.logLevel,
        }
      : {
          level: envConfig.logger.logLevel,
          transport: {
            target: 'pino-pretty',
            options: {
              translateTime: 'HH:MM:ss Z',
              ignore: 'pid,hostname',
            },
          },
        };

  const fastify = Fastify({
    ...opts,
    logger: opts?.logger ? opts.logger : defaultLogger,
  });

  return fastify;
}

export default setupFastifyHttp;
