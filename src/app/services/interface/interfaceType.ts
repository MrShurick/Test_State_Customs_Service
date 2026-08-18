export interface IQuestion {
    question: string;
    options: string[];
    correct_answer: string;
}

export type TCustomsTestData = Record<string, IQuestion[]>;

export interface ISubCategory {
    title: string;
    link: string;
}

export interface ICategoryGroup {
    title: string;
    subCategory: ISubCategory[];
}
