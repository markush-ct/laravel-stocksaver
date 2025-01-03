export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

export type Category = {
    id: number;
    name: string;
    description: string;
    created_at: string;
};

export type Supplier = {
    id: number;
    name: string;
    contact_number: string;
    email: string;
};

export type PaginatedData<T = any> = {
    data: T[];
    links: Record<string, string>;
    meta: {
        total: number;
        current_page: number;
        per_page: number;
    };
};

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
};
