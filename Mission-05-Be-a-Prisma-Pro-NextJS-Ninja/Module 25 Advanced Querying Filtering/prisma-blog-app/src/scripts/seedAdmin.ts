import { prisma } from "../lib/prisma";
import { UserRole } from "../middlewares/auth";

async function seedAdmin() {
    try {
        // check user exists on db or not
        const adminData = {
            name: process.env.name,
            email: process.env.email as string,
            role: UserRole.ADMIN,
            password: process.env.password
        };

        const existingUser = await prisma.user.findUnique({
            where: {
                email: adminData.email
            }
        });

        if (existingUser) {
            throw new Error("User already exists!!!");
        }

        const signUpAdmin = await fetch("http://localhost:7000/api/auth/sign-up/email", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(adminData)
        });

        console.log(signUpAdmin);

    } catch (error) {
        console.log(error);
    }
};

seedAdmin();