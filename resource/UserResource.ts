import { getUserModel } from 'resources';

export default class UserResource {
    static getModel(id: string) {
        return getUserModel(id);
    }
}