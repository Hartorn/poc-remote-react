import React from 'react';
import {navigate} from '../utilities/router';

const AdminView = function AdminView({children}) {
    return ( 
        <div>
            <h2>{'Administration'}</h2>
            <div>
                <button onClick={() => navigate('admin/bonjour')}>Test1</button>
                <button onClick={() => navigate('admin/createClass')}>Test2</button>
                <button onClick={() => navigate('admin/pureFunction')}>Test3</button>
            </div>

            <div>{children}</div>
        </div>
    );
} 

AdminView.displayName = 'AdminView';

export default AdminView;