import apiDriverBuilder from '../../utilities/api-driver';
import { apiRoot } from './index'

const personRoot = `${apiRoot}remote/`;

export default apiDriverBuilder({
    load: {
        url: personRoot + '${name}'
    }
});
