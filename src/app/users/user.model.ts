    export interface User {
        id: number;
        email: string;
        first_name: string;
        last_name: string;
        avatar: string;
    }

    export interface ResponseUsers {
        page: number;
        per_page: number;
        total: number;
        total_pages: number;
        data: User[];
    }

    // Para Criar
    export interface RequestCreate {
        name: string;
        job: string;
    }

    export interface ResponseCreate {
        name: string;
        job: string;
        id: string;
        createdAt: Date;
    }

    // Para chamar um Get User por ID
     export interface ResponseUser{
     data: User
    }

    // Para o methodo update
    export interface RequestUpdate {
        name: string;
        job: string;
    }

    export interface ResponseUpdate {
        name: string;
        job: string;
        updatedAt: Date;
    }