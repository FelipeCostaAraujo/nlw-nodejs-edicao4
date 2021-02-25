import request from 'supertest';
import { app } from '../../app/app';

import createConnection from '../database';

describe("Surveys", () => {

    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    });

    it("Should be able to create a new survey", async () => {
        const response = await request(app).post("/api/surveys").send({
            title: "any_title",
            description: "any_description"
        });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty("id");
    });

    it("Should be able to get all surveys", async () => {
        await request(app).post("/api/surveys").send({
            title: "any_title",
            description: "any_description"
        });

        const response = await request(app).get("/api/surveys");

        expect(response.body.length).toBe(2);
    });

});