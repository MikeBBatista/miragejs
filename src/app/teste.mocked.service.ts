import { Model, Server } from 'miragejs';
import { User } from './user';
import { Injectable } from '@angular/core';

@Injectable()
export default class TesteMockedService {

  private static users(): User[] {
    return [
      {
        login: 'Schnee',
        id: 1,
        name: 'Weiss',
      },
      {
        login: 'Rose',
        id: 2,
        name: 'Ruby',
      },
      {
        login: 'Belladona',
        id: 3,
        name: 'Blake',
      }
    ]
  }

  public mirageJsServer(): Server {
    return new Server({
      models: {user: Model},
      seeds(server){
        server.db.loadData({
          users: [
              {
                login: 'Schnee',
                id: 1,
                name: 'Weiss',
              },
              {
                login: 'Rose',
                id: 2,
                name: 'Ruby',
              },
              {
                login: 'Belladona',
                id: 3,
                name: 'Blake',
              }
          ]
        })
      },

      routes() {
        this.namespace = 'api';

        this.get('/users', () => {
          return this.schema.all('user');
        });

        this.post("/users", (schema, request) => {
          const attrs = JSON.parse(request.requestBody)
        
          return schema.create('user', attrs);
        })
      }
    });
  }
}