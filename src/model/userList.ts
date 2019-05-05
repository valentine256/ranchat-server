// import
import { Client } from "pg";

//
const connectionString = "postgressql://postgres:saint@localhost:5432/ranchat";

const client = new Client({
  connectionString: connectionString
});

// User class
export default class User {
// type
  id: number;
  password: string;
  gender: number;
  name: string;
  date: number;

  constructor() {
    this.id = 0;
    this.password = "";
    this.gender = -1;
    this.name = "";
    this.date = Date.now();
  }

  async findMaxId(): Promise<number> {
    await client.connect();
    const res: any = await client.query("SELECT max(id) FROM userlist");
    await client.end();
    return res.rows[0].max;
  }

  async setNewId() {
    const maxId = await this.findMaxId();
    console.log(maxId);
    this.id = maxId + 1;
  }

  async sum(a: number, b: number): Promise<number> {
    return a + b;
  }

}