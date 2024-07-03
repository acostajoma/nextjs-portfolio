'use server'

import prisma from "@/clients/prisma"
import { contactSchema } from "@/schema/contact";

type FormErrors = {
    name?: string[] | undefined;
    email?: string[] | undefined;
    company?: string[] | undefined;
    phone?: string[] | undefined;
    message?: string[] | undefined;
};

type Response = {
    errors?: FormErrors;
    success?: boolean;
    message?: string;
};

export async function sendMessage (prevState: any , formData: FormData) : Promise<Response> {
    const email = formData.get('email');
    const name = formData.get('name');
    const message = formData.get('message');
    const phone = formData.get('phone');
    const company = formData.get('company');
    console.log(email, name, message, phone, company)

    const parsedData = contactSchema.safeParse({
        email,
        name,
        message,
        phone,
        company
    })

    if (!parsedData.success) {
        // Handle validation errors
        const errorMessages = parsedData.error.errors.map(error => error.message).join(', ');
        console.error('Validation error:', errorMessages);
        return {
            errors :parsedData.error.flatten().fieldErrors,
            success: false
        }
    }

    try {
        await prisma.contactData.create({
            data: {
                email: parsedData.data.email,
                name: parsedData.data.name,
                message: parsedData.data.message,
                phone: parsedData.data.phone || null,
                company: parsedData.data.company || null
            }
        });
        return {
            success: true,
            message: 'Message sent successfully'
        }
    } catch (error) {
        console.error('Database error:', error);
        return { 
            message: 'Oops. An error ocurred while sending the message.',
            success : false
        }
    }

}