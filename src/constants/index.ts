

type Comment = {
    id: string;
    message: string;
    user_id: number;
}

export const comments: Comment[] = [
    {
        id: "1",
        message: "Este é um comentário interessante!",
        user_id: 1
    },
    {
        id: "2",
        message: "Concordo com o ponto de vista apresentado.",
        user_id: 2
    },
    {
        id: "3",
        message: "Precisamos de mais informações sobre este tópico.",
        user_id: 1
    },
    {
        id: "4",
        message: "Excelente trabalho, continue assim!",
        user_id: 3
    },
    {
        id: "5",
        message: "Eu tenho uma dúvida sobre a conclusão deste artigo.",
        user_id: 4
    }
];
