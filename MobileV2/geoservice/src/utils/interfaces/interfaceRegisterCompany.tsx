
export interface IDataRegisterCompany {
    name: string;
    whatsapp: number;
    industry: {};
    opening_hours: {};
    open_on_weekends: boolean;
    images: [];
}

export interface IRegisterCompany {
    children?: React.ReactNode;
    info: IDataRegisterCompany;
    registerCompany: () => void;
}