import url from 'url';

import { ValidationError } from 'joi';
import request from 'request';
import { SingularEventData } from './@typeroot/singular';
import { SCHEMA } from './schema';

class Singular {
  private API_KEY: string;

  private API_ENDPOINT: string = `https://s2s.singular.net/api/v1/evt`;

  public schema = SCHEMA;

  constructor(API_KEY: string) {
    this.API_KEY = API_KEY;
  }

  async validateEvent(
    eventData: SingularEventData,
  ): Promise<{ error: Error | ValidationError | undefined; value: SingularEventData | null }> {
    const data = eventData;
    if (typeof data.e === 'object' && data.e !== null) {
      data.e = JSON.stringify(data.e);
    }

    try {
      const { schema } = this;
      const { error, value } = schema.validate(data);
      return { error, value };
    } catch (err) {
      return { error: new Error(err.message), value: null };
    }
  }

  queryString = (eventData: SingularEventData) => {
    const data = eventData;
    //   just to be sure
    if (typeof data.e === 'object' && data.e !== null) {
      data.e = JSON.stringify(data.e);
    }
    return new url.URLSearchParams(data as any).toString();
  };

  private options(eventData: SingularEventData) {
    const data = { ...eventData, a: this.API_KEY }; // add API kEY
    return {
      method: 'get',
      url: `${this.API_ENDPOINT}?${this.queryString(data)}`,
      json: true,
    };
  }

  private async sendApiRequest(eventData: SingularEventData) {
    const { error, value } = await this.validateEvent(eventData);
    if (error) {
      throw new Error(error.message);
    }
    if (!value) {
      throw new Error('Invalid Event Data!');
    }
    const options = this.options(value);
    return new Promise((resolve, reject) => {
      // Do async job
      request(options, (err: any, response: any, b: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(b);
        }
      });
    });
  }

  async sendEvent(eventData: SingularEventData) {
    try {
      const response = await this.sendApiRequest(eventData);
      return {error: null , response};
    } catch (err) {
      return {error: err.message, response: null}
    }
  }
}

export default Singular;
