interface Response {
    token: string;
    user: {
        name: string,
        email: string
    }
}

export function signIn(): Promise<Response> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: '44as5d4a48a4w84e8qwef48sd4f4fd6hwerwersa156a',
                user: {
                    name: 'José Domingos',
                    email: 'Jose@Domingos.com.br'
                },
            });
        }, 2000);
    });
}