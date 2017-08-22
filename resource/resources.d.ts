declare module 'resources' {
    type User = {
        name: string,
        age: number,
        email: string,
    }

    function getUserModel(id: string): Promise<User>
}