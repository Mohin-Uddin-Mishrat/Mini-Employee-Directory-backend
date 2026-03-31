export type TEmployee = {
    name: string;
    email: string;
    department: string;
    position: string;
}

export type TUpdateEmployee = Partial<TEmployee>;
