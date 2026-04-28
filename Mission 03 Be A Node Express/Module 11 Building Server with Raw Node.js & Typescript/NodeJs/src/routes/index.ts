import { readUser, writeUser } from "../helpers/fileDb";
import parseBody from "../helpers/parse-body";
import addRoutes from "../helpers/RouteHandler";
import sendJson from "../helpers/send-json";

addRoutes("GET", "/", (req, res) => {
    sendJson(res, 200, {
        message: "Hello from node js with typescript...",
        path: req.url
    });
});

addRoutes("GET", '/api', (req, res) => {
    sendJson(res, 200, {
        message: "Health status ok",
        path: req.url
    })
});

addRoutes("POST", "/api/users", async (req, res) => {
    const body = await parseBody(req);

    const users = readUser();

    const newUser = {
        id: Date.now(),
        ...body
    };

    users.push(newUser);

    writeUser(users);

    sendJson(res, 201, { success: true, data: body });
});

addRoutes("PUT", "/api/users/:id", async (req, res) => {
    const { id } = (req as any).params;

    const body = await parseBody(req);

    const users = readUser();

    const index = users.findIndex((user: any) => user.id == id);

    if (index === -1) {
        sendJson(res, 404, {
            success: false,
            message: "User not found"
        });
    };

    users[index] = {
        ...users[index], ...body
    };

    writeUser(users);

    sendJson(res, 202, {
        success: true,
        message: `id: ${id} User Updated`,
        data: users[index]
    });
});
