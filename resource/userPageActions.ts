import UserResource from './UserResource';  
import { User } from 'resources';
import { Store } from 'vuex';

type State = {
    currentUser: User,
};

type AppStore = Store<State>;

export function showUserPage(store: AppStore, userId: string): Promise<void> {
    return UserResource.getModel(userId)
    .then(function onSuccess(user) {
        const reformattedUser = {
            oldness: user.age,
            alias: user.name,
            emailAddy: user.email,
        };
        store.dispatch('UPDATE_CURRENT_USER', reformattedUser);
    })
    .catch(function onFailure(error: Error) {
        store.dispatch('SHOW_USER_ERROR', error.message);
    });
}

// Exercise: Change the type of User in resources.d.ts (e.g. change 'name' to 'nomme').
// Fix the resulting errors.

// Exercise: Add a new resource 'Album' (e.g. a music album) and a function 'getFavoriteAlbum(userId)' that
// returns an array of favorite albums. Incorporate that into the 'showUserPage' action.


// Advanced Exercise: Implement a generic 'Resource<T>' class such that, say, UserResource extends Resource<User>