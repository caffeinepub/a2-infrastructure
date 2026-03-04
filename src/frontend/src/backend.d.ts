import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Service {
    title: string;
    description: string;
}
export type Time = bigint;
export interface Project {
    title: string;
    description: string;
    image: string;
}
export interface ContactSubmission {
    subject: string;
    name: string;
    email: string;
    message: string;
    timestamp: Time;
    phone: string;
}
export interface backendInterface {
    getAllContactSubmissions(): Promise<Array<ContactSubmission>>;
    getProjects(): Promise<Array<Project>>;
    getServices(): Promise<Array<Service>>;
    submitContactForm(name: string, email: string, phone: string, subject: string, message: string): Promise<void>;
}
