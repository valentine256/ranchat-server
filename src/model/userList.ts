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
// constructor of this class
  constructor() {
    this.id = 0;
    this.password = "";
    this.gender = -1;
    this.name = "";
    this.date = Date.now();
  }

// find max value of id in userlist table and return
  async findMaxId(): Promise<number> {
    await client.connect();
    const res: any = await client.query("SELECT max(id) FROM userlist");
    await client.end();
    return res.rows[0].max;
  }

// set this.id is max value of id + 1
  async setNewId() {
    const maxId = await this.findMaxId();
    this.id = maxId + 1;
// console.log for test
    console.log(maxId);
  }

// async function example by wangue
  async sum(a: number, b: number): Promise<number> {
    return a + b;
  }
}